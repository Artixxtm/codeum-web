"use client";

import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Sky from "@/sections/Sky";
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/sections/Projects"), { ssr: false });

export default function Home() {
  return (
    <>
      <div className="w-full h-full overflow-hidden relative">
        <Header />

        <Sky />

        <Projects />

        <About />

        <Contact />
      </div>
    </>
  );
}
