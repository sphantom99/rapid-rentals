import clientPromise from "@/lib/dbConnect";
import { Car } from "@/lib/types";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // defaults to force-static
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  try {
    const client = await clientPromise;
    const db = await client.db("RapidRentals");
    const cars = await db.collection<Car>("Cars");

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
    const result = await cars.find(queryObject);
    const resultArray = await result.toArray();
    return NextResponse.json(resultArray);
  } catch (error) {
    console.error(error);
  }
}
