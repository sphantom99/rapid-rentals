"use client";
import {
  useViewportScroll,
  motion,
  useSpring,
  useScroll,
  useVelocity,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
  const { scrollY, scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 100, damping: 100 });
  const xTransformed = useTransform(() => `${Math.abs(x.get() * 90) + 5}%`);
  const xCloudTransformed = useTransform(() => `${Math.abs(x.get() * 80)}%`);
  const scrollVelocity = useVelocity(scrollYProgress);
  const cloudOpacity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 100,
  });
  return (
    <nav className="w-full fixed z-20 bg-white pb-4 ">
      <div className="flex flex-row w-full justify-between p-4 px-8 items-center">
        <div className="absolute w-9/10">
          <motion.img
            style={{
              top: 55,
              position: "fixed",
              left: xCloudTransformed,
              opacity: cloudOpacity,
            }}
            alt="image of logo"
            src="/fumes.png"
            width={50}
            height={50}
          />
          <motion.img
            initial={{
              left: 10,
            }}
            style={{
              top: 40,
              position: "fixed",
              left: xTransformed,
            }}
            alt="image of logo"
            src="/car-logo.png"
            width={60}
            height={60}
          />
        </div>
        <li className="flex list-none gap-2 flex-row align-center justify-center items-center ">
          <Link href="/" className="flex flex-row">
            <h1 className=" font-bold text-sm">RapidRentals</h1>
          </Link>
        </li>
        <li className="flex list-none gap-2">
          <button className=" border-slate-600 list-none border-2 p-2 rounded-full px-4 text-sm hover:text-white hover:bg-slate-600 transition-colors ease-in-out">
            Sign in
          </button>
        </li>
      </div>
    </nav>
  );
}

export default NavBar;
