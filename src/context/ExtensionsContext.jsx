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
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'inactive'
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

  function toggleActive(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item
      )
    );
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  function getFilteredItems() {
    if (!Array.isArray(items)) return [];
    if (filter === "active") return items.filter((i) => i.isActive);
    if (filter === "inactive") return items.filter((i) => !i.isActive);
    return items;
  }

  return (
    <ExtensionsContext.Provider
      value={{
        items,
        filter,
        setFilter,
        getFilteredItems,
        toggleActive,
        removeItem,
        theme,
        setTheme,
      }}
    >
      {children}
    </ExtensionsContext.Provider>
  );
}
