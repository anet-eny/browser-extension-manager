import React, { useContext } from "react";
import { ExtensionsContext } from "../context/ExtensionsContext";

export default function FilterButton({ value, children }) {
  const { filter, setFilter } = useContext(ExtensionsContext);

  const baseClasses =
    "px-4 py-2 text-preset-3 bg-neutral-0 rounded-full border-neutral-200";
  const activeClasses = "text-preset-4 text-neutral-0 bg-red-700";

  return (
    <button
      className={`${baseClasses} ${filter === value ? activeClasses : ""}`}
      onClick={() => setFilter(value)}
    >
      {children}
    </button>
  );
}
