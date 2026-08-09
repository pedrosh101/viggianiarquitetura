"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { projects } from "../../data/projects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ProjetoDetalhes = ({ params }: any) => {
  const proj = projects.find((proj) => proj.id.toString() === params.id);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    if (selectedImageIndex !== null) {
      api.scrollTo(selectedImageIndex, true);
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, selectedImageIndex]);

  return (
    <>
      <main className="flex w-full flex-col bg-slate-100 text-black">
        <Navbar navbarZIndex={modalIsOpen} />
        <div className="flex sm:flex-row flex-col pt-32 sm:px-6 px-4 pb-12">
          {/* left */}
          <div className="flex w-full flex-col md:w-1/2 md:h-screen md:sticky md:top-0 md:pr-8">
            <div className="relative h-[60vh] min-h-[400px] w-full md:h-[70vh]">
              <Image
                src={proj?.img as string}
                alt={proj?.title || "Imagem do projeto"}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col pt-5 md:pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h1 className="text-3xl tracking-tight md:text-5xl font-kabel">
                  {proj?.title}
                </h1>

                <span className="shrink-0 font-sans text-xs uppercase tracking-widest text-black/80">
                  Projeto
                </span>
              </div>

              {proj?.description && (
                <p className="mt-4 font-sans text-sm leading-6 text-black/70 md:text-base md:leading-7">
                  {proj.description}
                </p>
              )}
            </div>
          </div>

          {/* direita, miniaturas */}
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:w-1/2 gap-4 justify-center sm:pt-0 pt-4">
            {proj?.fotos.map((foto, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="relative 2xl:min-h-96 min-h-56 w-full"
              >
                <Image
                  src={foto}
                  alt={`Imagem ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="cursor-pointer object-cover"
                />
              </div>
            ))}

            {/* modal, carousel */}
            {modalIsOpen && selectedImageIndex !== null && (
              <div
                className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
                onClick={closeModal}
              >
                {/* Fundo */}
                <div className="absolute inset-0 bg-black/85" />

                {/* Conteúdo */}
                <div
                  className="relative z-10 flex h-full w-full items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Fechar */}
                  <button
                    onClick={closeModal}
                    className="absolute right-2 top-2 z-50 text-4xl font-light text-white hover:opacity-70 sm:right-6 sm:top-4"
                    aria-label="Fechar"
                  >
                    &times;
                  </button>

                  <Carousel
                    setApi={setApi}
                    opts={{
                      startIndex: selectedImageIndex,
                    }}
                    className="w-full max-w-6xl"
                  >
                    <CarouselContent>
                      {proj?.fotos.map((foto, index) => (
                        <CarouselItem key={index}>
                          <div className="relative flex h-[75vh] w-full items-center justify-center">
                            <Image
                              src={foto}
                              alt={`Imagem ${index + 1}`}
                              fill
                              sizes="90vw"
                              className="object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-2 sm:left-4 bg-slate-200" />
                    <CarouselNext className="right-2 sm:right-4 bg-slate-200" />
                  </Carousel>

                  {/* Paginação */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white">
                    {current} / {count}
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
