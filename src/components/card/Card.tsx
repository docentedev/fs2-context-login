const Card = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl shadow-md transition-colors">
      <h2 className="text-xl font-bold">Tarjeta Tipada en TSX</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Este componente se adapta automáticamente al tema gracias a Tailwind y
        TypeScript.
      </p>
    </div>
  );
};

export default Card;
