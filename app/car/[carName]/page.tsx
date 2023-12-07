// "use client";
// import CarInformationCard from "@/components/CarInformationCard";
import CarInformationCard from "@/components/CarInformationCard";
import { CarModel } from "@/components/CarModel";
import { Car } from "@/lib/types";
import { MongoClient } from "mongodb";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { Suspense } from "react";

async function getCarInfo(brand: string, model: string) {
  try {
    console.log(model, brand);
    const client = new MongoClient(process.env.MONGO_URI ?? "");
    await client.connect();
    const db = await client.db("RapidRentals");
    const cars = await db.collection<Car>("Cars");
    const result = await cars.findOne<Car>({ model: model, brand: brand });

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function page({ params }: { params: { carName: string } }) {
  console.log(params);

  const carInfo = await getCarInfo(
    params.carName.split("-")[0],
    params.carName.split("-")[1]
  );
  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <Link
        className=" ml-10  bg-gradient-to-r from-yellow-600 to-yellow-300 text-transparent bg-clip-text"
        href="/"
      >
        Go Back
      </Link>
      <div className="flex w-full flex-wrap lg:flex-nowrap gap-8 p-1 md:p-5 justify-center items-center">
        <div className=" md:w-[45%] w-[90vw] h-[50dvh]">
          <CarModel carName={params.carName} />
        </div>
        {/* <div>Car Model</div> */}

        {carInfo ? (
          <div className=" w-5/6 md:w-3/6 min-h-[50dvh] max-h-[50dvh]">
            <CarInformationCard car={carInfo} />
          </div>
        ) : (
          <>Loading...</>
        )}
      </div>
    </div>
  );
}

export default page;
