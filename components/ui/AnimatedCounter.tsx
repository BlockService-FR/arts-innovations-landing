"use client";

import {
  AnimationOptions, // Import AnimationOptions
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";

type AnimatedCounterProps = {
  from: number;
  to: number;
  suffix?: string;
  animationOptions?: AnimationOptions; // Use AnimationOptions without generic parameter
};

const AnimatedCounter = ({
  from,
  to,
  suffix,
  animationOptions,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Determine the number of decimal places for the 'to' value
    const toAsString = to.toString();
    const decimalPart = toAsString.split('.')[1];
    const decimalPlaces = decimalPart ? decimalPart.length : 0;

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = to.toFixed(decimalPlaces) + suffix;
      return;
    }

    const totalDuration = animationOptions?.duration ?? 5;
    const integerTarget = Math.floor(to);

    let controls: any; // To hold the animation controls for cleanup

    if (from < integerTarget) {
      // Animate integer part first
      controls = animate(from, integerTarget, {
        duration: totalDuration * 0.8, // 80% of duration for integer part
        ease: "easeOut",
        ...animationOptions,
        onUpdate(value) {
          element.textContent = value.toFixed(0) + suffix;
        },
        onComplete() {
          // Animate decimal part
          const controls2 = animate(integerTarget, to, {
            duration: totalDuration * 0.2, // 20% of duration for decimal part
            ease: "easeOut",
            ...animationOptions,
            onUpdate(value) {
              element.textContent = value.toFixed(decimalPlaces) + suffix;
            },
          });
          // Update controls for outer cleanup
          controls = controls2;
        },
      });
    } else {
      // If 'from' is already at or beyond the integer part, animate directly to 'to' with decimals
      controls = animate(from, to, {
        duration: totalDuration, // Use full duration
        ease: "easeOut",
        ...animationOptions,
        onUpdate(value) {
          element.textContent = value.toFixed(decimalPlaces) + suffix;
        },
      });
    }

    // Cancel on unmount
    return () => {
      controls?.stop();
    };
  }, [ref, inView, from, to, animationOptions]);

  return <span ref={ref} />;
};

export default AnimatedCounter;
