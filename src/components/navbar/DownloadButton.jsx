"use client";
import React from "react";

const DownloadButton = () => {
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
    <button
      className="text-lg bg-gradient-to-r from-gray-800 to-gray-500 text-white px-3 py-1 rounded-lg ml-8 cursor-pointer dark:from-slate-500 dark:to-slate-800"
      onClick={handleDownload}
    >
      Last ned CV
    </button>
  );
};

export default DownloadButton;
