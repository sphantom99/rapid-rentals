import React, { useState } from "react";
import CarCard from "./CarCard";
import { Car } from "@/lib/types";
import { WithId } from "mongodb";
import Image from "next/image";

type TSearchResultsProps = {
  cars: Car[];
  loading: boolean;
};

function SearchResults(props: TSearchResultsProps) {
  const { cars, loading } = props;
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {loading ? (
        <Image
          src="/DriftingLoader.gif"
          alt="loading"
          width={250}
          height={250}
        />
      ) : cars?.length > 0 ? (
        cars.map((car, i) => <CarCard key={i} car={car} />)
      ) : (
        <div>No cars where found!</div>
      )}
    </div>
  );
}

export default SearchResults;
