// use Client 쓰는 이유
"use client";

import gsap from "gsap";
import { MotionPathPlugin, TextPlugin } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin, MotionPathPlugin);

const Intro = () => {
  const target = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      target.current,
      { text: "" },
      { text: "Welcom To My PortFolio 🚀", duration: 1 }
    );

    gsap.fromTo(
      target.current,
      { x: 0 },
      { x: 50, duration: 1 } // 오른쪽으로 50px 이동
    );
  }, []);

  return <div ref={target}></div>;
};

export default Intro;
