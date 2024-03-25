import Navbar from "./components/navbar";
import { projects } from "../app/data/projects";
import Projeto from "./components/projeto";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-slate-100 justify-between pt-24">
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
            <h1>Ver todos projetos</h1>
          </Link>
        </div>
      </main>
    </>
  );
}
