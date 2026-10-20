"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
  src: string;
  poster: string;
  title: string;
};

// Plays only while on screen. preload="none" means nothing downloads until
// the video first scrolls into view.
export const ProjectVideo = ({ src, poster, title }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { amount: 0.25 });

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (isInView) {
      // play() rejects if the browser blocks autoplay; the poster stays visible
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={`${title} demo`}
      className="h-full w-full rounded-md object-cover"
    />
  );
};
