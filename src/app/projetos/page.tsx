"use client";

import Navbar from "../components/navbar";
import { projects } from "../data/projects";
import Link from "next/link";
import Projeto from "../components/projeto2";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import Image from "next/image";

export default function Projetos() {
  const projeto14 = projects.find((proj) => proj.id === 14);
  const projeto15 = projects.find((proj) => proj.id === 15);



  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen sm:px-24 px-4 bg-slate-100 pt-24 font-kabel text-black text-3xl items-center">
        <Accordion
          allowMultiple
          className="flex flex-col w-full my-14 text-center items-center space-y-6"
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <span>Primeiros Projetos</span>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Swiper
                navigation
                pagination={{ type: "fraction" }}
                slidesPerView="auto"
                spaceBetween={4}
                modules={[Navigation]}
                className="md:h-[20em] md:w-[36em] h-96 w-96 my-0 md:my-10"
              >
                {projeto14?.fotos.map((foto, index) => (
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
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <span>Todos</span>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <div className="grid sm:grid-cols-4 gap-2 sm:pt-6 text-white pb-2 my-10 md:my-0">
                {projects
                  .filter((proj) => proj.decada === "todos")
                  .map((proj) => (
                    <Link
                      key={proj.id}
                      href={{
                        pathname: `/projetos/${proj.id}`,
                      }}
                    >
                      <Projeto title={proj.title} path={proj.img} />
                    </Link>
                  ))}
              </div>
            </AccordionPanel>
          </AccordionItem>

                    <AccordionItem>
            <h2>
              <AccordionButton>
                <span>Outros</span>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <Swiper
                navigation
                pagination={{ type: "fraction" }}
                slidesPerView="auto"
                spaceBetween={4}
                modules={[Navigation]}
                className="md:h-[20em] md:w-[36em] h-96 w-96 my-0 md:my-10"
              >
                {projeto15?.fotos.map((foto, index) => (
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
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </main>
    </>
  );
}
