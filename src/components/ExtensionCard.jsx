import ToggleSwitch from "./ToggleSwitch";

export default function ExtensionCard({ item, onToggle, onRemove }) {
  return (
    <article className="flex flex-col p-5 bg-neutral-0 dark:bg-neutral-800 dark:border dark:border-neutral-600 rounded-[20px] min-h-[200px]">
      <div className="flex gap-4">
        <img src={item.logo} alt={`${item.name} icon`} />
        <div>
          <h2 className="text-preset-2 text-neutral-900 dark:text-neutral-0 mb-2">
            {item.name}
          </h2>
          <p className="text-preset-5 text-neutral-600 dark:text-neutral-300">
            {item.description}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <button
          onClick={() => onRemove(item.id)}
          className="px-4 py-2 text-preset-6 text-neutral-900 dark:text-neutral-0 border border-neutral-300 dark:border-neutral-600 hover:text-neutral-0 hover:bg-red-700 hover:border-red-700 hover:dark:text-neutral-900 hover:dark:bg-red-400 hover:dark:border-red-400 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 cursor-pointer"
        >
          Remove
        </button>

        <ToggleSwitch
          id={item.id}
          value={item}
          checked={item.isActive === true}
          onChange={() => onToggle(item.id)}
        />
      </div>
    </article>
  );
}
