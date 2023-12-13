import { auth } from "@/auth";
import Image from "next/image";
import React from "react";

type TRentBannerProps = {
  carName: string;
};

async function RentBanner(props: TRentBannerProps) {
  const { carName } = props;
  const session = await auth();
  return (
    <div className="flex flex-col justify-start p-4 bg-gradient-to-r from-yellow-500 to-yellow-400 text-white md:w-2/3 w-10/12 rounded-lg animate-pulse m-auto gap-4">
      <h3 className="text-3xl md:w-2/3">
        Great! You're ready to enjoy your new {carName}
      </h3>
      {!session ? (
        <p className="text-lg">Please sign in to continue</p>
      ) : (
        <p className="text-lg">
          Simply fill out the details presented below and we will get back to
          you as soon as possible to confirm your reservation
        </p>
      )}
      <Image
        className=" self-center"
        src={`/carPngs/${carName}.png`}
        alt={`${carName}`}
        width={250}
        height={250}
      />
    </div>
  );
}

export default RentBanner;
