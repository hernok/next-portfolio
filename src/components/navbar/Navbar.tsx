"use client";
import React from "react";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";

const Navbar = () => {
	const handleDownload = async () => {
		try {
			const response = await fetch("/api/downloadCv");
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			window.location.href = data.url;
		} catch (error) {
			console.error("Error downloading file:", error);
		}
	};
	return (
		<nav className="bg-white select-none border-solid border-b-2 border-gray-300 py-8 flex justify-between px-3 md:px-10 dark:bg-slate-900 dark:border-0">
			<h1 className="text-sm md:text-xl">Min Portefølje</h1>
			<ul className="flex items-center gap-3">
				<li>
					<ThemeSwitch />
				</li>
				<li>
					<button
						className="text-sm md:text-lg dark:font-bold text-white bg-slate-800 px-3 py-1 rounded-lg cursor-pointer dark:text-slate-900 dark:bg-slate-200"
						onClick={handleDownload}
					>
						Last ned CV
					</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
