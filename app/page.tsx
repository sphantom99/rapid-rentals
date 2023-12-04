import { CarCatalogue, Hero, NavBar } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 scroll-smooth">
      <Hero />
      <CarCatalogue />
    </div>
  );
}
