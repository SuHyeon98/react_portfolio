// use client 쓰는 이유 : 써야지 웹에 적용됨
"use client";

import { animation } from "@/style/animation/animation";
import { motion } from "@/style/animation/motion";
import { typing } from "@/style/animation/typing";
import gsap from "gsap";
import { MotionPathPlugin, TextPlugin } from "gsap/all";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(TextPlugin, MotionPathPlugin);

type IntroProps = {
  timeline: gsap.core.Timeline;
};

const Intro = ({ timeline }: IntroProps) => {
  const introText = useRef(null);
  const rocket = useRef(null);

  useEffect(() => {
    timeline.clear();
    timeline
      .fromTo(introText.current, typing.intro.start, typing.intro.end)
      .fromTo(rocket.current, typing.rocket.start, typing.rocket.end)
      .fromTo(rocket.current, animation.fadeIn.start, animation.fadeIn.end)
      .fromTo(rocket.current, motion.spin.start, motion.spin.end)
      .fromTo(rocket.current, motion.launch.start, motion.launch.end)
      .fromTo(introText.current, typing.intro.end, typing.intro.start);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "50px",
      }}
    >
      <span ref={introText}></span>
      <span ref={rocket} />
    </div>
  );
};

export default Intro;
