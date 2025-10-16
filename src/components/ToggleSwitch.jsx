export default function ToggleSwitch({ id, checked, onChange }) {
  return (
    <label htmlFor={id} className="relative inline-block">
      <input
        id={id}
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={onChange}
        aria-checked={checked}
      />

      <div
        className="w-9 h-5 rounded-full bg-gray-300 transition-colors
          peer-checked:bg-red-700 hover:peer-checked:bg-red-500 dark:peer-checked:bg-red-400
          peer-focus-visible:ring-2 peer-focus-visible:ring-red-400 peer-focus-visible:ring-offset-2
          cursor-pointer"
      ></div>

      <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform peer-checked:translate-x-4 cursor-pointer" />
    </label>
  );
}
