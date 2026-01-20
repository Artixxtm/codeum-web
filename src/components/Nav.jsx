"use client";

import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav
        id="top-nav"
        className="w-full h-[75px] border-b-[2px] border-b-black/10 backdrop-blur-lg flex justify-between items-center fixed inset-0 z-[10]"
      >
        <div className="flex items-center justify-center w-[74px] h-full border-r-[2px] border-r-black/10 p-3.5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 618 533">
            <polygon points="382 0 542 0 618 138 461 401 305.83 401 461 134 382 0" />
            <polygon points="150 131 311 134 156 400 230 533 77 532 0 398 150 131" />
          </svg>
        </div>
        <div className="w-auto h-full flex items-center gap-8">
          <div className="gap-5 items-center uppercase font-secondary font-semibold text-sm lg:flex hidden">
            <Link href="#" className="opacity-70">
              Projects
            </Link>
            <Link href="#" className="opacity-70">
              About
            </Link>
            <Link href="#" className="opacity-70">
              Contact
            </Link>
          </div>
          <div className="flex items-center justify-center w-[74px] h-full border-l-[2px] border-l-black/10 p-[17px]">
            <button className="cursor-pointer flex flex-col gap-[7px] w-full h-auto">
              <div className="w-full h-[3px] bg-black" />
              <div className="w-full h-[3px] bg-black" />
              <div className="w-full h-[3px] bg-black" />
            </button>
          </div>
        </div>
      </nav>

      <div className="w-[2px] h-[calc(100svh-75px-75px)] md:block hidden fixed left-[72px] top-1/2 -translate-y-1/2 bg-black/10 pointer-events-none z-[10]" />
      <div className="w-[2px] h-[calc(100svh-75px-75px)] md:block hidden fixed right-[72px] top-1/2 -translate-y-1/2 bg-black/10 pointer-events-none z-[10]" />

      <nav
        id="bottom-nav"
        className="w-full h-[75px] border-t-[2px] border-t-black/10 flex justify-between items-center fixed bottom-0 left-0 z-[10]"
      >
        <div className="flex items-center justify-center w-[74px] h-full border-r-[2px] border-r-black/10 p-3.5"></div>

        <div className="flex items-center justify-center w-[74px] h-full border-l-[2px] border-l-black/10 p-[17px]"></div>
      </nav>
    </>
  );
};

export default Nav;
