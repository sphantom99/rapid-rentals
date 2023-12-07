"use client";
import { Tab } from "@headlessui/react";
import React, { Fragment } from "react";

type TCarInformationCardProps = {
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

function CarInformationCard(props: TCarInformationCardProps) {
  // const car = {
  //   model: "civic",
  //   brand: "Honda",
  //   fuel: "Gas",
  //   drive: "Front-Wheel Drive",
  //   mpg: "32,4",
  //   gears: "Manual",
  //   description:
  //     "The Honda Civic is a compact car renowned for its exceptional blend of style, reliability, and efficiency. With its sleek and modern design, it effortlessly navigates city streets while offering a comfortable and well-appointed interior. Known for its fuel efficiency and dependable performance, the Honda Civic is a popular choice among drivers seeking a practical and versatile vehicle that delivers an enjoyable driving experience.",
  // };
  const { car } = props;
  return (
    <div className="flex flex-col gap-5 justify-between">
      <span className="font-bold text-center md:text-left text-3xl font-mono  bg-gradient-to-r from-yellow-400 to-yellow-200 text-transparent bg-clip-text">{`${car.brand} ${car.model}`}</span>
      <div className="shadow-lg">
        <Tab.Group>
          <Tab.List className="flex flex-row justify-start">
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={`w-full rounded-t-lg text-center py-2.5 text-sm font-medium hover:cursor-pointer  ${
                    selected ? "text-white bg-yellow-400" : "text-slate-600"
                  }`}
                >
                  Description
                </div>
              )}
            </Tab>
            <Tab as={Fragment}>
              {({ selected }) => (
                <div
                  className={`w-full rounded-t-lg text-center py-2.5 text-sm font-medium hover:cursor-pointer ${
                    selected ? "text-white bg-yellow-400" : "text-slate-600"
                  }`}
                >
                  Specifications
                </div>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="rounded-xl bg-white p-3  h-full">
              <p className="text-slate-600 text-xl">{car.description}</p>
            </Tab.Panel>
            <Tab.Panel className=" p-4">
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
