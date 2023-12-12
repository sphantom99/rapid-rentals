"use client";
import React, { useState } from "react";
import RentPickupCard from "./RentPickupCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function RentFilters() {
  const [pickUpLocation, setpickUpLocation] = useState("");
  const [pickUpDateTime, setPickUpDateTime] = useState(new Date());
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [dropOffDateTime, setDropOffDateTime] = useState(new Date());
  const addresses = [
    "123 Main Street, Anytown, USA",
    "456 Oak Avenue, Cityville, USA",
    "789 Pine Lane, Villagetown, USA",
    "101 Elm Street, Hamletville, USA",
    "234 Maple Drive, Suburbia, USA",
    "567 Cedar Road, Townsville, USA",
    "890 Birch Court, Metropolis, USA",
    "111 Spruce Avenue, Riverside, USA",
    "222 Juniper Lane, Lakeside, USA",
    "333 Willow Street, Mountainside, USA",
  ];
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 items-center justify-center">
      <RentPickupCard
        title="Pick Up"
        addresses={addresses}
        setLocation={setpickUpLocation}
        setDateTime={setPickUpDateTime}
      />

      <RentPickupCard
        title="Drop Off"
        addresses={addresses}
        setLocation={setDropOffLocation}
        setDateTime={setDropOffDateTime}
      />
      <button className="bg-yellow-300 p-4 shadow-xl hover:bg-yellow-400 text-white rounded-lg ">
        <MagnifyingGlassIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default RentFilters;
