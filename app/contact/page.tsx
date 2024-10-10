"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const ContactPage = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        text: "Hello, World!",
        duration: 2,
        ease: "power1.inOut",
      });
    }
  }, []);

  return <div ref={textRef}></div>;
};

export default ContactPage;
