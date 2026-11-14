import { Link, useRoute } from "wouter";

interface NavItem {
  to: string;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { to: "/", label: "Panel", icon: "📊" },
  { to: "/ventas", label: "Ventas", icon: "💵" },
  { to: "/clientes", label: "Clientes", icon: "👥" },
  { to: "/ajustes", label: "Ajustes", icon: "⚙️" },
];

const NavLink = ({ to, label, icon }: NavItem) => {
  const [match] = useRoute(to);

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
        match
          ? "bg-gray-100 font-medium text-gray-900 dark:bg-gray-800 dark:text-white"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
      }`}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </Link>
  );
};

const Sidebar = () => (
  <aside className="hidden w-64 shrink-0 flex-col border-r border-gray-200 bg-white md:flex dark:border-gray-800 dark:bg-gray-900">
    <div className="flex h-16 items-center gap-2 border-b border-gray-200 px-5 dark:border-gray-800">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
        ◆
      </span>
      <span className="text-lg font-bold text-gray-900 dark:text-white">MiPanel</span>
    </div>

    <nav className="flex-1 space-y-1 p-3">
      {NAV_ITEMS.map((item) => (
        <NavLink key={item.to} {...item} />
      ))}
    </nav>

    <div className="border-t border-gray-200 p-3 dark:border-gray-800">
      <p className="px-3 text-xs text-gray-400 dark:text-gray-500">
        Sesión de demostración
      </p>
    </div>
  </aside>
);

export default Sidebar;
