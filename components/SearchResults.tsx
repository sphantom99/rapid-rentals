import React, { useState } from "react";
import CarCard from "./CarCard";

function SearchResults() {
  const results = [
    {
      model: "civic",
      brand: "Honda",
      fuel: "Gas",
      drive: "Front-Wheel Drive",
      mpg: "32,4",
      gears: "Manual",
      description:
        "The Honda Civic is a compact car renowned for its exceptional blend of style, reliability, and efficiency. With its sleek and modern design, it effortlessly navigates city streets while offering a comfortable and well-appointed interior. Known for its fuel efficiency and dependable performance, the Honda Civic is a popular choice among drivers seeking a practical and versatile vehicle that delivers an enjoyable driving experience.",
    },
    {
      model: "civic",
      brand: "Honda",
      fuel: "Gas",
      drive: "Front-Wheel Drive",
      mpg: "32,4",
      gears: "Manual",
      description:
        "The Honda Civic is a compact car renowned for its exceptional blend of style, reliability, and efficiency. With its sleek and modern design, it effortlessly navigates city streets while offering a comfortable and well-appointed interior. Known for its fuel efficiency and dependable performance, the Honda Civic is a popular choice among drivers seeking a practical and versatile vehicle that delivers an enjoyable driving experience.",
    },
    {
      model: "civic",
      brand: "Honda",
      fuel: "Gas",
      drive: "Front-Wheel Drive",
      mpg: "32,4",
      gears: "Manual",
      description:
        "The Honda Civic is a compact car renowned for its exceptional blend of style, reliability, and efficiency. With its sleek and modern design, it effortlessly navigates city streets while offering a comfortable and well-appointed interior. Known for its fuel efficiency and dependable performance, the Honda Civic is a popular choice among drivers seeking a practical and versatile vehicle that delivers an enjoyable driving experience.",
    },
    {
      model: "civic",
      brand: "Honda",
      fuel: "Gas",
      drive: "Front-Wheel Drive",
      mpg: "32,4",
      gears: "Manual",
      description:
        "The Honda Civic is a compact car renowned for its exceptional blend of style, reliability, and efficiency. With its sleek and modern design, it effortlessly navigates city streets while offering a comfortable and well-appointed interior. Known for its fuel efficiency and dependable performance, the Honda Civic is a popular choice among drivers seeking a practical and versatile vehicle that delivers an enjoyable driving experience.",
    },
    {
      model: "civic",
      brand: "Honda",
      fuel: "Gas",
      drive: "Front-Wheel Drive",
      mpg: "32,4",
      gears: "Manual",
      description:
        "The Honda Civic is a compact car renowned for its exceptional blend of style, reliability, and efficiency. With its sleek and modern design, it effortlessly navigates city streets while offering a comfortable and well-appointed interior. Known for its fuel efficiency and dependable performance, the Honda Civic is a popular choice among drivers seeking a practical and versatile vehicle that delivers an enjoyable driving experience.",
    },
    {
      model: "civic",
      brand: "Honda",
      fuel: "Gas",
      drive: "Front-Wheel Drive",
      mpg: "32,4",
      gears: "Manual",
      description:
        "The Honda Civic is a compact car renowned for its exceptional blend of style, reliability, and efficiency. With its sleek and modern design, it effortlessly navigates city streets while offering a comfortable and well-appointed interior. Known for its fuel efficiency and dependable performance, the Honda Civic is a popular choice among drivers seeking a practical and versatile vehicle that delivers an enjoyable driving experience.",
    },
  ];
  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {results.map((car, i) => (
        <CarCard key={i} car={car} />
      ))}
    </div>
  );
}

export default SearchResults;
