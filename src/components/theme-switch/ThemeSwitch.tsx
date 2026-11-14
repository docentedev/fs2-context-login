import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg font-medium bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
    >
      {theme === "light" ? "🌙 Cambiar a Dark" : "☀️ Cambiar a Light"}
    </button>
  );
};

export default ThemeSwitch;
