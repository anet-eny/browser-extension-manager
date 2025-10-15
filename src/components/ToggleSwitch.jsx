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

      <div className="w-9 h-5 rounded-full bg-gray-300 transition-colors peer-checked:bg-red-700"></div>

      <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform peer-checked:translate-x-4" />
    </label>
  );
}
