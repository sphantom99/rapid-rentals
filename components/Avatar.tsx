import React from "react";
import { auth } from "@/auth";
import Link from "next/link";

async function Avatar() {
  const session = await auth();
  console.log(session);

  return (
    <>
      {session ? (
        <Link
          href="/api/auth/signout"
          className=" border-2 rounded-full p-2 border-black hover:bg-yellow-300 hover:text-white hover:border-yellow-400"
        >
          Sign out
        </Link>
      ) : (
        <Link href="/api/auth/signin">Sign in</Link>
      )}
    </>
  );
}

export default Avatar;
