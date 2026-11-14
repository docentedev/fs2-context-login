import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// Definimos los tipos permitidos para el tema
type Theme = "light" | "dark";

// Definimos la estructura del valor que compartirá el contexto
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Creamos el contexto tipado (inicialmente undefined o con un valor por defecto)
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement; // Etiqueta <html>

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado con validación de tipo para asegurar que se usa dentro del Provider
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser utilizado dentro de un ThemeProvider");
  }
  return context;
};
