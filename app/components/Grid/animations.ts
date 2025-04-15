import { gsap } from "gsap";

export const gridAppear = (header: HTMLElement, gridItems: NodeList) => {
  const tl = gsap.timeline();

  tl.set(gridItems, {
    visibility: "visible",
  })
    .from(header, {
      y: -100,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(gridItems, {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
      stagger: {
        each: 0.2,
        from: "random",
      },
    });

  return tl;
};
