import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const feedbackAppearAnimation = (
  wrapper: HTMLElement,
  topic: HTMLElement,
  text: HTMLParagraphElement,
  scrollInfo: HTMLParagraphElement
) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: "top 70%",
      end: "bottom center",
    },
  });

  tl.set(wrapper, {
    visibility: "visible",
  })
    .from(wrapper, {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(
      topic,
      {
        opacity: 0,
        filter: "blur(10px)",
        y: -50,
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    )
    .from(
      text,
      {
        opacity: 0,
        filter: "blur(10px)",
        y: -50,
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    )
    .from(
      scrollInfo,
      {
        opacity: 0,
        filter: "blur(10px)",
        y: -50,
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    );
};
