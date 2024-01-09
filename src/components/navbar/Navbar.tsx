import React from "react";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";

const Navbar = () => {
  return (
    <nav className="bg-white border-solid border-b-2 border-gray-300 py-8 flex justify-between px-10 dark:bg-slate-900 dark:border-0">
      <h1 className="text-xl">Min Portefølje</h1>
      <ul className="flex items-center">
        <ThemeSwitch />
        <li>
          <a className="text-xl bg-gradient-to-r from-gray-800 to-gray-500 text-white px-3 py-1 rounded-lg ml-8 cursor-pointer dark:from-slate-500 dark:to-slate-800 ">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
