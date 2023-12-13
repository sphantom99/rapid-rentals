"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
import Image from "next/image";
function NeedToLogin() {
  const path = usePathname();
  return (
    <div className="flex flex-col gap-2">
      <button
        className="bg-white p-4 shadow-lg items-center justify-center gap-4 flex flex-row"
        onClick={() => signIn("google", { callbackUrl: path })}
      >
        <Image alt="google logo" src="/google.png" width={20} height={20} />{" "}
        Sign In with Google
      </button>
      <button className="bg-black text-white items-center justify-center p-4 gap-4 shadow-lg flex flex-row">
        <Image alt="github logo" src="/github.png" width={30} height={30} />{" "}
        Sign In with Github
      </button>
    </div>
  );
}

export default NeedToLogin;
