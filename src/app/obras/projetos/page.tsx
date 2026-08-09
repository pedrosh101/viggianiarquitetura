"use client";

import * as React from "react";
import Navbar from "../../components/navbar";
import { projects } from "../../data/projects";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Projetos() {
  const projetos3d = projects.find((proj) => proj.id === 102);

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-slate-100 pt-24 font-kabel text-black text-3xl">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="md:h-[24em] md:w-[32em] h-96 w-96 my-0 md:my-10"
        >
          <CarouselContent className="h-full">
            {projetos3d?.fotos.map((foto, index) => (
              <CarouselItem key={index} className="h-96 md:h-[24em]">
                <div className="flex h-full w-full items-center justify-center relative">
                  <Image
                    src={foto}
                    alt={`Imagem ${index + 1}`}
                    className="block object-contain"
                    fill
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black" />
          <CarouselNext className="text-black" />
        </Carousel>

        <div className="text-sm text-slate-600 mt-2">
          {current} / {count}
        </div>
      </main>
    </>
  );
}