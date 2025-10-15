import React from "react";
import ToggleSwitch from "./ToggleSwitch";

export default function ExtensionCard({ item, onToggle }) {
  return (
    <article className="p-5 bg-neutral-0 rounded-[20px] min-h-[200px]">
      <div className="flex gap-4">
        <img src={item.logo} alt={`${item.name} icon`} />
        <div>
          <h2 className="text-preset-2 text-neutral-900">{item.name}</h2>
          <p className="text-preset-5 text-neutral-600">{item.description}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <button className="px-4 py-2 text-preset-6 text-neutral-900 border border-neutral-300 rounded-full cursor-pointer">
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
