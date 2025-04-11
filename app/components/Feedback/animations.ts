import { gsap } from "gsap";

// const splitText = (text: string) => {
//   const letters = text.split("").map((char) => {
//     if (char === " ") {
//       return `<span style="display: inline-block;">&nbsp</span>`;
//     }
//     return `<span style="display: inline-block;">${char}</span>`;
//   });
//   return letters.join("");
// };

export const feedbackIntroAnimation = (
  circularBarIntro: HTMLElement,
  textIntro: HTMLParagraphElement,
  onComplete?: () => void
) => {
  const tl = gsap.timeline({
    onComplete,
  });

  tl.from(circularBarIntro, {
    scale: 0.5,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out",
  })
    .fromTo(
      textIntro,
      {
        opacity: 0,
        filter: "blur(10px)",
        y: 50,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 1,
          from: "random",
        },
      },
      "+=0.2"
    )
    .to(
      circularBarIntro,
      {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "+=1.3"
    )
    .to(
      textIntro,
      {
        opacity: 0,
        filter: "blur(10px)",
        y: 50,
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    );
};

export const fullFeedbackAnimation = (
  globalWrapper: HTMLElement,
  title: HTMLHeadingElement,
  circularBar: HTMLElement,
  globalFeedback: HTMLElement,
  solution: HTMLElement
) => {
  const tl = gsap.timeline();

  tl.set(globalWrapper, {
    visibility: "visible",
  })
    .from(globalWrapper, {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    })
    .from(
      title,
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
      circularBar,
      {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    )
    .from(
      globalFeedback,
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
      solution,
      {
        opacity: 0,
        filter: "blur(10px)",
        y: -50,
        duration: 0.5,
        ease: "power2.out",
      },
      "<"
    );

  return tl;
};

export const displaySolutionAnimation = (
  button: HTMLButtonElement,
  solutionWrapper: HTMLElement
) => {
  const tl = gsap.timeline();

  tl.fromTo(
    solutionWrapper,
    {
      opacity: 0,
      filter: "blur(10px)",
    },
    {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power2.out",
    }
  );

  return tl;
};
