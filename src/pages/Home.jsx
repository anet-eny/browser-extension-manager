import Header from "../components/Header";
import FilterButton from "../components/FilterButton";

export default function Home() {
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
      </main>
    </div>
  );
}
