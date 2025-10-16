import { useContext } from "react";
import { ExtensionsContext } from "../context/ExtensionsContext";

export default function FilterButton({ value, children }) {
  const { filter, setFilter } = useContext(ExtensionsContext);

  const baseClasses =
    "px-4 py-2 text-preset-3 bg-neutral-0 dark:bg-neutral-700 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-600 hover:opacity-70 hover:dark:opacity-100 hover:dark:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 cursor-pointer";
  const activeClasses =
    "text-preset-4 border-none text-neutral-0 dark:text-neutral-900 bg-red-700 dark:bg-red-400 hover:opacity-100 hover:bg-red-500 hover:dark:bg-red-500";

  return (
    <button
      className={`${baseClasses} ${filter === value ? activeClasses : ""}`}
      onClick={() => setFilter(value)}
    >
      {children}
    </button>
  );
}
