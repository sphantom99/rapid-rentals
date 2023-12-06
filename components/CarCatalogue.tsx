import { getAllCars } from "@/app/actions";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export default async function CarCatalogue() {
  const allCars = await getAllCars();
  return (
    <section
      id="carCatalogue"
      className="p-4 md:p-12 flex flex-col gap-8 scroll-smooth"
    >
      <div>
        <h1 className="font-bold text-lg">Car Catalogue</h1>
        <h2 className="text-slate-400">Explore cars you might like</h2>
      </div>
      <SearchBar />
      <SearchResults cars={allCars} />
    </section>
  );
}
