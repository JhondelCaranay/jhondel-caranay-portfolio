import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

const useScrollView = () => {
  const ref = useRef(null);
  // wait until 20% is visible so elements don't flicker at the viewport edge
  const isInView = useInView(ref, { once: false, amount: 0.2 });
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
