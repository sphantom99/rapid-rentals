"use server";

import { Car } from "@/lib/types";
import { MongoClient } from "mongodb";

export async function getAllCars() {
  try {
    const client = new MongoClient(process.env.MONGO_URI ?? "");
    await client.connect();
    const db = await client.db("RapidRentals");
    const cars = await db.collection("Cars");
    const result = await cars.find({});
    const resultArray = await result.toArray();
    console.log(resultArray);
    return resultArray;
  } catch (error) {
    console.log(error);
  }
}
