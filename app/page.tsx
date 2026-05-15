import Image from "next/image";
import LandingSection from "./components/landingSection"

export default function Home() {
  return (
      <main className="flex flex-1 w-full flex-col items-center justify-between sm:items-start">
      <LandingSection/>
      </main>
  );
}
