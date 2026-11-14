interface Customer {
  name: string;
  email: string;
  orders: number;
}

const CUSTOMERS: Customer[] = [
  { name: "Aurora Studio", email: "contacto@aurorastudio.cl", orders: 24 },
  { name: "Café Mirador", email: "hola@cafemirador.cl", orders: 12 },
  { name: "Librería Andamio", email: "ventas@andamio.cl", orders: 31 },
  { name: "Taller del Río", email: "taller@delrio.cl", orders: 7 },
  { name: "Vivero Alameda", email: "info@viveroalameda.cl", orders: 18 },
];

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((word) => word.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

const CustomersPage = () => (
  <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
    <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-800">
      <h2 className="font-semibold text-gray-900 dark:text-white">Clientes</h2>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {CUSTOMERS.length} clientes
      </span>
    </div>

    <ul className="divide-y divide-gray-100 dark:divide-gray-800">
      {CUSTOMERS.map((customer) => (
        <li key={customer.email} className="flex items-center gap-4 px-5 py-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            {initialsOf(customer.name)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              {customer.name}
            </p>
            <p className="truncate text-xs text-gray-500 dark:text-gray-400">
              {customer.email}
            </p>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {customer.orders} pedidos
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default CustomersPage;
