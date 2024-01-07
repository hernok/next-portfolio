"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { WiMoonAltFirstQuarter, WiMoonAltThirdQuarter } from "react-icons/wi";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleIconClick = (theme: "light" | "dark") => {
    setIsClicked(true);
    setTheme(theme);
    setTimeout(() => setIsClicked(false), 100);
  };
  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );

  const iconClass = `cursor-pointer text-2xl transition-transform duration-100 ${
    isClicked ? "scale-125" : "scale-100"
  }`;

  if (resolvedTheme === "dark") {
    return (
      <WiMoonAltThirdQuarter
        className={iconClass}
        onClick={() => handleIconClick("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <WiMoonAltFirstQuarter
        className={iconClass}
        onClick={() => handleIconClick("dark")}
      />
    );
  }
};

export default ThemeSwitch;
