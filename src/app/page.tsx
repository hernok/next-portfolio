import AboutMe from "@/components/aboutMe/AboutMe";
import Hero from "@/components/hero/Hero";
import ParticleContainer from "@/components/particles/ParticleContainer";
import ProjectCard from "@/components/projectCard/ProjectCard";
import ToolCard from "@/components/toolCard/ToolCard";
import { AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <main className="bg-gray-50 px-3 md:px-20 lg:px-60 dark:bg-slate-800">
        <section className="min-h-screen">
          <ParticleContainer />
          <Hero />
          <div className="text-gray-800 text-4xl flex justify-center gap 16 dark:text-gray-200">
            <AiFillGithub />
          </div>
        </section>
        <section>
          <AboutMe />
          <div className="mb-40">
            <ToolCard />
          </div>
          <h2 className="text-gray-800 lg:pb-10 text-3xl text-center lg:text-5xl dark:text-gray-200">
            Prosjekter
          </h2>
          <div className="py-5 lg:grid 2xl:grid-cols-2 3xl:grid-cols-3 lg:gap-14">
            <ProjectCard />
          </div>
        </section>
      </main>
    </div>
  );
}
