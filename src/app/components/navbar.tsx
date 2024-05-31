"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "../../../public/VIGGIANI.png";
import Image from "next/image";

const Navbar = ({ navbarZIndex }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !(navRef.current as Node).contains(event.target as Node) &&
      !(projectsRef.current as Node).contains(event.target as Node)
    ) {
      setIsOpen(false);
      setIsProjectsOpen(false);
      document.removeEventListener("mousedown", handleClickOutside);
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
        className={`flex w-full items-center justify-between font-kabel bg-slate-100 py-2 px-4 sm:px-24 text-black font-extralight fixed ${
          navbarZIndex ? "z-0" : "z-30"
        }`}
      >
        <Link href="/">
          <Image src={Logo} alt="logo" height={160} width={120} />
        </Link>
        <div className="sm:hidden">
          <div
            onClick={toggleNav}
            className="text-2xl cursor-pointer place-self-center"
          >
            <svg fill="none" viewBox="0 0 24 24" height="1.5em">
              <path
                fill="black"
                d="M8 6a2 2 0 11-4 0 2 2 0 014 0zM8 12a2 2 0 11-4 0 2 2 0 014 0zM6 20a2 2 0 100-4 2 2 0 000 4zM14 6a2 2 0 11-4 0 2 2 0 014 0zM12 14a2 2 0 100-4 2 2 0 000 4zM14 18a2 2 0 11-4 0 2 2 0 014 0zM18 8a2 2 0 100-4 2 2 0 000 4zM20 12a2 2 0 11-4 0 2 2 0 014 0zM18 20a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
          </div>
        </div>
        {/* Controlando a exibição da lista de navegação */}
        <nav className="hidden sm:flex">
          <ul className="flex space-x-6 text-2xl underline-offset-4">
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
            className={`fixed flex flex-col right-0 top-0 h-full w-72 sm:w-80 p-10 bg-stone-800 shadow transition-transform transform duration-700 text-white ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
