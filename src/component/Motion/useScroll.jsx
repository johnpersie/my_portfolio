import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export const useScroll = (thresh = 0.2) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: thresh });
  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  });
  // view ? controls.start("show") : controls.start("hidden");
  return [ref, controls];
};
