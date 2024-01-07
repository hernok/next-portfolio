import React from "react";
import ThemeSwitch from "../darkMode/ThemeSwitch";

const Navbar = () => {
  return (
    <nav className="py-8 mb-10 flex justify-between px-10 border-b-2 ">
      <h1 className="text-xl">Min Portefølje</h1>
      <ul className="flex items-center">
        <ThemeSwitch />
        <li>
          <a className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-lg ml-8 cursor-pointer">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
