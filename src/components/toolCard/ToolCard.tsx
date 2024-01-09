import Image from "next/image";
import React from "react";
import coding from "/public/assets/coding.png";
import design from "/public/assets/graphic-designer.png";
import communicate from "/public/assets/group.png";

const ToolCard = () => {
  return (
    <div className="mt-20 lg:flex gap-10 ">
      <div className="flex-1 text-center shadow-lg p-10 mb-10 rounded-xl">
        <Image
          className="mx-auto"
          src={coding}
          alt="Graphic design icons created by Freepik - Flaticon"
          height={100}
          width={100}
        />
        <h3 className="text-lg pt-8 pb-2"></h3>
        <h4 className="text-xl py-4 text-teal-600">
          Språk, rammeverk og bibliotek
        </h4>
        <p className="text-gray-800 py-1">JavaScript</p>
        <p className="text-gray-800 py-1">React</p>
        <p className="text-gray-800 py-1">NextJS</p>
        <p className="text-gray-800 py-1">NodeJS</p>
        <p className="text-gray-800 py-1">TypeScript</p>
        <p className="text-gray-800 py-1">Sqlite3</p>
        <p className="text-gray-800 py-1">Tailwind</p>
      </div>
      <div className="flex-1 text-center shadow-lg p-10 mb-10 rounded-xl">
        <Image
          className="mx-auto"
          src={design}
          alt="Graphic design icons created by Freepik - Flaticon"
          height={100}
          width={100}
        />
        <h3 className="text-lg pt-8 pb-2"></h3>
        <h4 className="text-xl py-4 text-teal-600">Design verkrøy</h4>
        <p className="text-gray-800 py-1">AdobeXD</p>
        <p className="text-gray-800 py-1">Adobe Color Wheel</p>
        <p className="text-gray-800 py-1">Paint.net</p>
        <p className="text-gray-800 py-1">Midjourney</p>
      </div>
      <div className="flex-1 text-center shadow-lg p-10 mb-10 rounded-xl">
        <Image
          className="mx-auto"
          src={communicate}
          alt="Group icons created by Freepik - Flaticon"
          height={100}
          width={100}
        />
        <h3 className="text-lg pt-8 pb-2"></h3>

        <h4 className="text-xl py-4 text-teal-600">Andre verktøy</h4>
        <p className="text-gray-800 py-1">Slack</p>
        <p className="text-gray-800 py-1">Discord</p>
        <p className="text-gray-800 py-1">Teams</p>
        <p className="text-gray-800 py-1">Git og Github</p>
        <p className="text-gray-800 py-1">Trello</p>
        <p className="text-gray-800 py-1">ChatGPT</p>
        <p className="text-gray-800 py-1">TeamGantt</p>
        <p className="text-gray-800 py-1">Google Forms</p>
      </div>
    </div>
  );
};

export default ToolCard;
