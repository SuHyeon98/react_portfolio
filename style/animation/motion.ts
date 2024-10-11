const generateSpin = (vertex: number) => [
  { x: vertex, y: 0 },
  { x: 0, y: vertex },
  { x: -vertex, y: 0 },
  { x: 0, y: -vertex },
];

export const motion = {
  spin: {
    start: {},
    end: {
      duration: 1,
      motionPath: {
        path: generateSpin(10),
        curviness: 2,
        autoRotate: true,
      },
      ease: "power1.inOut",
    },
  },

  launch: {
    start: {},
    end: {
      duration: 1.5,
      x: "+=50",
      y: "-=50",
      opacity: 0,
      ease: "power2.in",
    },
  },
};
