"use client";

const About = () => {
  return (
    <section
      id="about"
      className="w-full h-fit relative lg:py-[74px] md:px-[74px] px-3.5 mb-[calc(74px*2)] flex lg:flex-row flex-col lg:justify-center lg:items-start items-center lg:gap-14 gap-4"
    >
      <div className="mt-3 lg:w-auto lg:max-w-none w-full md:max-w-[85%] font-secondary font-semibold text-base">[About Us]</div>
      <div className="w-full text-left font-main lg:text-5xl text-3xl text-pretty md:max-w-[85%] leading-[120%] text-black/75">
        <span className="uppercase text-black">Codeum Games™</span> is an
        independent <span className="text-black">game development studio</span>{" "}
        creating games{" "}
        <span className="text-black">for iOS, Google Play, and Steam</span>. We
        focus on <span className="text-black">adventure</span> and{" "}
        <span className="text-black">experimental projects</span>, take part in
        game jams, and actively contribute to the game development <span className="text-black">community</span> by
        publishing useful <span className="text-black">tools</span> and <span className="text-black">assets for developers</span> on the Unity Asset
        Store.
      </div>
    </section>
  );
};

export default About;
