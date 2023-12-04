"use client";
import { Tab } from "@headlessui/react";
import React from "react";

function CarInformationCard() {
  const car = {
    model: "civic",
    brand: "Honda",
    fuel: "Gas",
    drive: "Front-Wheel Drive",
    mpg: "32,4",
    gears: "Manual",
    description:
      "The Honda Civic is a compact car renowned for its exceptional blend of style, reliability, and efficiency. With its sleek and modern design, it effortlessly navigates city streets while offering a comfortable and well-appointed interior. Known for its fuel efficiency and dependable performance, the Honda Civic is a popular choice among drivers seeking a practical and versatile vehicle that delivers an enjoyable driving experience.",
  };
  return (
    <div className="flex flex-col gap-5 ">
      <span className="font-bold text-3xl">{`${car.brand} ${car.model}`}</span>
      <div className="shadow-lg">
        <Tab.Group>
          <Tab.List className="flex flex-row justify-start">
            <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5  ring-yellow ring-opacity-60 ring-offset-2 ring-offset-yellow-300 focus:outline-none focus:ring-2">
              Description
            </Tab>
            <div className=" h-10 min-h-[2.5rem] w-2 bg-yellow-400" />
            <Tab className="w-full rounded-lg py-2.5 text-sm font-medium leading-5  ring-yellow ring-opacity-60 ring-offset-2 ring-offset-yellow-300 focus:outline-none focus:ring-2">
              Specifications
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="rounded-xl bg-white p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-300 focus:outline-none focus:ring-2">
              <p className="text-slate-600 text-xl">{car.description}</p>
            </Tab.Panel>
            <Tab.Panel className="p-4">
              <ul className=" flex flex-col">
                <li className="flex flex-row p-2 justify-between bg-slate-100">
                  <span>Brand</span>
                  <span>{car.brand}</span>
                </li>
                <li className="flex flex-row p-2 justify-between bg-slate-200">
                  <span>Model</span>
                  <span>{car.model}</span>
                </li>
                <li className="flex flex-row p-2 justify-between bg-slate-100">
                  <span>Fuel</span>
                  <span>{car.fuel}</span>
                </li>
                <li className="flex flex-row p-2 justify-between bg-slate-200">
                  <span>Drive</span>
                  <span>{car.drive}</span>
                </li>
                <li className="flex flex-row p-2 justify-between bg-slate-100">
                  <span>MPG</span>
                  <span>{car.mpg}</span>
                </li>
                <li className="flex flex-row p-2 justify-between bg-slate-200">
                  <span>Gears</span>
                  <span>{car.gears}</span>
                </li>
              </ul>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default CarInformationCard;
