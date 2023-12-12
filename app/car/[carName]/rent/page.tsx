import RentBanner from "@/components/RentBanner";
import RentFilters from "@/components/RentFilters";
import Image from "next/image";
import React from "react";

function page({ params }: { params: { carName: string } }) {
  return (
    <main className=" mt-24 flex flex-col justify-center items-center gap-2">
      <RentBanner carName={params.carName} />
      <RentFilters />
    </main>
  );
}

export default page;
