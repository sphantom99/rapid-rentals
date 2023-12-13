"use server";

import clientPromise from "@/lib/dbConnect";
import { Car, Renting } from "@/lib/types";

export async function getAllCarBrands() {
  try {
    const client = await clientPromise;
    const db = await client.db("RapidRentals");
    const cars = await db.collection<Car>("Cars");
    const result = await cars.find({});
    const resultArray = await result.toArray();
    return resultArray
      ?.map((car) => car.brand)
      .filter((value, index, array) => array.indexOf(value) === index);
  } catch (error) {
    console.error(error);
  }
}
export async function getAllCars() {
  try {
    const client = await clientPromise;
    const db = await client.db("RapidRentals");
    const cars = await db.collection<Car>("Cars");
    const result = await cars.find({}).limit(5);
    const resultArray = await result.toArray();
    return resultArray;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllUserRentings(userId: string) {
  try {
    const client = await clientPromise;
    const db = await client.db("RapidRentals");
    const cars = await db.collection<Renting>("Rentings");
    const result = await cars.find({ userId: userId });
    const resultArray = await result.toArray();
    return resultArray;
  } catch (error) {
    console.error(error);
  }
}

export async function createRenting(renting: Omit<Renting, "_id">) {
  try {
    const client = await clientPromise;
    const db = await client.db("RapidRentals");
    const rentings = await db.collection<Omit<Renting, "_id">>("Rentings");
    const res = await rentings.insertOne(renting);
    return res;
  } catch (error) {
    console.error(error);
  }
}
