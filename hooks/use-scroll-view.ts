import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

const useScrollView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return { ref, mainControls, isInView };
};
export default useScrollView;
