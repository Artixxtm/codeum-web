"use client";

import Link from "next/link";
import { GrMail } from "react-icons/gr";
import { useLenis } from "lenis/react";
import { useEffect, memo, useCallback } from "react";
import useResponsive from "@/hooks/useResponsive";
import MobileNav from "./MobileNav";

const Nav = memo(function Nav({ isMenuOpen, setIsMenuOpen }) {
  const lenis = useLenis();

  const { isTablet } = useResponsive();

  useEffect(() => {
    const html = document.documentElement;

    if (!isTablet) {
      html.style.overflow = "";
      lenis?.start();
      return;
    }

    if (isMenuOpen) {
      html.style.overflow = "hidden";
      lenis?.stop();
    } else {
      html.style.overflow = "";
      lenis?.start();
    }

    return () => {
      html.style.overflow = "";
      lenis?.start();
    };
  }, [isMenuOpen, isTablet, lenis]);

  const scrollTo = useCallback((target) => lenis?.scrollTo(target), [lenis]);

  return (
    <>
      <nav
        id="top-nav"
        className="w-full h-[75px] border-b-[2px] border-b-black/10 backdrop-blur-lg flex justify-between items-center fixed inset-0 z-[10]"
      >
        <div className="flex items-center justify-center w-[74px] h-full border-r-[2px] border-r-black/10">
          <div onClick={() => scrollTo(0)} className="w-full h-full relative lg:hover:bg-white transition-colors duration-300 p-3.5 flex justify-center items-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={45}
              viewBox="0 0 618 533"
            >
              <polygon points="382 0 542 0 618 138 461 401 305.83 401 461 134 382 0" />
              <polygon points="150 131 311 134 156 400 230 533 77 532 0 398 150 131" />
            </svg>
          </div>
        </div>
        <div className="w-auto h-full flex items-center gap-8">
          <div className="gap-5 items-center uppercase font-secondary font-semibold text-sm lg:flex hidden">
            <span
              onClick={() => scrollTo("#projects")}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              Projects
            </span>
            <span
              onClick={() => scrollTo("#about")}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              About
            </span>
            <span
              onClick={() => scrollTo("#contact")}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            >
              Contact
            </span>
          </div>
          <div className="flex items-center justify-center w-[74px] h-full border-l-[2px] border-l-black/10">
            <div className="w-full h-full relative lg:hover:bg-white transition-colors duration-300 p-[17px] flex justify-center items-center">
              <button
                onClick={() => setIsMenuOpen((open) => !open)}
                className="lg:hidden cursor-pointer flex flex-col gap-[7px] w-full h-auto"
              >
                <div className={`w-full h-[3px] bg-black transition-transform duration-400 ${isMenuOpen ? "rotate-90 translate-y-[10px]" : " rotate-0 translate-y-[0px]"}`} />
                <div className={`w-full h-[3px] bg-black transition-opacity duration-400 ${isMenuOpen ? "opacity-0" : " opacity-100"}`} />
                <div className={`w-full h-[3px] bg-black transition-transform duration-400 ${isMenuOpen ? "translate-y-[-10px]" : " translate-y-[0px]"}`} />
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
        <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </>
  );
});

export default Nav;
