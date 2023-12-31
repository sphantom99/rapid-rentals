// "use client";
// import CarInformationCard from "@/components/CarInformationCard";
import CarInformationCard from "@/components/CarInformationCard";
import { CarModel } from "@/components/CarModel";
import clientPromise from "@/lib/dbConnect";
import { Car } from "@/lib/types";
import Link from "next/link";

async function getCarInfo(brand: string, model: string) {
  try {
    const client = await clientPromise;
    const db = await client.db("RapidRentals");
    const cars = await db.collection<Car>("Cars");
    const result = await cars.findOne<Car>({ model: model, brand: brand });

    return result;
  } catch (error) {
    console.error(error);
  }
}

async function page({ params }: { params: { carName: string } }) {
  const carInfo = await getCarInfo(
    params.carName.split("-")[0],
    params.carName.split("-")[1]
  );
  return (
    <div className="flex flex-col justify-center items-center mt-28">
      <div className="flex w-full flex-wrap lg:flex-nowrap gap-8 p-1 md:p-5 justify-center items-start">
        <div className=" md:w-[45%] w-[90vw] h-[50dvh]">
          <CarModel carName={params.carName} />
        </div>
        {/* <div>Car Model</div> */}

        {carInfo ? (
          <div className=" w-5/6 md:w-3/6 min-h-[45dvh] max-h-[45dvh]">
            <CarInformationCard car={carInfo} />
          </div>
        ) : (
          <>Loading...</>
        )}
      </div>
      <div className=" mt-10 flex flex-row gap-8 items-center">
        <Link
          className=" bg-gradient-to-r from-yellow-600 to-yellow-400 text-transparent text-2xl  bg-clip-text"
          href="/"
        >
          Go Back
        </Link>
        <Link
          href={`/car/${params.carName}/rent`}
          className="bg-yellow-300 shadow-md text-white hover:bg-yellow-400 py-2 px-10 text-3xl rounded-lg"
        >
          Rent
        </Link>
      </div>
    </div>
  );
}

export default page;
