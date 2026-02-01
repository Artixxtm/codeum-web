"use client";

import Link from "next/link";
import { GrMail } from "react-icons/gr";
import { useLenis } from "lenis/react";
import { useEffect } from "react";
import Image from "next/image";
import useResponsive from "@/hooks/useResponsive";

const Nav = ({ isMenuOpen, setIsMenuOpen }) => {
  const lenis = useLenis();

  const { isTablet } = useResponsive();

  useEffect(() => {
    if (isMenuOpen && isTablet) {
      document.documentElement.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.documentElement.style.overflow = "";
      lenis?.start();
    }
  }, [isMenuOpen, isTablet, lenis]);

  return (
    <>
      <nav
        id="top-nav"
        className="w-full h-[75px] border-b-[2px] border-b-black/10 backdrop-blur-lg flex justify-between items-center fixed inset-0 z-[10]"
      >
        <div className="flex items-center justify-center w-[74px] h-full border-r-[2px] border-r-black/10 p-3.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={45}
            viewBox="0 0 618 533"
          >
            <polygon points="382 0 542 0 618 138 461 401 305.83 401 461 134 382 0" />
            <polygon points="150 131 311 134 156 400 230 533 77 532 0 398 150 131" />
          </svg>
        </div>
        <div className="w-auto h-full flex items-center gap-8">
          <div className="gap-5 items-center uppercase font-secondary font-semibold text-sm lg:flex hidden">
            <span
              onClick={() => lenis?.scrollTo("#projects")}
              className="opacity-70 cursor-pointer"
            >
              Projects
            </span>
            <span
              onClick={() => lenis?.scrollTo("#about")}
              className="opacity-70 cursor-pointer"
            >
              About
            </span>
            <Link href="#" className="opacity-70">
              Contact
            </Link>
          </div>
          <div className="flex items-center justify-center w-[74px] h-full border-l-[2px] border-l-black/10 p-[17px]">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden cursor-pointer flex flex-col gap-[7px] w-full h-auto"
            >
              <div className="w-full h-[3px] bg-black" />
              <div className="w-full h-[3px] bg-black" />
              <div className="w-full h-[3px] bg-black" />
            </button>
            <Link
              href="mailto:contact@codeumgames.com"
              target="_blank"
              className="lg:flex hidden text-4xl"
            >
              <GrMail />
            </Link>
          </div>
        </div>
      </nav>

      <div className="w-[2px] h-[calc(100svh-75px-75px)] md:block hidden fixed left-[72px] top-1/2 -translate-y-1/2 bg-black/10 pointer-events-none z-[10]" />
      <div className="w-[2px] h-[calc(100svh-75px-75px)] md:block hidden fixed right-[72px] top-1/2 -translate-y-1/2 bg-black/10 pointer-events-none z-[10]" />

      <nav
        id="bottom-nav"
        className="w-full h-[75px] border-t-[2px] border-t-black/10 flex backdrop-blur-lg justify-between items-center fixed bottom-0 left-0 z-[10]"
      >
        <div className="flex items-center justify-center w-[74px] h-full border-r-[2px] border-r-black/10 p-3.5"></div>

        <div className="flex items-center justify-center w-[74px] h-full border-l-[2px] border-l-black/10 p-[17px]"></div>
      </nav>

      {isTablet && (
        <div
          className={`fixed w-full h-full top-1/2 left-0 py-[75px] -translate-y-1/2 z-[9] bg-[#0afce9] transition-opacity duration-400 overflow-hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <div className="w-full h-full flex flex-1 flex-col gap-10 px-3.5 py-7">
            <div className="w-full h-auto flex flex-col gap-2">
              <h4
                onClick={() => {
                  setTimeout(() => lenis?.scrollTo(0), 300)
                  setIsMenuOpen(false);
                }}
                className={`text-5xl font-main uppercase relative ${isMenuOpen ? "left-0 opacity-100" : "left-[-20px] opacity-0"} transition-[opacity,left] duration-300 delay-100`}
              >
                Home
              </h4>
              <h4
                onClick={() => {
                  setTimeout(() => lenis?.scrollTo("#projects"), 300)
                  setIsMenuOpen(false);
                }}
                className={`text-5xl font-main uppercase relative ${isMenuOpen ? "left-0 opacity-100" : "left-[-20px] opacity-0"} transition-[opacity,left] duration-300 delay-200`}
              >
                Projects
              </h4>
              <h4
                onClick={() => {
                  setTimeout(() => lenis?.scrollTo("#about"), 300)
                  setIsMenuOpen(false);
                }}
                className={`text-5xl font-main uppercase relative ${isMenuOpen ? "left-0 opacity-100" : "left-[-20px] opacity-0"} transition-[opacity,left] duration-300 delay-300`}
              >
                About
              </h4>
              <h4
                onClick={() => {
                  setTimeout(() => lenis?.scrollTo("#contact"), 300)
                  setIsMenuOpen(false);
                }}
                className={`text-5xl font-main uppercase relative ${isMenuOpen ? "left-0 opacity-100" : "left-[-20px] opacity-0"} transition-[opacity,left] duration-300 delay-400`}
              >
                Contact
              </h4>
              <Link
                href={"mailto:contact@codeumgames.com"}
                target="_blank"
                className={`text-2xl font-secondary font-semibold mt-5 uppercase bg-white py-3 px-8 rounded-3xl w-fit inline-flex gap-4 items-center relative ${isMenuOpen ? "left-0 opacity-100" : "left-[-20px] opacity-0"} transition-[opacity,left] duration-300 delay-500`}
              >
                Mail Us <GrMail size={26} className="relative -top-px" />
              </Link>
            </div>
            <div
              className={`w-full h-full ${isMenuOpen ? "scale-100 opacity-100 rotate-0" : "scale-60 opacity-0 rotate-12"} transition-[opacity,scale,rotate] duration-300 delay-600 bg-black/15 border-2 border-black/60 rounded-[3rem] relative flex justify-center items-center overflow-hidden`}
            >
              <div className="w-max h-max flex flex-col absolute left-1/2 top-1/2 -translate-1/2 rotate-12 opacity-60">
                <h3 className="text-5xl font-main">
                  CODEUM GAMES CODEUM GAMES
                </h3>
                <h3 className="text-5xl font-main relative left-10">
                  CODEUM GAMES CODEUM GAMES
                </h3>
                <h3 className="text-5xl font-main relative -left-10">
                  CODEUM GAMES CODEUM GAMES
                </h3>
                <h3 className="text-5xl font-main relative left-10">
                  CODEUM GAMES CODEUM GAMES
                </h3>
                <h3 className="text-5xl font-main relative -left-10">
                  CODEUM GAMES CODEUM GAMES
                </h3>
                <h3 className="text-5xl font-main relative left-10">
                  CODEUM GAMES CODEUM GAMES
                </h3>
                <h3 className="text-5xl font-main relative -left-10">
                  CODEUM GAMES CODEUM GAMES
                </h3>
                <h3 className="text-5xl font-main relative left-10">
                  CODEUM GAMES CODEUM GAMES
                </h3>
                <h3 className="text-5xl font-main relative -left-10">
                  CODEUM GAMES CODEUM GAMES
                </h3>
                <h3 className="text-5xl font-main relative left-10">
                  CODEUM GAMES CODEUM GAMES
                </h3>
              </div>

              <Image
                src="/model.png"
                alt="logo 3d"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto max-w-[50%] object-contain relative z-[1] floatY drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
