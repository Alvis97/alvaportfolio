import Image from "next/image";
import LandingSection from "./components/landingSection"
import About from "./components/about";

export default function Home() {
  return (
      <main className="flex flex-1 w-full flex-col items-center justify-between sm:items-start">
      <LandingSection/>
      <About/>
      </main>
  );
}
