"use client";

import StretchedText from "@/components/StretchedText";
import React from "react";
import { getYear } from "date-fns";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { useLenis } from "lenis/react";
import useResponsive from "@/hooks/useResponsive";

const Contact = ({isMenuOpen}) => {
  const { isTablet } = useResponsive();
  const currentYear = getYear(new Date());

  const lenis = useLenis();

  return (
    <section id="contact" className={`w-full h-auto min-h-[55vh] md:rounded-t-[5rem] rounded-t-[3rem] bg-black text-white flex flex-col z-[100] relative shadow-[0px_-20px_40px_0px_rgba(0,_0,_0,_0.2)] transition-opacity duration-300 ${isTablet ? isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto" : ""}`}>
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
          <span onClick={() => lenis?.scrollTo(0)} className="font-secondary font-semibold uppercase text-lg cursor-pointer">
            Home
          </span>
          <span onClick={() => lenis?.scrollTo("#projects")} className="font-secondary font-semibold uppercase text-lg cursor-pointer">
            Projects
          </span>
          <span onClick={() => lenis?.scrollTo("#about")} className="font-secondary font-semibold uppercase text-lg cursor-pointer">
            About
          </span>
          <span onClick={() => lenis?.scrollTo("#contact")} className="font-secondary font-semibold uppercase text-lg cursor-pointer">
            Contact
          </span>
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
              <Link
                href="https://www.instagram.com/codeumgames/"
                className="group"
                target="_blank"
              >
                <AiFillInstagram
                  size={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <Link
                href="https://bsky.app/profile/codeumgames.bsky.social"
                className="group"
                target="_blank"
              >
                <FaBluesky
                  size={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <Link
                href="https://www.youtube.com/@CODEUM_GAMES"
                className="group"
                target="_blank"
              >
                <FaYoutube
                  size={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <Link
                href="https://x.com/CODEUMGAMES"
                className="group"
                target="_blank"
              >
                <FaXTwitter
                  size={24}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
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

      {/* <div className="lg:hidden flex flex-col w-full h-auto relative font-main uppercase text-7xl mt-5">
        <h1 className="drop-shadow-[0_2px_0px_rgba(255,255,255,1)] text-black">Codeum</h1>
        <h1 className="inline-flex items-start w-fit ml-auto">
          Games<span className="text-5xl relative top-1">™</span>
        </h1>
      </div> */}
    </section>
  );
};

export default Contact;
