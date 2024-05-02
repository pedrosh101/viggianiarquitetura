"use client";
import React from "react";
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
      <main className="flex w-full flex-col bg-slate-100 text-black">
        <Navbar navbarZIndex={modalIsOpen} /> {/* Aqui está a alteração */}
        <div className="flex sm:flex-row flex-col sm:pt-24 pt-32 sm:px-6 px-4 sm:space-x-6 pb-12">
          {/* left */}
          <div className="flex flex-col md:h-screen sm:w-1/2">
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
            <h1 className="sm:text-5xl text-4xl md:my-8 my-4">
              {proj?.title}
            </h1>
            <div className="w-full text-md">
              {proj?.description && <h2>{proj?.description}</h2>}
            </div>
          </div>

          {/* direita, miniaturas */}

          <div className="grid sm:grid-cols-2 grid-cols-1 sm:w-1/2 gap-4 justify-center sm:pt-0 pt-4">
            {proj?.fotos.map((foto, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="relative min-h-96 w-full"
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
                        className="md:min-h-screen md:w-[70em] h-96 w-96"
                        initialSlide={
                          selectedImageIndex !== null ? selectedImageIndex : 0
                        }
                      >
                        {proj?.fotos.map((foto, index) => (
                          <SwiperSlide key={index}>
                            <div className="flex h-full w-full items-center justify-center relative">
                              <Image
                                src={foto}
                                alt={`Imagem ${index + 1}`}
                                className="block object-contain"
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
