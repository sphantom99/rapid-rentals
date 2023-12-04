"use client";
import Image from "next/image";
import React, { Fragment, useState /*,{ useState }*/ } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
type CardCardProps = {
  car: {
    model: string;
    brand: string;
    fuel: string;
    drive: string;
    mpg: string;
    gears: string;
    description: string;
  };
};

const CarCard = ({ car }: CardCardProps) => {
  const [open, setOpen] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>): any {
    console.log("Clicked");
    setOpen(true);
  }

  const { brand, model, fuel, drive, mpg, gears, description } = car;
  return (
    <>
      <div
        onClick={handleClick}
        className="flex flex-col bg-slate-100 pt-4 pb-8 px-8 rounded-lg hover:cursor-pointer hover:bg-yellow-300 hover:text-white gap-4"
      >
        <div className="flex flex-row justify-between items-center">
          <span className="font-bold text-lg">{`${brand} ${model}`}</span>
          <Image
            alt="image of brand"
            src={`/brands/${brand}.png`}
            width={50}
            height={50}
          />
        </div>
        <div>27.000&euro;</div>
        <Image
          alt="image of car"
          src={`/cars/${model}2.png`}
          width={300}
          height={300}
        />
        <div className="flex flex-row justify-around">
          <div className="flex flex-col gap-2 items-center">
            <Image
              alt="icon of sth"
              src="/gearsIcon.png"
              width={20}
              height={20}
            />
            <span className="text-slate-400 text-sm">{gears}</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              alt="icon of sth"
              src="/wheelIcon.png"
              width={20}
              height={20}
            />
            <span className="text-slate-400 text-sm">{drive}</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image
              alt="icon of sth"
              src="/gasIcon.png"
              width={20}
              height={20}
            />
            <span className="text-slate-400 text-sm">{fuel}</span>
          </div>
        </div>
      </div>
      <Transition show={open} as={Fragment}>
        <Dialog className=" reltive z-50" onClose={() => setOpen(false)}>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="fixed inset-0 w-screen overflow-y-auto">
            <div className="flex items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="transition duration-200 ease-in"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Dialog.Panel className=" flex flex-col justify-center items-center gap-5 mx-auto max-w-lg rounded bg-white p-4 text-black">
                  <div className="flex flex-row justify-between w-full">
                    <Dialog.Title className=" text-center  font-bold text-lg">{`${brand} ${model}`}</Dialog.Title>
                    <button onClick={() => setOpen(false)}>
                      <Image
                        alt="x icon"
                        src={"/xIcon.png"}
                        width={30}
                        height={30}
                      />
                    </button>
                  </div>

                  <Image
                    alt="image of car"
                    src={`/cars/${model}2.png`}
                    width={300}
                    height={300}
                  />

                  <Dialog.Description className="flex flex-col gap-5">
                    <p lang="en" className="break-words hyphens-auto">
                      {description}
                    </p>
                    <ul className=" flex flex-col">
                      <li className="flex flex-row p-2 justify-between bg-slate-100">
                        <span>Brand</span>
                        <span>{brand}</span>
                      </li>
                      <li className="flex flex-row p-2 justify-between bg-slate-200">
                        <span>Model</span>
                        <span>{model}</span>
                      </li>
                      <li className="flex flex-row p-2 justify-between bg-slate-100">
                        <span>Fuel</span>
                        <span>{fuel}</span>
                      </li>
                      <li className="flex flex-row p-2 justify-between bg-slate-200">
                        <span>Drive</span>
                        <span>{drive}</span>
                      </li>
                      <li className="flex flex-row p-2 justify-between bg-slate-100">
                        <span>MPG</span>
                        <span>{mpg}</span>
                      </li>
                      <li className="flex flex-row p-2 justify-between bg-slate-200">
                        <span>Gears</span>
                        <span>{gears}</span>
                      </li>
                    </ul>
                    <div className="flex flex-row justify-around items-center ">
                      <Link
                        href={`/car/${brand}-${model}`}
                        className="rounded-md text-white text-center bg-yellow-300 py-2 px-4 w-4/12"
                        // onClick={() => setOpen(false)}
                      >
                        View
                      </Link>
                      <button
                        className="rounded-md text-white bg-slate-400 py-2 px-4 w-4/12"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Description>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarCard;
