import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-wrap gap-2">
      <input
        placeholder="Honda"
        className=" text-start p-2 bg-slate-200 border-slate-200 rounded-lg"
        type="text"
      />
      <input
        placeholder="Civic"
        className=" text-start p-2 bg-slate-200 border-slate-200 rounded-lg"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
