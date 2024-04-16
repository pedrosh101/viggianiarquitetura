"use client";

import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
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

export default function Projetos() {
  const [accordionIndex, setAccordionIndex] = useState(0);
  const ano = "1980";

  useEffect(() => {
    if (ano === "1980") {
      setAccordionIndex(0);
    } else if (ano === "1990") {
      setAccordionIndex(1);
    } else if (ano === "2000") {
      setAccordionIndex(2);
    } else if (ano === "2010") {
      setAccordionIndex(3);
    } else {
      setAccordionIndex(-1);
    }
  }, [ano]);

  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen sm:px-24 px-4 bg-slate-100 pt-24 font-kabel text-black text-3xl items-center">
        <Accordion defaultIndex={[0]} allowMultiple className="my-14">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <span>1980</span>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <div className="grid sm:grid-cols-3 gap-2 sm:pt-6 text-white pb-2">
                {projects
                  .filter((proj) => proj.decada === "80")
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
                <span>1990</span>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>              <div className="grid sm:grid-cols-3 gap-2 sm:pt-6 text-white pb-2">
                {projects
                  .filter((proj) => proj.decada === "90")
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
              </div></AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <span>2000</span>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>              <div className="grid sm:grid-cols-3 gap-2 sm:pt-6 text-white pb-2">
                {projects
                  .filter((proj) => proj.decada === "00")
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
              </div></AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <span>2010</span>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>              <div className="grid sm:grid-cols-3 gap-2 sm:pt-6 text-white pb-2">
                {projects
                  .filter((proj) => proj.decada === "10")
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
              </div></AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <span>Outros</span>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>              <div className="grid sm:grid-cols-3 gap-2 sm:pt-6 text-white pb-2">
                {projects
                  .filter((proj) => proj.decada === "outros")
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
              </div></AccordionPanel>
          </AccordionItem>
        </Accordion>
      </main>
    </>
  );
}
