"use client";
import { useViewportScroll, motion, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
  const { scrollYProgress } = useViewportScroll();
  const x = useSpring(scrollYProgress);
  return (
    <nav className="flex justify-between p-4 px-8 items-center">
      <li className="flex list-none gap-2 flex-row align-center justify-center items-center ">
        <Link href="/">
          <motion.div
            initial={{ x: "1em", y: "1em" }}
            style={{
              position: "fixed",
              x: x,
            }}
          >
            <Image
              alt="image of logo"
              src="/car-logo.png"
              width={60}
              height={60}
            />
          </motion.div>
          <h1 className=" font-bold text-sm">CarShop</h1>
        </Link>
      </li>
      <li>
        <button className=" border-slate-600 list-none border-2 p-2 rounded-full px-4 text-sm hover:text-white hover:bg-slate-600 transition-colors ease-in-out">
          Sign in
        </button>
      </li>
    </nav>
  );
}

export default NavBar;
