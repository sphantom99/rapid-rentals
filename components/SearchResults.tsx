import React, { useState } from "react";
import CarCard from "./CarCard";



type TSearchResultsProps = {
  cars: Car[];
};

function SearchResults(props: TSearchResultsProps) {
  const { cars } = props;
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {cars?.length > 0 ? (
        cars.map((car, i) => <CarCard key={i} car={car} />)
      ) : (
        <div>No cars where found!</div>
      )}
    </div>
  );
}

export default SearchResults;
