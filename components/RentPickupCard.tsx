"use client";
import { Combobox, Transition } from "@headlessui/react";
import {
  CalendarIcon,
  CheckIcon,
  ChevronUpDownIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import React, { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type TRentCardProps = {
  title: "Pick Up" | "Drop Off";
  addresses: string[];
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  setDateTime: React.Dispatch<React.SetStateAction<Date>>;
};
function RentPickupCard(props: TRentCardProps) {
  const { title, addresses, setLocation, setDateTime } = props;

  const [query, setQuery] = useState("");

  const filteredLocations = addresses.filter((adress) => {
    return adress.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <div className="bg-white p-4 shadow-lg">
      <div className="flex flex-row md:mb-2 gap-2">
        <MapPinIcon color="#fbbf24" className="h-4 w-4" /> {title}
      </div>
      <div className="flex flex-row gap-4 items-center justify-center">
        <div className="flex flex-col w-1/2 gap-2">
          <div>Location</div>
          <Combobox onChange={(v: string) => setLocation(v)}>
            <div className="relative">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-slate-200 text-left focus:ring-2 focus:ring-yellow-400 shadow-md focus:outline-yellow-300  sm:text-sm">
                <Combobox.Input
                  placeholder="Elm Street"
                  className="w-full bg-slate-200 border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-3 focus:outline-yellow-300 focus:ring-2 focus:ring-yellow-300"
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {filteredLocations.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredLocations.map((brand) => (
                      <Combobox.Option
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-yellow-400 text-white"
                              : "text-gray-900"
                          }`
                        }
                        value={brand}
                      >
                        {({ selected, active }) => (
                          <div className="flex flex-row gap-2 justify-between align-center items-center">
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {brand}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? "text-white" : "text-yellow-400"
                                }`}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </div>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
        <div className="flex flex-col w-1/2 gap-2">
          <div>Date & Time</div>
          <div>
            <DatePicker
              dayClassName={(day: Date) => " text-white"}
              icon={<CalendarIcon className="w-5 h-5" />}
              showIcon
              minDate={new Date()}
              selected={new Date()}
              className="bg-slate-200 rounded-lg w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-3 focus:outline-yellow-300 focus:ring-2 focus:ring-yellow-300"
              onChange={(v: Date) => setDateTime(v)}
              showTimeSelect
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RentPickupCard;
