"use client";
import { Car } from "@/lib/types";
import React, { useState } from "react";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";

type TCarCatalogueMainSectionProps = {
  cars: Car[];
  allCarBrands: string[];
};
function CarCatalogueMainSection(props: TCarCatalogueMainSectionProps) {
  const { cars, allCarBrands } = props;
  const [searchedCarResults, setSearchedCarResults] = useState(cars);

  return (
    <section>
      <SearchBar
        setResults={setSearchedCarResults}
        carBrands={allCarBrands ?? []}
      />
      <SearchResults cars={searchedCarResults} />
    </section>
  );
}

export default CarCatalogueMainSection;
