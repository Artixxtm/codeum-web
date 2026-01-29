import Nav from "@/components/Nav";
import About from "@/sections/About";
import Header from "@/sections/Header";
import Projects from "@/sections/Projects";
import Sky from "@/sections/Sky";

export default function Home() {
  return (
    <>
      <div className="w-full h-full overflow-hidden relative">
        <Header />

        <Sky />

        <Projects />

        <About />
      </div>
    </>
  );
}
