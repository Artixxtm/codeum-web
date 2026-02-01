"use client";

import About from "@/sections/About";
import Header from "@/sections/Header";
import dynamic from "next/dynamic";

import { useMenu } from "@/context/MenuContext";

const Sky = dynamic(() => import("@/sections/Sky"), { ssr: false });
const Projects = dynamic(() => import("@/sections/Projects"), { ssr: false });
const Contact = dynamic(() => import("@/sections/Contact"), { ssr: false });

export default function Home() {
  const { isMenuOpen } = useMenu();

  return (
    <>
      <div className="w-full h-full overflow-hidden relative bg-[#0afce9]">
        <Header />

        <Sky isMenuOpen={isMenuOpen} />

        <Projects />

        <About />

        <Contact isMenuOpen={isMenuOpen} />
      </div>
    </>
  );
}
