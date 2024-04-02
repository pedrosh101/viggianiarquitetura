import Navbar from "./components/navbar";
import { projects } from "../app/data/projects";
import Projeto from "./components/projeto";
import Link from "next/link";
import Image from "next/image";
import Front from "../../public/front.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen sm:px-24 px-4 bg-slate-100 justify-between pt-24 font-kabel">
        <div className="flex sm:flex-row flex-col min-h-screen text-black text-xl my-20 gap-10">
          <div className="sm:w-2/5 justify-end flex flex-col mb-4 gap-5">
            <h1 className="text-3xl">Viggiani Arquitetura</h1>
            <div className="bg-black h-0.2"></div>
            <h1 className="font-sans text-base">
              No final do ano de 1980 terminei o curso de arquitetura na
              Universidade Mackenzie em Sao Paulo. Ja trabalhava como estagiário
              no Condephaat, onde permaneci, ja efetivado como arquiteto, até
              maio de 1981, quando surgiu a oportunidade de trabalhar em
              Ubatuba. E aqui resido até hoje, me dedicando aos projetos e
              obras, especialmente de casas na praia.<br></br>
              Nesses 43 anos desenvolvemos vários projetos para as pessoas que
              optaram por morar ou passar temporadas próximas ao mar. Nosso
              trabalho consiste em orientar os clientes desde o melhor
              aproveitamento das suas áreas, seguindo a legislação municipal e
              estadual, até a conclusão da sua obra e obtenção do habite-se,
              passando pelo acompanhamento de todas etapas da sua construção.
              <br></br>
              Uso da energia solar e fotovoltaica, reaproveitamento das águas,
              biodigestores, uso sustentável dos materiais, madeiras
              renováveis…….são conceitos que procuramos desenvolver em nossos
              projetos, junto com nossos clientes, seja em reformas ou em novas
              construções, objetivando sempre uma melhor qualidade de vida. E
              com essa filosofia, temos hoje mais de 250 obras entregues nas
              diversas praias do litoral norte.<br></br> Algumas delas voce pode ver
              aqui, ou em nosso
              <Link
                href="www.instagram.com/viggianiarquitetura"
                target="_blank"
                className="text-red-500"
              >
                {" "}
                Instagram
              </Link>
              .
            </h1>
            <h1 className="text-end font-sans text-base">Ricardo Viggiani</h1>
          </div>
          <div className="sm:w-3/5 relative overflow-hidden">
            <Image
              src={Front}
              alt="Imagem"
              className="w-full h-full object-cover"
              fill
            />
          </div>
        </div>
        <h1 className="text-black text-3xl">Primeiros Projetos</h1>
        <div className="grid sm:grid-cols-3 gap-2 sm:pt-6 text-white pb-2">
          {projects
            .filter((proj) => proj.category === "old")
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
        <h1 className="text-black text-3xl sm:pt-20 pt-6">2000-2024</h1>
        <div className="grid sm:grid-cols-3 gap-2 sm:pt-6 text-white pb-2">
          {projects
            .filter((proj) => proj.category === "new")
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
        <div className="py-20 text-black md:px-24 px-4 text-center text-3xl">
          <h1>
            &quot;Hay un misterioso nexo entre todo lo que haces, todo lo que
            vives y la arquitectura que al final produces. Un nexo que no pasa
            por lo intelectual, sino por la pura intuición. Pero que hace que al
            abordar un problema de arquitectura lo hagas desde el fondo de todas
            tus experiencias.&quot;
          </h1>
          <h2 className="text-2xl pt-2">Andrés Casillas</h2>
        </div>
      </main>
    </>
  );
}
