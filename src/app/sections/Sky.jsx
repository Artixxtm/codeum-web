"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sky = () => {
  const container = useRef(null);
  const skyRef = useRef(null);

  useEffect(() => {
    if (skyRef.current && container.current) {
      const animation = gsap.to(skyRef.current, {
        y: `-${skyRef.current.offsetHeight - window.innerHeight}`,
        scrollTrigger: {
          start: "top top",
          end: `+=${skyRef.current.offsetHeight - window.innerHeight / 2}`,
          scrub: 1,
          // markers: true
        },
      });

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);
  return (
    <div ref={container} className="w-full h-[80vh] mt-[calc(75px)] relative pointer-events-none">
      <div className="md:w-[150vw] w-[360vw] h-full absolute left-0 -translate-x-[20%] top-[calc(-180px*2)] z-[15] opacity-90">
        <Image
          ref={skyRef}
          src={"/clouds.png"}
          alt="clouds"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full rotate-[15deg] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Sky;
