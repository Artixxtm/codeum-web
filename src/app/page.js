import Nav from "./components/Nav";
import Header from "./sections/Header";
import Projects from "./sections/Projects";
import Sky from "./sections/Sky";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="w-full h-full overflow-hidden relative">
      <Header />
      
      <Sky />

      <Projects />

      </div>
    </>
  );
}
