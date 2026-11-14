import { useContext, useState, type FormEvent } from "react";
import { Redirect, useLocation } from "wouter";
import { ProfileContext } from "../contexts/ProfileContext";
import useLogin from "../client/login/useLogin";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Deriva un nombre legible a partir del correo: "juan.perez@x.com" -> "Juan Perez"
const nameFromEmail = (email: string): string => {
  const localPart = email.split("@")[0] ?? "";
  const words = localPart.replace(/[._-]+/g, " ").trim();

  if (!words) return "Usuario";

  return words
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const LoginPage = () => {
  const { data, setData } = useContext(ProfileContext);
  const login = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [, navigate] = useLocation();

  // Si ya hay un perfil activo, directo al dashboard
  if (data.email) {
    return <Redirect to="/dashboard" />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedEmail = email.trim();
    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }
    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    try {
      const response = await login.login({ email: trimmedEmail, password });
      const data = await response.json();
      setData(data);
      navigate("/dashboard");
    } catch (err) {
      setError("Error al iniciar sesión");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-md dark:bg-gray-900">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Iniciar sesión
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Ingresa tus datos para acceder al panel.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="tu@correo.com"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Contraseña
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="••••••••"
                className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-950/50 dark:text-red-400"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition-colors hover:bg-indigo-500"
            >
              Entrar
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
            Demo: cualquier correo válido y una contraseña de 6 o más
            caracteres.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
