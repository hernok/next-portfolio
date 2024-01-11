import AboutMe from "@/components/aboutMe/AboutMe";
import Hero from "@/components/hero/Hero";
import ParticleContainer from "@/components/particles/ParticleContainer";
import ProjectCard from "@/components/projectCard/ProjectCard";
import ToolCard from "@/components/toolCard/ToolCard";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <ParticleContainer />
      <main className="bg-gray-50 px-3 md:px-20 lg:px-60 dark:bg-slate-800 z-[-2]">
        <section className="min-h-screen h-screen flex flex-col items-center justify-center relative z-30 max-w-7xl mx-auto">
          <Hero />
          <div className="text-gray-800 text-5xl flex justify-center gap-16 dark:text-gray-200">
            <Link href="https://github.com/hernok">
              <AiFillGithub className="cursor-pointer" />
            </Link>
          </div>
        </section>

        <section className="max-w-7xl mx-auto">
          <AboutMe />
          <div className="mb-40">
            <ToolCard />
          </div>
          <h2 className="text-gray-800 lg:pb-5 text-3xl text-center lg:text-4xl dark:text-gray-200">
            Prosjekter
          </h2>
          <div className="py-10 lg:grid 2xl:grid-cols-2 lg:gap-14">
            <ProjectCard />
          </div>
        </section>
      </main>
    </div>
  );
}
