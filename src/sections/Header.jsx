"use client";

import Image from "next/image";
import HeadText from "../components/HeadText";
import Link from "next/link";
import { useLenis } from "lenis/react";

const Header = () => {
  const lenis = useLenis();

  return (
    <div className="w-full h-[calc(100svh-75px-75px)] mt-[75px] relative flex flex-col md:px-[74px] overflow-hidden">
      <div className="h-full w-full lg:justify-between lg:items-center md:px-15 px-3.5 flex lg:flex-row flex-col lg:gap-0 gap-4">
        
        <div className="lg:hidden flex flex-col w-full h-auto relative font-main uppercase text-7xl mt-5">
          <h1>Codeum</h1>
          <h1 className="inline-flex items-start w-fit ml-auto">
            Games<span className="text-5xl relative top-1">™</span>
          </h1>
        </div>

        <p className="font-secondary tracking-[0.01em] 2xl:text-2xl md:text-xl text-base opacity-85 relative md:leading-normal leading-[125%] lg:top-[20px] md:mt-0 mt-2">
          The most creative game
          <br />
          studio, you have ever seen!
          <br />
          Diamond minds at work.
        </p>

        <div className="w-auto h-auto flex lg:gap-10 md:gap-2 gap-1.5 relative lg:top-[20px]">
          <Link href={'mailto:contact@codeumgames.com'} target="_blank" className="bg-white 2xl:w-[180px] md:w-[150px] w-[80px] 2xl:h-[90px] md:h-[75px] h-[50px] 2xl:rounded-[30px] md:rounded-[25px] rounded-[20px] font-secondary flex justify-center items-center font-semibold 2xl:text-2xl md:text-xl text-sm cursor-pointer relative lg:top-[-19px] hover:scale-110 hover:rotate-12 transition-transform duration-300">
            Say Hi!
          </Link>
          <button onClick={() => lenis?.scrollTo("#projects")} className="bg-white 2xl:w-[180px] md:w-[150px] w-[90px] 2xl:h-[90px] md:h-[75px] h-[50px] 2xl:rounded-[30px] md:rounded-[25px] rounded-[20px] font-secondary font-semibold 2xl:text-2xl md:text-xl text-sm cursor-pointer relative lg:top-[19px] hover:scale-110 hover:rotate-12 transition-transform duration-300">
            Projects
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col h-auto relative isolate lg:px-0 px-3.5">
        <HeadText
          className={"lg:block hidden"}
          words={["Codeum Games", "™"]}
          wordsClassNames={[
            "font-main uppercase",
            "font-main text-xs uppercase",
          ]}
        />

        <div className="2xl:w-[400px] xl:w-[330px] md:w-[240px] w-[180px] h-auto absolute left-1/2 top-1/2 -translate-x-1/2 md:-translate-y-1/2 -translate-y-0 pointer-events-none floatY">
          <Image
            src={"/model.png"}
            alt="codeum 3d model"
            width={0}
            height={0}
            sizes="100vw"
            draggable={false}
            className="w-full h-auto object-contain tilt"
          />
        </div>

        <div className="2xl:w-[450px] xl:w-[360px] w-[270px] lg:flex hidden justify-between 2xl:h-[410px] xl:h-[360px] h-[270px] absolute left-1/2 top-1/2 -translate-1/2 hover:scale-110 transition-transform duration-300 z-[3]">
          <div className="flex flex-col h-full justify-between w-max pointer-events-none">
            <div className="w-[45px] h-[55px] customCornerClipLT bg-black" />
            <div className="w-[45px] h-[55px] customCornerClipLB bg-black" />
          </div>
          <div className="flex flex-col h-full justify-between w-max pointer-events-none">
            <div className="w-[45px] h-[55px] customCornerClipRT bg-black" />
            <div className="w-[45px] h-[55px] customCornerClipRB bg-black" />
          </div>
        </div>
      </div>

      <div className="h-full w-full"></div>
    </div>
  );
};

export default Header;
