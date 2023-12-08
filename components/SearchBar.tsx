"use client";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Car } from "@/lib/types";
type TSearchBarProps = {
  carBrands: string[];
  setResults: React.Dispatch<React.SetStateAction<Car[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
function SearchBar(props: TSearchBarProps) {
  const { carBrands, setResults, setLoading } = props;
  const [query, setQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = React.useState<string[]>([]);
  const [model, setModel] = useState("");
  const filteredBrands = carBrands.filter((brand) => {
    return brand.toLowerCase().includes(query.toLowerCase());
  });
  console.log(carBrands);

  const handleChangeModel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModel(e.target.value);
  };
  const handleSearch = async () => {
    if (selectedBrand.length > 0 || model !== "") {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/search?${
            selectedBrand.length > 0 ? `brand=${selectedBrand?.join(",")}` : ""
          }${model !== "" && selectedBrand.length > 0 ? "&" : ""}${
            model !== "" ? `model=${model}` : ""
          }`
        );
        const data = await res.json();
        setResults(data);
        setLoading(false);
      } catch {
        (error: Error) => console.log(error);
      }
    }
  };
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Combobox
        multiple={true}
        value={selectedBrand}
        onChange={(v) => setSelectedBrand(v)}
      >
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-slate-200 text-left focus:ring-2 focus:ring-yellow-400 shadow-md focus:outline-yellow-300  sm:text-sm">
            <Combobox.Input
              placeholder="Honda"
              displayValue={(brands: string[]) => brands.join(", ")}
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
              {filteredBrands.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredBrands.map((brand) => (
                  <Combobox.Option
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-yellow-400 text-white" : "text-gray-900"
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
                        <Image
                          alt="logo of brand"
                          src={`/brands/${brand}.png`}
                          width={30}
                          height={20}
                        />
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-yellow-400"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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

      {/* <input placeholder="Honda" className="  " type="text" /> */}
      <input
        onChange={handleChangeModel}
        placeholder="Civic"
        className=" text-start focus:outline-yellow-300 p-2  bg-slate-200 rounded-lg focus:ring-2 focus:ring-yellow-400"
        type="text"
      />
      <button onClick={handleSearch} className="bg-slate-200 rounded-lg p-2">
        <MagnifyingGlassIcon
          className="h-5 w-5 text-gray-400"
          aria-hidden="true"
        />{" "}
      </button>
    </div>
  );
}

export default SearchBar;
