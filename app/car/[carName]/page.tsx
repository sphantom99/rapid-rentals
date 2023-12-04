// "use client";
// import CarInformationCard from "@/components/CarInformationCard";
import { CarModel } from "@/components/CarModel";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const CarInformationCard = dynamic(
  () => import("@/components/CarInformationCard"),
  { ssr: false }
);
function page() {
  return (
    <div className="flex flex-col gap-5 p-5 justify-center w-11/12 min-h-screen h-screen m-auto">
      <div>
        <CarModel />
      </div>
      {/* <div>Car Model</div> */}
      <div>
        <CarInformationCard />
      </div>
    </div>
  );
}

export default page;
