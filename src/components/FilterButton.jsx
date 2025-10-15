import { useContext } from "react";
import { ExtensionsContext } from "../context/ExtensionsContext";

export default function FilterButton({ value, children }) {
  const { filter, setFilter } = useContext(ExtensionsContext);

  const baseClasses =
    "px-4 py-2 text-preset-3 bg-neutral-0 dark:bg-neutral-700 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-600";
  const activeClasses =
    "text-preset-4 border-none text-neutral-0 dark:text-neutral-900 bg-red-700 dark:bg-red-400";

  return (
    <button
      className={`${baseClasses} ${filter === value ? activeClasses : ""}`}
      onClick={() => setFilter(value)}
    >
      {children}
    </button>
  );
}
