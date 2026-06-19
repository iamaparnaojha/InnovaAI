// src/components/ThemeToggle.tsx
import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setDark(saved === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      onClick={() => setDark(!dark)}
    >
      {dark ? <SunIcon className="h-6 w-6 text-yellow-400" /> : <MoonIcon className="h-6 w-6 text-gray-600" />}
    </button>
  );
};

export default ThemeToggle;
