// "use client";
// import CarInformationCard from "@/components/CarInformationCard";
import CarInformationCard from "@/components/CarInformationCard";
import { CarModel } from "@/components/CarModel";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

function page({ params }: { params: { carName: string } }) {
  console.log(params);
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-8 p-1 md:p-5 justify-center  m-auto items-center">
      <div className=" w-[90vw] h-[50dvh]">
        <CarModel carName={params.carName} />
      </div>
      {/* <div>Car Model</div> */}
      <div className="w-5/6">
        <CarInformationCard />
      </div>
    </div>
  );
}

export default page;
