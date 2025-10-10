import React, { useContext } from "react";
import { ExtensionsContext } from "../context/ExtensionsContext";
import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";

export default function Header() {
  const { theme, setTheme } = useContext(ExtensionsContext);

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <header className="bg-neutral-0 flex items-center px-3 py-2 mt-5 mx-4 rounded-xl shadow-md border border-[oklch(0.9095_0.029_259.59)]">
      <div>
        <img src={logoLight} alt="Logo" />
      </div>
      <button className="bg-neutral-100 w-[50px] h-[50px] flex justify-center items-center rounded-xl ml-auto">
        <img src={iconMoon} alt="Dark mode" />
      </button>
    </header>
  );
}
