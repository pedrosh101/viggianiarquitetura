import Navbar from "./components/navbar";
import { projects } from "../app/data/projects";
import Projeto from "./components/projeto";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-slate-100 justify-between pt-24 font-kabel">
        <div className="grid sm:grid-cols-3 gap-2 px-2 sm:pt-6 text-white pb-2">
          {projects.map((proj) => (
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
        <div className="flex justify-center text-black pb-2">
          <Link
            href={{
              pathname: `/projetos`,
            }}
          >
            <button className="font-sans font-light text-lg">Ver todos projetos</button>
          </Link>
        </div>
        <div className="py-20 text-black md:px-24 px-4 text-center text-4xl">
          <h1>&quot;Hay un misterioso nexo entre todo lo que haces, todo lo que vives y la arquitectura que al final produces. Un nexo que no pasa por lo intelectual, sino por la pura intuición. Pero que hace que al abordar un problema de arquitectura lo hagas desde el fondo de todas tus experiencias.&quot;</h1>
          <h2 className="text-3xl pt-2">Andrés Casillas</h2>
        </div>

      </main>
    </>
  );
}
