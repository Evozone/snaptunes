"use client";
import { useTime, useTransform } from "framer-motion";
import React from "react";
import { LandingPage } from "@/components/landing-page";

export default function Home() {
  const ref = React.useRef(null);
  const time = useTime();

  const pathLengthFirst = useTransform(time, [0, 4000], [0.2, 1.2]);
  const pathLengthSecond = useTransform(time, [0, 4000], [0.15, 1.2]);
  const pathLengthThird = useTransform(time, [0, 4000], [0.1, 1.2]);
  const pathLengthFourth = useTransform(time, [0, 4000], [0.05, 1.2]);
  const pathLengthFifth = useTransform(time, [0, 4000], [0, 1.2]);

  return (
    <div
      className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >
      <LandingPage
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="SnapTunes"
        description="Transform pixels into music."
      />
    </div>
  );
}
