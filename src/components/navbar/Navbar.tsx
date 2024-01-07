"use client";
import React, { useState } from "react";
import { WiMoonAltFirstQuarter } from "react-icons/wi";

const Navbar = () => {
  const [darkModeToggled, setDarkModeToggled] = useState<Boolean>(false);

  const darkMode = () => {
    setDarkModeToggled(!darkModeToggled);
    console.log("Swapped to " + { darkModeToggled });
  };
  return (
    <nav className="py-8 mb-10 flex justify-between bg-white px-10">
      <h1 className="text-xl">utvikletavherman</h1>
      <ul className="flex items-center">
        <li>
          <WiMoonAltFirstQuarter
            className="cursor-pointer text-2xl"
            onClick={darkMode}
          />
        </li>
        <li>
          <a className="bg-gradient-to-r from-gray-500 to-gray-400 text-white px-4 py-2 rounded-lg ml-8 cursor-pointer">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
