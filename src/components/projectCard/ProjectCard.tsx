"use client";
import Image from "next/image";
import React, {useState, useEffect} from "react";

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
					className="shadow-xl p-10 rounded-xl bg-white mb-4 lg:mb-0" // Add margin-bottom here
					key={project.id}
				>
					<div className="mx-auto">
						<Image
							src={`/assets/${project.image}`}
							width={1000}
							height={1000}
							alt={project.alt}
						/>
					</div>
					<div className="">
						{project.live && (
							<div>
								<a href={project.href}>View in browser</a>
							</div>
						)}
						<h2 className="text-2xl ">{project.project_name}</h2>

						<div className="mt-5">
							<p>{project.description}</p>
						</div>
					</div>

					<div className="flex justify-between mt-5">
						{project.git && (
							<div className="">
								<a href={`${project.git}`}>View on GitHub</a>
							</div>
						)}
						<p className="">{project.date}</p>
					</div>
				</div>
			))}
		</>
	);
};

export default ProjectCard;
