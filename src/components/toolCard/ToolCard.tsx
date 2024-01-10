import Image from "next/image";
import React from "react";
import coding from "/public/assets/coding.png";
import design from "/public/assets/graphic-designer.png";
import communicate from "/public/assets/group.png";

const ToolCard = () => {
	return (
		<div className="mt-20 xl:flex gap-10">
			<div className=" bg-white flex-1 text-center shadow-lg p-10 mb-10 rounded-xl dark:bg-slate-900">
				<Image
					className="mx-auto"
					src={coding}
					alt="Graphic design icons created by Freepik - Flaticon"
					height={100}
					width={100}
				/>
				<h4 className="text-xl font-semibold py-4 text-teal-600">
					Språk, rammeverk og bibliotek
				</h4>
				<p className="text-gray-800 py-1 font-medium dark:text-gray-200">
					JavaScript
				</p>
				<p className="text-gray-800 py-1 font-medium dark:text-gray-200">
					React
				</p>
				<p className="text-gray-800 py-1 font-medium dark:text-gray-200">
					NextJS
				</p>
				<p className="text-gray-800 py-1 font-medium dark:text-gray-200">
					NodeJS
				</p>
				<p className="text-gray-800 py-1 font-medium dark:text-gray-200">
					TypeScript
				</p>
				<p className="text-gray-800 py-1 font-medium dark:text-gray-200">
					Sqlite3
				</p>
				<p className="text-gray-800 py-1 font-medium dark:text-gray-200">
					Tailwind
				</p>
			</div>
			<div className="bg-white flex-1 text-center shadow-lg p-10 mb-10 rounded-xl dark:bg-slate-900">
				<Image
					className="mx-auto"
					src={design}
					alt="Graphic design icons created by Freepik - Flaticon"
					height={100}
					width={100}
				/>
				<h4 className="text-xl font-semibold py-4 text-teal-600">
					Design verkrøy
				</h4>
				<p className="text-gray-800 py-1 font-medium dark:text-gray-200">
					AdobeXD
				</p>
				<p className="text-gray-800 py-1 font-medium dark:text-gray-200">
					Adobe Color Wheel
				</p>
				<p className="text-gray-800 py-1 font-medium dark:text-gray-200">
					Paint.net
				</p>
				<p className="text-gray-800 py-1 font-medium dark:text-gray-200">
					Midjourney
				</p>
			</div>
			<div className="bg-white flex-1 text-center shadow-lg p-10 mb-10 rounded-xl dark:bg-slate-900">
				<Image
					className="mx-auto"
					src={communicate}
					alt="Group icons created by Freepik - Flaticon"
					height={100}
					width={100}
				/>
				<h4 className="text-xl font-semibold py-4 text-teal-600">
					Andre verktøy
				</h4>
				<p className="text-gray-800 font-medium py-1 dark:text-gray-200">
					Slack
				</p>
				<p className="text-gray-800 font-medium py-1 dark:text-gray-200">
					Discord
				</p>
				<p className="text-gray-800 font-medium py-1 dark:text-gray-200">
					Teams
				</p>
				<p className="text-gray-800 font-medium py-1 dark:text-gray-200">
					Git og Github
				</p>
				<p className="text-gray-800 font-medium py-1 dark:text-gray-200">
					Trello
				</p>
				<p className="text-gray-800 font-medium py-1 dark:text-gray-200">
					ChatGPT
				</p>
				<p className="text-gray-800 font-medium py-1 dark:text-gray-200">
					TeamGantt
				</p>
				<p className="text-gray-800 font-medium py-1 dark:text-gray-200">
					Google Forms
				</p>
			</div>
		</div>
	);
};

export default ToolCard;
