"use client";

import projects from "@/utils/projects";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowOutward } from "react-icons/md";

import "swiper/css";
import Link from "next/link";
import useResponsive from "@/hooks/useResponsive";

const Projects = () => {
  const { isMobile, isDesktop } = useResponsive();

  return (
    <section
      id="projects"
      className="w-full lg:h-screen h-fit relative py-[74px] md:px-[74px] px-3.5"
    >
      <div className="w-full h-full relative flex flex-col gap-8">
        <h2 className="font-main uppercase text-7xl">Projects</h2>

        <div className="w-full h-fit relative">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={isMobile ? 14 : 64}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            className="h-fit !pb-5"
          >
            {projects.map((item, index) => (
              <SwiperSlide
                className={`w-full 2xl:max-w-[750px] md:max-w-[500px] max-w-[350px] flex flex-col gap-2 h-fit`}
                key={index}
              >
                <Link
                  target="_blank"
                  href={item.link}
                  className="flex flex-col gap-4 group relative w-auto h-auto"
                >
                  <div className="w-full h-full max-h-[400px] overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full object-cover pointer-events-none rounded-2xl transition-transform duration-600 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-full flex justify-between items-stretch h-auto relative">
                    <h4 className="font-secondary font-semibold md:text-2xl text-lg bg-white py-2.5 px-5 rounded-2xl w-fit line-clamp-1">
                      {item.title}
                    </h4>

                    <div className="w-fit flex items-stretch md:gap-2 gap-1">
                      <button
                        type="button"
                        className="text-lg font-secondary font-semibold bg-white py-2.5 px-5 rounded-2xl w-fit transition-colors duration-600 group-hover:bg-black group-hover:text-white"
                      >
                        {!isDesktop ? item.categoryIcon : item.category}
                      </button>
                      <button
                        type="button"
                        className="md:text-2xl text-xl bg-white py-2.5 px-5 rounded-2xl w-fit transition-colors duration-400 group-hover:bg-black group-hover:text-white"
                      >
                        <MdArrowOutward />
                      </button>
                    </div>
                  </div>
                </Link>

                <div className="w-full h-auto mt-4 font-secondary px-5 py-2.5 md:text-base text-xs bg-white text-black/90 rounded-2xl opacity-85">
                  {item.description}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
