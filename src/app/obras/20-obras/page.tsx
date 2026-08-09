"use client";

import Navbar from "../../components/navbar";
import { projects } from "../../data/projects";
import Link from "next/link";
import Projeto from "../../components/projeto2";

export default function Principais() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen pt-28 md:pt-32 sm:px-6 px-4 pb-12 bg-slate-100 font-kabel text-black text-3xl items-center">
        <div className="flex flex-col w-full text-center items-center md:space-y-10 space-y-2">
          <div className="grid sm:grid-cols-4 gap-2 text-white pb-2 md:my-0">
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
        </div>
      </main>
    </>
  );
}
