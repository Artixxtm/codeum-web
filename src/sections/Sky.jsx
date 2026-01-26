"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sky = () => {
  useEffect(() => {
    const skyImage = document.getElementById("skyImage")
    if (skyImage) {
      const animation = gsap.to(skyImage, {
        y: `-${skyImage.offsetHeight - window.innerHeight}`,
        scrollTrigger: {
          start: "top top",
          end: `+=${skyImage.offsetHeight - window.innerHeight / 2}`,
          scrub: 1,
        },
      });

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div id="skyContainer" className="w-full md:h-[80vh] h-[50vh] mt-[calc(75px)] relative pointer-events-none">
      <div className="md:w-[150vw] w-[360vw] h-full absolute left-0 -translate-x-[20%] top-[calc(-180px*2)] z-[15] opacity-90">
        <Image
          src={"/clouds.png"}
          alt="clouds"
          width={0}
          height={0}
          sizes="100vw"
          id="skyImage"
          className="w-full rotate-[15deg] h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Sky;
