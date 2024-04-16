"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "../../../public/VIGGIANI.png";
import Image from "next/image";

const Navbar = ({ navbarZIndex }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !(navRef.current as Node).contains(event.target as Node)
    ) {
      setIsOpen(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        navRef.current &&
        !(navRef.current as Node).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`flex w-full items-center justify-between font-kabel bg-slate-100 py-2 px-4 sm:px-24 text-black font-extralight fixed ${
          navbarZIndex ? "z-0" : "z-30"
        }`}
      >
        <Link href="/">
          <Image src={Logo} alt="logo" height={140} width={100} />
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
          <ul className="flex space-x-4 text-2xl underline-offset-4">
            <li>
              <Link href="/projetos">
                <h1 className="hover:underline decoration-1">Projetos</h1>
              </Link>
            </li>
            <li>
              <Link href="/quem-somos">
                <h1 className="hover:underline decoration-1">Quem Somos</h1>
              </Link>
            </li>
            <li>
              <Link href="/contato">
                <h1 className="hover:underline decoration-1">Contato</h1>
              </Link>
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
                <Link href="/projetos">
                  <li onClick={toggleNav}>Projetos</li>
                </Link>
                <Link href="/sobre">
                  <li onClick={toggleNav}>Quem Somos</li>
                </Link>
                <Link href="/contato">
                  <li onClick={toggleNav}>Contato</li>
                </Link>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
