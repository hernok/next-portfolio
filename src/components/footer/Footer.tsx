"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
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
    <footer className="bg-gray-50 text-slate-800 p-4 border-solid border-t-2 border-slate-300 dark:border-slate-700 dark:text-slate-200 dark:bg-slate-800">
      <div className="container mx-auto text-center">
        <p className="font-bold">Herman Tjomstøl Novak | Frontend Utvikler</p>
        <p className="my-2">📞 +47 971 83 122 | ✉️ hernok@hotmail.com</p>
        <div className="flex justify-center space-x-4 my-2">
          <button className="underline cursor-pointer" onClick={handleDownload}>
            Last ned CV
          </button>
          <Link
            href="https://www.linkedin.com/in/herman-novak-b1b828226/"
            className="underline cursor-pointer"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/hernok"
            className="underline cursor-pointer"
          >
            GitHub
          </Link>
          <Link
            href="https://github.com/hernok/next-portfolio"
            className="underline cursor-pointer"
          >
            Source Code
          </Link>
        </div>
        <p className="text-sm mt-4">
          © 2024 Herman Tjomstøl Novak. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
