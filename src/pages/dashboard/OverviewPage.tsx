import { useContext } from "react";
import StatCard from "../../components/StatCard";
import { ProfileContext } from "../../contexts/ProfileContext";

interface Stat {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
}

const STATS: Stat[] = [
  { label: "Ingresos del mes", value: "$12.480.000", change: "+12,4%", trend: "up", icon: "💰" },
  { label: "Pedidos", value: "348", change: "+8,1%", trend: "up", icon: "📦" },
  { label: "Clientes activos", value: "1.240", change: "-2,3%", trend: "down", icon: "👥" },
];

const OverviewPage = () => {
  const { data } = useContext(ProfileContext);
  const firstName = data.name.split(" ")[0] || "Usuario";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          Hola, {firstName} 👋
        </h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Este es un resumen de tu actividad reciente.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          Actividad reciente
        </h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Aquí puedes mostrar gráficos o reportes más detallados. Este panel es
          solo una demostración.
        </p>
      </div>
    </div>
  );
};

export default OverviewPage;
