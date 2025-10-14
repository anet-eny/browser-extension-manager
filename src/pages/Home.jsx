import React, { useContext } from "react";
import { ExtensionsContext } from "../context/ExtensionsContext";
import Header from "../components/Header";
import FilterButton from "../components/FilterButton";
import ExtensionCard from "../components/ExtensionCard";

export default function Home() {
  const { getFilteredItems, toggleActive } = useContext(ExtensionsContext);
  const items = getFilteredItems();

  return (
    <div className="min-h-screen pt-5 px-4 bg-gradient-to-b from-gradientlight-start to-gradientlight-end dark:from-gradientdark-start dark:to-gradientdark-end">
      <Header />

      <main className="flex flex-col justify-center items-center my-10 gap-6 dark:text-neutral-0">
        <h1 className="text-preset-1">Extensions List</h1>
        <nav className="flex gap-2.5">
          <FilterButton value="all">All</FilterButton>
          <FilterButton value="active">Active</FilterButton>
          <FilterButton value="inactive">Inactive</FilterButton>
        </nav>

        <section>
          {items.length === 0 ? (
            <div>No extensions found</div>
          ) : (
            items.map((item) => (
              <ExtensionCard
                key={item.id}
                item={item}
                onToggle={toggleActive}
              />
            ))
          )}
        </section>
      </main>
    </div>
  );
}
