"use client";

import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MenuContext } from "@/context/MenuContext";

const Nav = dynamic(() => import("@/components/Nav"), {ssr: false});

import "lenis/dist/lenis.css";

const ClientWrapper = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lenisRef = useRef(null);

  useEffect(() => {
    let rafId;

    function raf(time) {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <ReactLenis
          root
          ref={lenisRef}
          options={{
            duration: 2,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            lerp: 0.1,
            direction: "vertical",
            gestureDirection: "vertical",
            smooth: true,
            smoothTouch: true,
            touchMultiplier: 2,
            autoRaf: false,
          }}
        >
          {children}
        </ReactLenis>
      </MenuContext.Provider>
    </>
  );
};

export default ClientWrapper;
