"use server";

import { Car, Renting } from "@/lib/types";
import { MongoClient } from "mongodb";

export async function getAllCarBrands() {
  const client = new MongoClient(process.env.MONGO_URI ?? "");

  try {
    await client.connect();
    const db = await client.db("RapidRentals");
    const cars = await db.collection<Car>("Cars");
    const result = await cars.find({});
    const resultArray = await result.toArray();
    return resultArray
      ?.map((car) => car.brand)
      .filter((value, index, array) => array.indexOf(value) === index);
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
}
export async function getAllCars() {
  const client = new MongoClient(process.env.MONGO_URI ?? "");

  try {
    await client.connect();
    const db = await client.db("RapidRentals");
    const cars = await db.collection<Car>("Cars");
    const result = await cars.find({}).limit(5);
    const resultArray = await result.toArray();
    return resultArray;
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
}

export async function getAllUserRentings(userId: string) {
  const client = new MongoClient(process.env.MONGO_URI ?? "");

  try {
    await client.connect();
    const db = await client.db("RapidRentals");
    const cars = await db.collection<Renting>("Rentings");
    const result = await cars.find({ userId: userId });
    const resultArray = await result.toArray();
    return resultArray;
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
}

export async function createRenting(renting: Omit<Renting, "_id">) {
  const client = new MongoClient(process.env.MONGO_URI ?? "");

  try {
    await client.connect();
    const db = await client.db("RapidRentals");
    const rentings = await db.collection<Omit<Renting, "_id">>("Rentings");
    const res = await rentings.insertOne(renting);
    return res;
  } catch (error) {
    console.error(error);
  } finally {
    client.close();
  }
}
