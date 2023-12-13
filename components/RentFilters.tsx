"use client";
import React, { useState } from "react";
import RentPickupCard from "./RentPickupCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { createRenting } from "@/app/actions";
import { auth } from "@/auth";
import { Session } from "next-auth/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
type TRentFiltersProps = {
  carName: string;
  user: Session["user"] | undefined;
};

function RentFilters(props: TRentFiltersProps) {
  const { carName, user } = props;
  const [pickUpLocation, setpickUpLocation] = useState("");
  const [pickUpDateTime, setPickUpDateTime] = useState(new Date());
  const [dropOffLocation, setDropOffLocation] = useState("");
  const [dropOffDateTime, setDropOffDateTime] = useState(new Date());
  const [loading, setLoading] = useState(false);
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

  const handleBookRental = async () => {
    try {
      setLoading(true);
      const renting = {
        pickUpLocation,
        pickUpDateTime,
        dropOffDateTime,
        dropOffLocation,
        brand: carName.split("-")[0],
        model: carName.split("-")[1],
        userId: user?.id,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const res = await createRenting(renting);
      // throw new Error("oops");
      toast.success("Conrgatulations!\n Your Reservation has been created!", {
        theme: "colored",
      });
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong!\n Please try again.", {
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 p-4 items-center justify-center">
        {loading ? (
          <Image
            src="/DriftingLoader.gif"
            alt="loading"
            width={200}
            height={200}
          />
        ) : (
          <>
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
            <button
              disabled={!pickUpLocation || !dropOffLocation}
              onClick={handleBookRental}
              className="bg-yellow-300 disabled:bg-gray-200 p-4 shadow-xl hover:bg-yellow-400 text-white rounded-lg "
            >
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default RentFilters;
