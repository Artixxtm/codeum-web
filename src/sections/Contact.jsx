"use client";

import StretchedText from "@/components/StretchedText";
import React, { useCallback } from "react";
import Link from "next/link";
import { useLenis } from "lenis/react";
import useResponsive from "@/hooks/useResponsive";
import { currentYear, NAV_LINKS, SOCIALS } from "@/utils";

const Contact = ({ isMenuOpen }) => {
  const { isTablet } = useResponsive();

  const lenis = useLenis();

  const scrollTo = useCallback((target) => lenis?.scrollTo(target), [lenis]);

  return (
    <section
      id="contact"
      className={`w-full h-auto min-h-[55vh] md:rounded-t-[5rem] rounded-t-[3rem] bg-black text-white flex flex-col z-[100] relative shadow-[0px_-20px_40px_0px_rgba(0,_0,_0,_0.2)] transition-opacity duration-300 ${isTablet ? (isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto") : ""}`}
    >
      <div className="flex flex-1 xl:flex-row flex-col h-full w-full md:px-[74px] md:py-10 py-8 px-3.5 xl:gap-4 gap-8 lg:justify-between">
        <div className="flex flex-col gap-1 w-auto h-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 618 533"
            width={50}
            fill="white"
          >
            <polygon
              points="382 0 542 0 618 138 461 401 305.83 401 461 134 382 0"
              fill="white"
            />
            <polygon
              points="150 131 311 134 156 400 230 533 77 532 0 398 150 131"
              fill="white"
            />
          </svg>
          <p className="font-secondary md:text-sm text-xs opacity-75 mt-4">
            {currentYear} © All Rights Reserved
          </p>
          <p className="font-secondary md:text-sm text-xs opacity-75">
            This website does not use cookies nor collect personal data.
          </p>
        </div>

        <div className="flex flex-col gap-1 w-auto h-auto">
          <span className="font-secondary font-medium uppercase md:text-sm text-xs opacity-75">
            Links
          </span>
          {NAV_LINKS.map(({ label, target }) => (
            <span
              key={label}
              onClick={() => scrollTo(target)}
              className="font-secondary font-semibold uppercase text-lg cursor-pointer"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-1 w-auto h-auto">
          <span className="font-secondary font-medium uppercase md:text-sm text-xs opacity-75">
            Email
          </span>
          <Link
            href={"mailto:contact@codeumgames.com"}
            target="_blank"
            className="font-secondary font-semibold uppercase md:text-xl text-base underline underline-offset-6"
          >
            contact@codeumgames.com
          </Link>

          <div className="w-fit h-auto flex flex-col gap-1 relative mt-6">
            <span className="font-secondary font-medium uppercase md:text-sm text-xs opacity-75">
              Socials
            </span>
            <div className="w-auto flex gap-4 mt-1 items-center">
              {SOCIALS.map(({ href, Icon }) => (
                <Link key={href} href={href} target="_blank" className="group">
                  <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <StretchedText
        fill="#fff"
        className={"relative md:top-12"}
        words={["Codeum Games", "™"]}
        wordsClassNames={["font-main uppercase", "font-main text-xs uppercase"]}
      />
    </section>
  );
};

export default Contact;
