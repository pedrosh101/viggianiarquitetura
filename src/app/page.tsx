import Navbar from "./components/navbar";
import { projects } from "../app/data/projects";
import Projeto from "./components/projeto";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen sm:px-6 px-4 bg-slate-100 justify-between pt-20 font-kabel">
        {/* 1980 */}

        <div className="grid sm:grid-cols-3 gap-2 sm:pt-6 text-white pb-2">
          {projects
          .filter((proj) => proj.decada === "todos")
          .slice(0, 9)
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
        <div className="flex justify-center text-black pb-2">
          <Link
            href={{
              pathname: `/projetos`,
            }}
          >
            <button className="font-sans font-light text-lg">
              Ver todos projetos
            </button>
          </Link>
        </div>

        {/* 1990 */}
        <h1 className="text-black text-3xl sm:pt-20 py-6">
          Primeiros Projetos
        </h1>
        <div className="grid sm:grid-cols-3 gap-2 sm:pt-6 text-white pb-2">
          {projects
            .filter((proj) => proj.decada === "80")
            .slice(0, 3)
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
        <div className="flex justify-center text-black pb-2">
          <Link
            href={{
              pathname: `/projetos`,
            }}
          >
            <button className="font-sans font-light text-lg">
              Ver todos projetos
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
