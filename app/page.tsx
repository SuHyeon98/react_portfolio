"use client";

import { useEffect, useRef } from "react";
import Intro from "./components/Intro";
import { gsap } from "gsap";
import Scroll from "./components/Scroll";

const Home = () => {
  const timeline = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    timeline.current.play();
  }, []);

  return (
    <div>
      <Intro timeline={timeline.current} />
      <Scroll timeline={timeline.current} />
    </div>
  );
};

export default Home;
