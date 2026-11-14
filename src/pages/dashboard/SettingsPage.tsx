import { useState, type FormEvent } from "react";

interface ToggleProps {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Toggle = ({ label, description, checked, onChange }: ToggleProps) => (
  <label className="flex cursor-pointer items-center justify-between gap-4 py-3">
    <span>
      <span className="block text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </span>
      <span className="block text-sm text-gray-500 dark:text-gray-400">
        {description}
      </span>
    </span>
    <input
      type="checkbox"
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
      className="h-5 w-5 shrink-0 accent-indigo-600"
    />
  </label>
);

const SettingsPage = () => {
  const [company, setCompany] = useState("Mi Empresa SpA");
  const [notifications, setNotifications] = useState(true);
  const [compact, setCompact] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaved(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
    >
      <h2 className="font-semibold text-gray-900 dark:text-white">Ajustes</h2>

      <div className="mt-4">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Nombre de la empresa
        </label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          className="mt-1 block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
      </div>

      <div className="mt-2 divide-y divide-gray-100 dark:divide-gray-800">
        <Toggle
          label="Notificaciones"
          description="Recibe un aviso cuando haya una venta nueva."
          checked={notifications}
          onChange={setNotifications}
        />
        <Toggle
          label="Modo compacto"
          description="Reduce el espaciado de las tablas y tarjetas."
          checked={compact}
          onChange={setCompact}
        />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
        >
          Guardar cambios
        </button>
        {saved && (
          <span className="text-sm text-emerald-600 dark:text-emerald-400">
            Cambios guardados ✓
          </span>
        )}
      </div>
    </form>
  );
};

export default SettingsPage;
