import React from "react";
import { ExtensionsProvider } from "./context/ExtensionsContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <ExtensionsProvider>
      <Home />
    </ExtensionsProvider>
  );
}
