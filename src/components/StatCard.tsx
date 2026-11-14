interface StatCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: string;
}

const StatCard = ({ label, value, change, trend, icon }: StatCardProps) => (
  <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <span aria-hidden="true">{icon}</span>
    </div>
    <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
    <p
      className={`mt-1 text-sm ${
        trend === "up"
          ? "text-emerald-600 dark:text-emerald-400"
          : "text-red-600 dark:text-red-400"
      }`}
    >
      {change}
      <span className="text-gray-400 dark:text-gray-500"> vs. mes anterior</span>
    </p>
  </div>
);

export default StatCard;
