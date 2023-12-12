import { auth } from "@/auth";
import RentedCarHistory from "@/components/RentedCarHistory";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getAllUserRentings } from "../actions";

async function page() {
  const session = await auth();
  if (!session) {
    redirect("/api/auth/signin");
  }
  const userRentings = await getAllUserRentings(session.user.id);
  return (
    <main className=" mt-28 flex  flex-col justify-center align-center items-center gap-8">
      <Image
        className="rounded-full"
        src={session?.user?.image ?? ""}
        alt="user image"
        width={180}
        height={180}
      />
      <h1 className="font-bold text-3xl">
        {session?.user?.name}{" "}
        {session.user.isAdmin && (
          <span className="text-gray-300 text-sm">(Admin)</span>
        )}
      </h1>
      <RentedCarHistory rows={userRentings} />
    </main>
  );
}

export default page;
