import React from "react";
import { auth } from "@/auth";
import Link from "next/link";
import Image from "next/image";

async function Avatar() {
  const session = await auth();
  console.log(session);

  return (
    <>
      {session ? (
        <div className="flex flex-row gap-2 justify-between items-center align-center">
          <Image
            className="rounded-full"
            alt="image of user"
            width={30}
            height={30}
            src={session?.user?.image || "/wheelIcon.png"}
          />
          <Link
            href="/api/auth/signout"
            className=" border-2 rounded-lg bg-yellow-300 border-yellow-300 text-white p-1  hover:bg-yellow-400 hover:text-white hover:border-yellow-400"
          >
            Sign out
          </Link>
        </div>
      ) : (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </>
  );
}

export default Avatar;
