import React from "react";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";

const Navbar = () => {
  return (
    <nav className="light:bg-white py-8 mb-10 flex justify-between px-10 border-b-2 dark:bg-slate-900">
      <h1 className="text-xl">Min Portefølje</h1>
      <ul className="flex items-center">
        <ThemeSwitch />
        <li>
          <a className="text-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 py-1 rounded-lg ml-8 cursor-pointer dark:from-slate-500 dark:to-slate-300 dark:text-slate-800">
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
