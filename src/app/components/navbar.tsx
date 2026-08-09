"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "../../../public/VIGGIANI.png";
import Image from "next/image";
import { X, Mail, Phone, MapPin, Menu } from "lucide-react";

const Navbar = ({ navbarZIndex }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;

    const clickedInsideNav = navRef.current?.contains(target) ?? false;
    const clickedInsideProjects =
      projectsRef.current?.contains(target) ?? false;

    if (!clickedInsideNav && !clickedInsideProjects) {
      setIsOpen(false);
      setIsProjectsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen || isProjectsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, isProjectsOpen]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };

  return (
    <>
      <div
        className={`flex w-full items-center justify-between font-kabel bg-slate-100 py-3 px-4 sm:px-12 text-black font-extralight fixed ${
          navbarZIndex ? "z-0" : "z-30"
        }`}
      >
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={124}
            height={160}
            className="w-[100px] sm:w-[124px] h-auto"
          />
        </Link>
        <div className="sm:hidden">
          <div onClick={toggleNav} className="cursor-pointer place-self-center">
            <Menu size={28} strokeWidth={2} />
          </div>
        </div>
        {/* Controlando a exibição da lista de navegação */}
        <nav className="hidden sm:flex">
          <ul className="flex space-x-6 text-xl 2xl:text-2xl underline-offset-4">
            <li>
              <Link href="/quem-somos">
                <h1 className="hover:underline decoration-1">Quem Somos</h1>
              </Link>
            </li>
            <li onClick={toggleProjects} className="relative cursor-pointer">
              <h1 className="hover:underline decoration-1">Obras</h1>
              {isProjectsOpen && (
                <div
                  ref={projectsRef}
                  className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 z-40"
                >
                  <ul className="flex flex-col space-y-2 p-4 text-xl font-medium">
                    <li>
                      <Link href="/obras/20-obras">
                        <h1 className="hover:underline decoration-1">
                          20 Obras
                        </h1>
                      </Link>
                    </li>
                    <li>
                      <Link href="/obras/mais-obras">
                        <h1 className="hover:underline decoration-1">
                          Mais Obras
                        </h1>
                      </Link>
                    </li>
                    <li>
                      <Link href="/obras/projetos">
                        <h1 className="hover:underline decoration-1">
                          Projetos
                        </h1>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                target="_blank"
                href="https://wa.me/5512997149116"
                className="hover:underline decoration-1"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Dropdown menu para dispositivos móveis */}
        <div
          className={`sm:hidden fixed inset-0 bg-black bg-opacity-75 z-30 transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            ref={navRef}
            className={`fixed flex flex-col right-0 top-0 h-full w-[80%] p-8 shadow transition-transform transform duration-700 text-white ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ backgroundColor: "#9A9A9A" }}
          >
            <button
              onClick={toggleNav}
              aria-label="Fechar menu"
              className="self-end p-2 -mr-2 mb-6 hover:opacity-70 transition-opacity"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            <section>
              <ul className="flex flex-col space-y-4 font-light text-2xl">
                <Link href="/quem-somos">
                  <li
                    className="hover:underline decoration-1"
                    onClick={toggleNav}
                  >
                    Quem Somos
                  </li>
                </Link>
                <Link href="/obras/20-obras">
                  <li
                    className="hover:underline decoration-1"
                    onClick={toggleNav}
                  >
                    20 Obras
                  </li>
                </Link>
                <Link href="/obras/mais-obras">
                  <li
                    className="hover:underline decoration-1"
                    onClick={toggleNav}
                  >
                    Mais Obras
                  </li>
                </Link>
                <Link href="/obras/projetos">
                  <li
                    className="hover:underline decoration-1"
                    onClick={toggleNav}
                  >
                    Projetos
                  </li>
                </Link>

                <li>
                  <a
                    onClick={toggleNav}
                    href="https://wa.me/5512997149116"
                    target="_blank"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </section>

            <div className="mt-auto pt-8 border-t border-white/30">
              <ul className="flex flex-col space-y-3 text-sm font-light">
                <li>
                  <a
                    href="mailto:ricardoviggiani@terra.com.br"
                    className="flex items-center gap-3 hover:underline decoration-1"
                  >
                    <Mail size={18} strokeWidth={1.5} className="shrink-0" />
                    ricardoviggiani@terra.com.br
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+5512997143116"
                    className="flex items-center gap-3 hover:underline decoration-1"
                  >
                    <Phone size={18} strokeWidth={1.5} className="shrink-0" />
                    (12) 99714 3116
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    strokeWidth={1.5}
                    className="shrink-0 mt-0.5"
                  />
                  <span>
                    R. Cunhambebe 351 / 45, Ubatuba, São Paulo, Brasil
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
