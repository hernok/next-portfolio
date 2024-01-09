"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

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
          className="shadow-xl rounded-xl bg-white mb-4 lg:mb-0 flex flex-col justify-between overflow-hidden"
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
              {project.live && (
                <div>
                  <a href={project.href}>View in browser</a>
                </div>
              )}
              <h2 className="text-2xl">{project.project_name}</h2>
              <div className="mt-5">
                <p>{project.description}</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex justify-between lg:block">
                {project.git && (
                  <button className="cursor-pointer">
                    <a href={`${project.git}`}>View on GitHub</a>
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
