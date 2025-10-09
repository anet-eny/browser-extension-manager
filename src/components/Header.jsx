import React, { useContext } from "react";
import { ExtensionsContext } from "../context/ExtensionsContext";

export default function Header() {
  const { theme, setTheme } = useContext(ExtensionsContext);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return <></>;
}
