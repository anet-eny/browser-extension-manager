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
  useEffect(() => {
    console.log("✅ [Mounted] items state initialized:", items);
  }, []);

  return (
    <ExtensionsContext.Provider value={{ items, setItems }}>
      {children}
    </ExtensionsContext.Provider>
  );
}
