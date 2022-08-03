// import { useInView } from "react-intersection-observer";
// import { useAnimation } from "framer-motion";
// import { useEffect } from "react";

// export const useScroll = (thresh = 0.2) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({ threshold: thresh });
//   useEffect(() => {
//     if (inView) {
//       controls.start("show");
//     }
//   }, [ref, controls, inView]);
//   // view ? controls.start("show") : controls.start("hidden");
// };
