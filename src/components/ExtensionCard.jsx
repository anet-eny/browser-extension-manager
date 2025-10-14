import React from "react";

export default function ExtensionCard({ item, onToggle }) {
  return (
    <article>
      <div>
        <img src={item.logo} alt={`${item.name} icon`} />
        <div>
          <h2>{item.name}</h2>
        </div>
      </div>
    </article>
  );
}
