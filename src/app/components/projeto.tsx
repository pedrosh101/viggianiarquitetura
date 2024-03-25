"use client";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";

type ProjetoProps = {
  title: string;
  path: string;
};

const Projeto: React.FC<ProjetoProps> = ({ title, path }) => {
  const [showText, setShowText] = useState(false);
  const [hoveringText, setHoveringText] = useState(false);

  const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add(
      "filter",
      "brightness-50"
    );
    setShowText(true);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("filter", "brightness-50");
    if (!hoveringText) {
      setShowText(false);
    }
  };

  return (
    <div className="relative overflow-hidden aspect-square">
      <Image
        src={path}
        alt="Imagem"
        fill
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={handleMouseLeave}
        className="object-cover"
      />
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full ${
          showText || hoveringText
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <div
          className={`py-1 text-center z-50 text-clr1 cursor-pointer ${
            showText || hoveringText ? "opacity-100" : "opacity-0"
          }`}
          onMouseEnter={() => setHoveringText(true)}
          onMouseLeave={() => setHoveringText(false)}
        >
          <p className="font-public text-lg">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Projeto;
