"use client";

import gsap, { TextPlugin } from "gsap/all";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin);

type ScrollProps = {
  timeline: gsap.core.Timeline;
};

const Scroll = ({ timeline }: ScrollProps) => {
  const scrollImg = useRef(null);

  useEffect(() => {
    timeline.fromTo(
      scrollImg.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    );
  }, [timeline]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
      }}
    >
      <Image
        ref={scrollImg}
        src="/images/spaceMoon.jpg"
        alt="Moon"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Scroll;
