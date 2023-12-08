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
  const [loading, setLoading] = useState(false);
  return (
    <section>
      <SearchBar
        setLoading={setLoading}
        setResults={setSearchedCarResults}
        carBrands={allCarBrands ?? []}
      />
      <SearchResults loading={loading} cars={searchedCarResults} />
    </section>
  );
}

export default CarCatalogueMainSection;
