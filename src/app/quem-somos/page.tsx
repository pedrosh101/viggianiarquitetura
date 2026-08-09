import Navbar from "../components/navbar";
import Link from "next/link";
import Image from "next/image";
import Front from "../../../public/front.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col pt-32 sm:px-6 px-4 pb-12 bg-slate-100 justify-between  font-kabel">
        <section className="flex sm:flex-row flex-col min-h-screen text-black gap-20">
          <div className="sm:w-2/5 justify-end flex flex-col mb-4 gap-5">
            <h1 className="text-5xl">Viggiani Arquitetura</h1>
            <div className="bg-black h-0.2"></div>
            <p className="font-sans text-[15px] leading-7">
              {" "}
              No final do ano de 1980 terminei o curso de arquitetura na
              Universidade Mackenzie em Sao Paulo. Ja trabalhava como estagiário
              no Condephaat, onde permaneci, efetivado como arquiteto, até maio
              de 1981, quando surgiu a oportunidade de trabalhar em Ubatuba. E
              aqui resido até hoje, me dedicando aos projetos e obras,
              especialmente de casas na praia.<br></br> Nesses 43 anos
              desenvolvemos vários projetos para as pessoas que optaram por
              morar ou passar temporadas próximas ao mar.<br></br> Nosso
              escritório está estruturado também para oferecer todo suporte na
              execução das obras durante todas suas fases. Esse trabalho
              consiste em orientar os clientes desde o melhor aproveitamento das
              suas áreas, seguindo a legislação existente, até a conclusão das
              suas obras, passando pelo acompanhamento de todas etapas da
              construção.<br></br> Escolha dos materiais mais adequados para
              cada projeto, uso da energia solar e fotovoltaica, madeiras
              renováveis, são conceitos que procuramos desenvolver em nossos
              projetos, junto com os clientes, seja em reformas ou em novas
              construções, objetivando sempre a melhor relação entre custos e
              benefícios. E com essa filosofia, temos hoje mais de 250 obras
              entregues nas diversas praias do litoral norte.<br></br>
              Algumas delas você pode ver aqui, ou em nosso,{" "}
              <Link
                href="https://www.instagram.com/viggianiarquitetura"
                target="_blank"
                className="underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                Instagram
              </Link>{" "}
              incluindo alguns projetos em andamento.
            </p>

            <p className="text-end font-sans text-base italic">
              Ricardo Viggiani
            </p>
          </div>
          <div className="relative sm:w-3/5 w-full aspect-[4/3] overflow-hidden">
            <Image
              src={Front}
              alt="Projeto Viggiani Arquitetura"
              fill
              sizes="(max-width: 640px) 100vw, 60vw"
              priority
              className="object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
}
