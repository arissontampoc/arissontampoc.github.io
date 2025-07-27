import { useState } from "react";
import { Toggle } from "./ui/toggle";

function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <Toggle
      onClick={toggleTheme}
      className="border px-3 py-1 rounded text-sm dark:bg-white dark:text-black bg-black text-white"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </Toggle>
  );
}

export default ThemeToggle;
