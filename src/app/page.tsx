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
            <h1>
              No final do ano de 1980, Ricardo Viggiani concluiu o curso de
              arquitetura na Universidade Mackenzie em São Paulo. Já trabalhava
              como estagiário no Condephaat, onde permaneceu, agora efetivado
              como arquiteto, até maio de 1981, quando surgiu a oportunidade de
              trabalhar em Ubatuba. Desde então, reside lá, dedicando-se aos
              projetos e obras, especialmente de casas na praia.<br></br> Ao
              longo de 43 anos, Ricardo e sua equipe desenvolveram vários
              projetos para pessoas que optaram por morar ou passar temporadas
              próximas ao mar.<br></br> Seu trabalho consiste em orientar os
              clientes desde o melhor aproveitamento das áreas, seguindo a
              legislação municipal e estadual, até a conclusão da obra e
              obtenção do habite-se, passando pelo acompanhamento de todas as
              etapas da construção.<br></br>
              Conceitos como uso de energia solar e fotovoltaica,
              reaproveitamento das águas, biodigestores e uso sustentável dos
              materiais, incluindo madeiras renováveis, são priorizados em seus
              projetos, desenvolvidos em colaboração com os clientes, seja em
              reformas ou novas construções, sempre visando uma melhor qualidade
              de vida. Com essa filosofia, Ricardo Viggiani e sua equipe têm
              mais de 250 obras entregues nas diversas praias do litoral norte.
              Alguns desses projetos podem ser visualizados aqui, ou em seu
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
