import React, { createContext, useState, useEffect } from "react";
import rawData from "../data/extensions.json";

export const ExtensionsContext = createContext();
export function ExtensionsProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem("extensions-items");
      return saved ? JSON.parse(saved) : rawData;
    } catch {
      return rawData;
    }
  });
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("ui.theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("extensions.items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("ui.theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ExtensionsContext.Provider value={{ items, setItems }}>
      {children}
    </ExtensionsContext.Provider>
  );
}
