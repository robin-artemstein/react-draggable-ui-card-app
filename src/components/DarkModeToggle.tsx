import { useEffect, useState } from "react";
import LightModeIcon from "../components/LightModeIcon";
import DarkModeIcon from "../components/DarkModeIcon";

export default function DarkModeToggle() {
  // Intialize the state：Check localStorage first; if not found, proceed according to system preferences.
  const [isDark, setIsDark] = useState(false);

  // When the state changes, update the HTML tags and write to localStorage.
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="px-4 py-1 text-sm font-medium rounded-md border 
                 transition-colors duration-200
                 bg-white text-gray-800 border-gray-300 hover:bg-gray-50
                 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 cursor-pointer"
    >
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}