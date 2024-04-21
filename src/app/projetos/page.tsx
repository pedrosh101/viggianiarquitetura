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

export default function Projetos() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen sm:px-24 px-4 bg-slate-100 pt-24 font-kabel text-black text-3xl items-center">
        <Accordion defaultIndex={[0]} allowMultiple className="flex flex-col w-full my-14 text-center items-center">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <span>Primeiros Projetos</span>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              <div className="grid sm:grid-cols-4 gap-2 sm:pt-6 text-white pb-2">
                {projects
                  .filter((proj) => proj.decada === "primeiros")
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
                <span>Todos</span>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel>
              {" "}
              <div className="grid sm:grid-cols-4 gap-2 sm:pt-6 text-white pb-2">
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
        </Accordion>
      </main>
    </>
  );
}
