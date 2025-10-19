import { useContext } from "react";
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
    <header className="bg-neutral-0 dark:bg-neutral-800 flex items-center px-3 py-2 rounded-xl shadow-md border border-[oklch(0.9095_0.029_259.59)] dark:border-none">
      <div>
        <img src={theme === "light" ? logoLight : logoDark} alt="Logo" />
      </div>
      <button
        onClick={toggleTheme}
        className="bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-300 hover:dark:bg-neutral-600 w-[50px] h-[50px] flex justify-center items-center rounded-xl ml-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 cursor-pointer"
        aria-label="Toggle theme"
      >
        <img src={theme === "light" ? iconMoon : iconSun} alt="Switch theme" />
      </button>
    </header>
  );
}
