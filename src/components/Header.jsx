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
    <header className="bg-neutral-0 dark:bg-neutral-800 flex items-center px-3 py-2 mt-5 mx-4 rounded-xl shadow-md border border-[oklch(0.9095_0.029_259.59)]">
      <div>
        <img src={theme === "light" ? logoLight : logoDark} alt="Logo" />
      </div>
      <button
        onClick={toggleTheme}
        className="bg-neutral-100 dark:bg-neutral-700 w-[50px] h-[50px] flex justify-center items-center rounded-xl ml-auto"
        aria-label="Toggle theme"
      >
        <img src={theme === "light" ? iconMoon : iconSun} alt="Dark mode" />
      </button>
    </header>
  );
}
