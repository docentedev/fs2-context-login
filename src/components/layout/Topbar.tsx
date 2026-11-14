import { useContext } from "react";
import { useLocation } from "wouter";
import { ProfileContext } from "../../contexts/ProfileContext";
import ThemeSwitch from "../theme-switch/ThemeSwitch";

const TITLES: Record<string, string> = {
  "/": "Panel principal",
  "/ventas": "Ventas",
  "/clientes": "Clientes",
  "/ajustes": "Ajustes",
};

const Topbar = () => {
  const { data, removeData } = useContext(ProfileContext);
  const [location, navigate] = useLocation();
  const title = TITLES[location] ?? "Panel principal";

  const initials = data.name
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const handleLogout = () => {
    removeData();
    // "~/" es una ruta absoluta: salimos del router anidado de /dashboard
    navigate("~/");
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white md:hidden">
          ◆
        </span>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <ThemeSwitch />

        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700" />

        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300">
            {initials}
          </span>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {data.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {data.email}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
        >
          Salir
        </button>
      </div>
    </header>
  );
};

export default Topbar;
