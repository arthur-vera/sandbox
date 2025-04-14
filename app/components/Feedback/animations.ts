import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export const feedbackIntroAnimation = (
  circularBarIntro: HTMLElement,
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
  });
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

/**
 * Smooth scroll initialization (optional)
 */
export const initializeSmoothScroll = () => {
  const lenis = new Lenis({
    autoRaf: true,
  });
  return lenis;
};

/**
 * Fade out an element when scrolling
 * @param selector - The CSS selector of the element to fade out
 * @param triggerSelector - The CSS selector of the trigger element
 */
export const fadeOutOnScroll = (
  selector: HTMLParagraphElement,
  triggerSelector: HTMLParagraphElement
) => {
  gsap.to(selector, {
    autoAlpha: 0,
    duration: 0.2,
    scrollTrigger: {
      trigger: triggerSelector,
      start: "top top",
      end: "top top-=1",
      toggleActions: "play none reverse none",
    },
  });
};

/**
 * Pin a container during scrolling
 * @param pinSelector - The CSS selector of the element to pin
 * @param containerSelector - The CSS selector of the container to pin
 */
export const createPinScrollEffect = (
  pinSelector: HTMLElement,
  containerSelector: HTMLElement
) => {
  ScrollTrigger.create({
    trigger: pinSelector,
    start: "top top",
    end: "bottom bottom",
    pin: containerSelector,
  });
};

/**
 * Animate rotation of elements during scrolling
 * @param elementsSelector - The CSS selector of the elements to animate
 * @param triggerSelector - The CSS selector of the trigger element
 * @param startRotation - The starting rotation angle
 * @param endRotation - The ending rotation angle
 * @param stagger - The delay between animations of each element
 */
export const animateRotationOnScroll = (
  elementsSelector: NodeList,
  triggerSelector: HTMLElement,
  startRotation: number,
  endRotation: number,
  stagger: number
) => {
  gsap.fromTo(
    elementsSelector,
    {
      rotation: startRotation,
    },
    {
      rotation: endRotation,
      ease: "power2.inOut",
      stagger: stagger,
      scrollTrigger: {
        trigger: triggerSelector,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    }
  );
};
