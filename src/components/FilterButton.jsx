import { useContext } from "react";
import { ExtensionsContext } from "../context/ExtensionsContext";
import Button from "./Button";

export default function FilterButton({ value, children }) {
  const { filter, setFilter } = useContext(ExtensionsContext);

  const activeClasses =
    "text-preset-4 border-none text-neutral-0 dark:text-neutral-900 bg-red-700 dark:bg-red-400 hover:opacity-100 hover:bg-red-500 hover:dark:bg-red-500";

  return (
    <Button
      className={filter === value ? activeClasses : ""}
      onClick={() => setFilter(value)}
    >
      {children}
    </Button>
  );
}
