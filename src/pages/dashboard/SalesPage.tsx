type SaleStatus = "Pagada" | "Pendiente" | "Anulada";

interface Sale {
  id: string;
  client: string;
  date: string;
  total: string;
  status: SaleStatus;
}

const SALES: Sale[] = [
  { id: "FAC-001", client: "Aurora Studio", date: "02/11/2026", total: "$1.240.000", status: "Pagada" },
  { id: "FAC-002", client: "Café Mirador", date: "04/11/2026", total: "$860.500", status: "Pendiente" },
  { id: "FAC-003", client: "Librería Andamio", date: "07/11/2026", total: "$2.150.000", status: "Pagada" },
  { id: "FAC-004", client: "Taller del Río", date: "09/11/2026", total: "$430.000", status: "Anulada" },
  { id: "FAC-005", client: "Vivero Alameda", date: "11/11/2026", total: "$975.250", status: "Pagada" },
];

const STATUS_STYLES: Record<SaleStatus, string> = {
  Pagada: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400",
  Pendiente: "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400",
  Anulada: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-400",
};

const SalesPage = () => (
  <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
    <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-800">
      <h2 className="font-semibold text-gray-900 dark:text-white">Ventas recientes</h2>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {SALES.length} registros
      </span>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-200 text-gray-500 dark:border-gray-800 dark:text-gray-400">
            <th className="px-5 py-3 font-medium">Factura</th>
            <th className="px-5 py-3 font-medium">Cliente</th>
            <th className="px-5 py-3 font-medium">Fecha</th>
            <th className="px-5 py-3 font-medium">Total</th>
            <th className="px-5 py-3 font-medium">Estado</th>
          </tr>
        </thead>
        <tbody>
          {SALES.map((sale) => (
            <tr
              key={sale.id}
              className="border-b border-gray-100 last:border-0 dark:border-gray-800"
            >
              <td className="px-5 py-3 font-medium text-gray-900 dark:text-white">
                {sale.id}
              </td>
              <td className="px-5 py-3 text-gray-600 dark:text-gray-300">{sale.client}</td>
              <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{sale.date}</td>
              <td className="px-5 py-3 text-gray-900 dark:text-white">{sale.total}</td>
              <td className="px-5 py-3">
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[sale.status]}`}
                >
                  {sale.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default SalesPage;
