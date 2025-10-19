export default function Button({ children, className = "", ...rest }) {
  const baseClasses =
    "px-4 py-2 text-preset-3 bg-neutral-0 dark:bg-neutral-700 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-600 hover:opacity-70 hover:dark:opacity-100 hover:dark:bg-neutral-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 cursor-pointer";
  return (
    <button className={`${baseClasses} ${className}`} {...rest}>
      {children}
    </button>
  );
}
