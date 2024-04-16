"use client";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { projects } from "../../data/projects";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const ProjetoDetalhes = ({ params }: any) => {
  const proj = projects.find((proj) => proj.id.toString() === params.id);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <main className="flex w-full flex-col bg-slate-100 text-black min-h-screen">
        <Navbar navbarZIndex="z-0" />
        <div className="flex sm:flex-row flex-col pt-24 sm:px-6 px-4 space-x-6 pb-12">
          <div className="flex flex-col md:min-h-screen w-full">
            {/* main pic */}
            <div className="sm:h-5/6 h-96 w-full relative">
              <Image
                src={proj?.img as string}
                alt="Imagem"
                fill
                className="object-cover"
              />
            </div>

            {/* textos */}

            <h1 className="sm:text-5xl text-4xl sm:my-12 my-10 text-center">
              {proj?.title}
            </h1>

            <div className="w-full px-4 sm:px-0 text-sm">
              {proj?.local && (
                <div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">local</h2>
                    <h2>{proj?.local}</h2>
                  </div>
                </div>
              )}

              {proj?.decada && (
                <div>
                  <div className="h-[1.0px] w-full bg-black my-2"></div>
                  <div className="flex justify-between">
                    <h2 className="font-semibold">ano</h2>
                    <h2>{proj?.decada}</h2>
                  </div>
                </div>
              )}
              {proj?.description && (
                <div>
                  <div className="h-[1.0px] w-full bg-black my-2"></div>
                  <div className="flex justify-between">
                    <h2>{proj?.description}</h2>
                  
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* direita, miniaturas */}

          <div className="flex gap-4 w-full justify-center">
            {proj?.fotos.map((foto, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="h-full w-full relative"
              >
                <Image
                  src={foto}
                  alt={`Imagem ${index + 1}`}
                  fill
                  className="cursor-pointer object-cover"
                />
              </div>
            ))}

            {/* modal, swiper */}
            {modalIsOpen && selectedImageIndex !== null && (
              <div
                className="fixed inset-0 flex items-center justify-center min-h-screen"
                onClick={closeModal}
              >
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-white text-3xl z-50"
                  >
                    &times;
                  </button>

                  <div className="overflow-hidden">
                    <div className="container">
                      <Swiper
                        navigation
                        pagination={{ type: "fraction" }}
                        modules={[Navigation, Pagination]}
                        className="md:h-[50em] md:w-[80em] h-96 w-96"
                        initialSlide={
                          selectedImageIndex !== null ? selectedImageIndex : 0
                        }
                      >
                        {proj?.fotos.map((foto, index) => (
                          <SwiperSlide key={index}>
                            <div className="flex h-full w-full items-center justify-center">
                              <Image
                                src={foto}
                                alt={`Imagem ${index + 1}`}
                                className="block object-contain h-full w-full"
                                fill
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjetoDetalhes;
