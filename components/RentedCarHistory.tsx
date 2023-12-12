"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React from "react";

function RentedCarHistory() {
  return (
    <div className="w-3/4 m-auto flex justify-center align-center items-center">
      <Disclosure>
        {({ open }) => (
          <div className="w-full">
            <Disclosure.Button className="flex text-lg w-full justify-between rounded-lg bg-yellow-300 px-4 py-2 text-left  font-medium text-white hover:bg-yellow-400 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500/75">
              <span>Rental History</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
              If you're unhappy with your purchase for any reason, email us
              within 90 days and we'll refund you in full, no questions asked.
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default RentedCarHistory;
