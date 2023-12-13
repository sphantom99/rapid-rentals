import { auth } from "@/auth";
import NeedToLogin from "@/components/NeedToLogin";
import RentBanner from "@/components/RentBanner";
import RentFilters from "@/components/RentFilters";

async function page({ params }: { params: { carName: string } }) {
  const session = await auth();
  return (
    <main className=" mt-24 flex flex-col justify-center items-center gap-2">
      <RentBanner carName={params.carName} />
      {!session ? (
        <NeedToLogin />
      ) : (
        <RentFilters carName={params.carName} user={session?.user} />
      )}
    </main>
  );
}

export default page;
