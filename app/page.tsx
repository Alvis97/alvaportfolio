import Image from "next/image";
import LandingSection from "./components/landingSection"
import About from "./components/about";
import Projects from "./components/projects";
import Navigation from "./components/navigation";

export default function Home() {
  return (
      <main className="flex flex-1 w-full flex-col items-center justify-between sm:items-start">
        <Navigation/>
        <div id="landingSection">
          <LandingSection/>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="projects">
          <Projects/>
        </div>
      </main>
  );
}
