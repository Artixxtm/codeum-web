"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Sky = () => {
  useEffect(() => {
    const skyImage = document.getElementById("skyImage");
    if (!skyImage) return;

    const setupAnimation = () => {
      const distance = skyImage.offsetHeight - window.innerHeight;

      const animation = gsap.to(skyImage, {
        y: -distance,
        scrollTrigger: {
          start: "top top",
          end: `+=${distance + window.innerHeight / 6}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();

      return animation;
    };

    if (skyImage.complete) {
      const animation = setupAnimation();
      return () => animation?.kill();
    } else {
      skyImage.onload = () => setupAnimation();
    }
  }, []);

  return (
    <div
      id="skyContainer"
      className="w-full md:h-[80vh] h-[50vh] mt-[calc(75px)] relative pointer-events-none"
    >
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