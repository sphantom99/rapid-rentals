import { Car } from "@/lib/types";
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  const client = new MongoClient(process.env.MONGO_URI ?? "");

  try {
    await client.connect();
    const db = await client.db("RapidRentals");
    const cars = await db.collection<Car>("Cars");
    console.log(searchParams.get("model"));

    let queryObject = {};
    if (searchParams.get("model") !== null) {
      let regex = new RegExp(`${searchParams.get("model")}`, "i");

      queryObject = {
        ...queryObject,
        model: { $regex: regex },
      };
    }
    if (searchParams.get("brand") !== null) {
      queryObject = {
        ...queryObject,
        brand: { $in: searchParams.get("brand")?.split(",") },
      };
    }
    console.log(queryObject);
    const result = await cars.find(queryObject);
    const resultArray = await result.toArray();
    console.log(resultArray);
    return NextResponse.json(resultArray);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
}
