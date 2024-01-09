import AboutMe from "@/components/aboutMe/AboutMe";
import Hero from "@/components/hero/Hero";
import ProjectCard from "@/components/projectCard/ProjectCard";
import ToolCard from "@/components/toolCard/ToolCard";
import { AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <Hero />
          <div className="text-4xl flex justify-center gap 16 text-gray-800">
            <AiFillGithub />
          </div>
        </section>
        <section>
          <AboutMe />
          <div className="mb-40">
            <ToolCard />
          </div>
          <h2 className="text-3xl text-center lg:text-4xl">Prosjekter</h2>
          <div className="py-5 gap-4 sm:gap-5 md:gap-6 lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:gap-8">
            <ProjectCard />
          </div>
        </section>
      </main>
    </div>
  );
}
