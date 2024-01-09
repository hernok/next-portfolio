"use client";
import Image from "next/image";
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
          className="shadow-xl rounded-xl bg-white mb-4 lg:mb-0 flex flex-col justify-between overflow-hidden dark:bg-slate-900"
          key={project.id}
        >
          <div className="w-full h-80 overflow-hidden relative">
            <Image
              src={`/assets/${project.image}`}
              alt={project.alt}
              className="absolute w-full h-full object-cover"
              layout="fill"
            />
          </div>
          <div className="p-10 flex flex-col justify-between flex-grow">
            <div>
              <h2 className="text-2xl mb-3">{project.project_name}</h2>
              {project.live && (
                <button className=" py-1 px-2 bg-blue-100 rounded-xl dark:bg-blue-800">
                  <a
                    href={project.href}
                    className="text-gray-200 dark:text-white font-medium"
                  >
                    View in browser
                  </a>
                </button>
              )}
              <div className="mt-5">
                <p>{project.description}</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex justify-between lg:block">
                {project.git && (
                  <button className="cursor-pointer flex items-center mb-1">
                    <a
                      href={`${project.git}`}
                      className=" text-md inline-flex items-center underline"
                    >
                      View on GitHub
                    </a>
                    <p className="text-2xl ml-2">
                      <AiFillGithub />
                    </p>
                  </button>
                )}
                <p>{project.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
