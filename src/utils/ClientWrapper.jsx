"use client";

import { useRef, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "@/components/Nav";

import "lenis/dist/lenis.css";

const ClientWrapper = ({ children }) => {
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
      <Nav />
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
    </>
  );
};

export default ClientWrapper;
