"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";

type Project = {
  id: number;
  date: string;
  project_name: string;
  description: string;
  live: boolean;
  git: string;
  href: string;
  image: string;
  alt: string;
};

const ProjectCard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data: Project[] = await response.json();
        data = data.sort((a, b) => b.id - a.id);
        setProjects(data);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {projects.map((project) => (
        <div
          className="shadow-xl dark:shadow-lg rounded-xl bg-white mb-10 lg:mb-0 flex flex-col justify-between overflow-hidden dark:bg-slate-900"
          key={project.id}
        >
          <div className="w-full h-40 sm:h-80 overflow-hidden relative">
            <Link href={project.href}>
              <Image
                src={`/assets/${project.image}`}
                alt={project.alt}
                className="absolute w-full h-full object-cover cursor-pointer"
                width={1000}
                height={1000}
              />
            </Link>
          </div>
          <div className="p-2 md:p-10 flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-lg md:text-2xl pb-3 font-semibold text-teal-600 dark:text-teal-400">
                {project.project_name}
              </h2>
              {project.live && (
                <button className="md:hidden block py-1 px-2 bg-blue-600 rounded-xl dark:bg-blue-800">
                  <a
                    href={project.href}
                    className="text-gray-200 text-sm md:text-base dark:text-white"
                  >
                    View in browser
                  </a>
                </button>
              )}
              <div>
                <div className="text-sm md:text-base pt-5">
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="pt-5 md:flex md:justify-between">
                <div>
                  {project.git && (
                    <button className="cursor-pointer flex items-center pb-1">
                      <a
                        href={`${project.git}`}
                        className="text-xs md:text-lg inline-flex items-center underline hover:text-blue-500"
                      >
                        View on GitHub
                      </a>
                      <p className="text-xl md:text-2xl ml-2">
                        <AiFillGithub />
                      </p>
                    </button>
                  )}
                  <p className="text-xs md:text-sm">{project.date}</p>
                </div>
                {project.live && (
                  <button className="hidden md:block md:my-2 py-1 px-2 bg-blue-600 rounded-xl dark:bg-blue-800">
                    <a
                      href={project.href}
                      className="text-gray-200 text-sm md:text-base dark:text-white"
                    >
                      View in browser
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
