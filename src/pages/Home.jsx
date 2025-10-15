import React, { useContext } from "react";
import { ExtensionsContext } from "../context/ExtensionsContext";
import Header from "../components/Header";
import FilterButton from "../components/FilterButton";
import ExtensionCard from "../components/ExtensionCard";

export default function Home() {
  const { getFilteredItems, toggleActive } = useContext(ExtensionsContext);
  const items = getFilteredItems();

  return (
    <div className="max-w-5xl min-h-screen mx-auto pt-5 sm:pt-6 lg:pt-10 px-4 sm:px-8">
      <Header />

      <main className="flex flex-col justify-center items-center my-10 gap-6 dark:text-neutral-0">
        <h1 className="text-preset-1">Extensions List</h1>
        <nav className="flex gap-2.5">
          <FilterButton value="all">All</FilterButton>
          <FilterButton value="active">Active</FilterButton>
          <FilterButton value="inactive">Inactive</FilterButton>
        </nav>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
