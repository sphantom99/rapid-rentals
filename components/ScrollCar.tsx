"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React from "react";

function ScrollCar() {
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
  );
}

export default ScrollCar;
