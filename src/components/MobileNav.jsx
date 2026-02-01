"use client";

import Image from "next/image";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { GrMail } from "react-icons/gr";
import { MENU_ITEMS, slideIn } from "@/utils";
import { memo } from "react";

const MobileNav = ({ isMenuOpen, setIsMenuOpen }) => {
  const lenis = useLenis();

  const closeMenuAndScroll = (target) => {
    setIsMenuOpen(false);

    requestAnimationFrame(() => {
      setTimeout(() => lenis?.scrollTo(target), 300);
    });
  };

  const BACKGROUND_ROWS = Array.from({ length: 10 });

  return (
    <div
      className={`fixed w-full h-full top-1/2 left-0 py-[75px] -translate-y-1/2 z-[9] bg-[#0afce9] transition-opacity duration-400 overflow-hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <div className="w-full h-full flex flex-1 flex-col gap-10 px-3.5 py-7">
        <div className="w-full h-auto flex flex-col gap-2">
          {MENU_ITEMS.map(({ label, target, delay }) => (
            <h4
              key={label}
              onClick={() => closeMenuAndScroll(target)}
              className={`text-5xl font-main uppercase relative
                  ${slideIn(isMenuOpen)}
                  transition-[opacity,left] duration-300`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              {label}
            </h4>
          ))}
          <Link
            href={"mailto:contact@codeumgames.com"}
            target="_blank"
            className={`text-2xl font-secondary font-semibold mt-5 uppercase bg-white py-3 px-8 rounded-3xl w-fit inline-flex gap-4 items-center relative ${isMenuOpen ? "left-0 opacity-100" : "left-[-20px] opacity-0"} transition-[opacity,left] duration-300 delay-500`}
          >
            Mail Us <GrMail size={26} className="relative -top-px" />
          </Link>
        </div>
        <div
          className={`w-full h-full ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 delay-600 bg-black/15 border-2 border-black/60 rounded-[3rem] relative flex justify-center items-center overflow-hidden`}
        >
          <BackgroundMarquee />

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
  );
};

const BackgroundMarquee = memo(() => {
  const rows = Array.from({ length: 10 });

  return (
    <div className="w-max h-max flex flex-col absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-12 opacity-60">
      {rows.map((_, i) => (
        <h3
          key={i}
          className={`text-5xl font-main ${
            i % 2 === 0 ? "translate-x-10" : "-translate-x-10"
          }`}
        >
          CODEUM GAMES CODEUM GAMES
        </h3>
      ))}
    </div>
  );
});

export default memo(MobileNav);
