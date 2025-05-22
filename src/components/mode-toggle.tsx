// src/components/mode-toggle.tsx
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial theme based on user's preference or system
    const dark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="ml-4 px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
    >
      {isDark ? "☀️ Clair" : "🌙 Sombre"}
    </button>
  );
}
