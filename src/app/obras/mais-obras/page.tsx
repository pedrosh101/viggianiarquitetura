"use client";

import Navbar from "../../components/navbar";
import { projects } from "../../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import Image from "next/image";

export default function Projetos() {
  const primeiros = projects.find((proj) => proj.id === 100);
  const outros = projects.find((proj) => proj.id === 101);
  const todasFotos = [...(primeiros?.fotos || []), ...(outros?.fotos || [])];

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-slate-100 pt-24 font-kabel text-black text-3xl">
        <Swiper
          navigation
          pagination={{ type: "fraction" }}
          slidesPerView="auto"
          spaceBetween={4}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="md:h-[24em] md:w-[36em] h-96 w-96 my-0 md:my-10"
        >
          {todasFotos.map((foto, index) => (
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
      </main>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: black;
        }
      `}</style>
    </>
  );
}
