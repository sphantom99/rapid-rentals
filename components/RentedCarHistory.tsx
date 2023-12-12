"use client";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Renting } from "@/lib/types";

type TRentedCarHistoryProps = {
  rows: Renting[] | undefined;
};
function RentedCarHistory(props: TRentedCarHistoryProps) {
  const { rows } = props;
  const cols = [
    { id: 1, field: "brand", headerName: "Brand", width: 100 },
    { id: 2, field: "model", headerName: "Model", width: 100 },
    {
      id: 3,
      field: "pickUpLocation",
      headerName: "Pick Up Location",
      width: 300,
    },
    {
      id: 4,
      field: "pickUpDateTime",
      headerName: "Pick Up Date & Time",
      width: 200,
    },
    {
      id: 5,
      field: "dropOffLocation",
      headerName: "Drop Off Location",
      width: 300,
    },
    {
      id: 6,
      field: "dropOffDateTime",
      headerName: "Drop Off Date & Time",
      width: 200,
    },
  ];

  const ModRows = rows?.map((row) => ({ id: row["_id"], ...row }));
  return (
    <div className="w-5/6 m-auto flex justify-center align-center items-center">
      <Disclosure>
        {({ open }) => (
          <div className="w-full">
            <Disclosure.Button
              className={`flex text-lg w-full justify-between  ${
                open ? "rounded-t-lg" : "rounded-lg"
              }  bg-yellow-300 px-4 py-2 text-left  font-medium text-white hover:bg-yellow-400 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500/75`}
            >
              <span>Rental History</span>
              <ChevronUpIcon
                className={`${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500 bg-white shadow-lg  rounded-b-lg">
              <DataGrid
                disableRowSelectionOnClick
                disableColumnMenu
                getRowId={(row) => row["_id"]}
                hideFooter
                columns={cols}
                rows={rows ?? []}
              />
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default RentedCarHistory;
