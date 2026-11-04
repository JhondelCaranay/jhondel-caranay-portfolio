"use client";

import clsx from "clsx";
import { useEffect, useId, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useReducedMotion } from "framer-motion";

type Props = {
  content: string;
};

// Must match the line-clamp class below.
const COLLAPSED_LINES = 4;

// Clamps the text to 4 lines. The toggle only shows when text is actually cut
// off, which depends on screen width, so it is measured rather than based on
// character count.
export const ProjectDescription = ({ content }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const id = useId();
  const reducedMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  // Separate from `open`: when closing, the clamp returns only after the height
  // animation ends, otherwise the text would cut off before the box shrinks.
  const [clampOn, setClampOn] = useState(true);
  const [overflowing, setOverflowing] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    // Unclamped text has no overflow to measure, so keep the last result.
    if (!el || !clampOn) return;

    const measure = () => setOverflowing(el.scrollHeight > el.clientHeight);
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [clampOn]);

  const toggle = () => {
    const wrapper = wrapperRef.current;
    const text = textRef.current;
    if (!wrapper || !text) return;

    const nextOpen = !open;
    const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
    // scrollHeight is the full text height whether or not it is clamped.
    const target = nextOpen ? text.scrollHeight : lineHeight * COLLAPSED_LINES;

    // Read before cancelling so a quick second click continues from where the
    // box is now instead of jumping.
    const from = wrapper.offsetHeight;
    animationRef.current?.cancel();
    setOpen(nextOpen);
    if (nextOpen) setClampOn(false);

    // Web Animations API rather than Framer's animate(), which leaves a fixed
    // inline height behind and clips the text if the screen is later resized.
    // This leaves no style behind, so the box returns to auto height.
    const animation = wrapper.animate(
      [{ height: `${from}px` }, { height: `${target}px` }],
      {
        duration: reducedMotion ? 0 : 300,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    );
    // Sync so the clamp is back before the animation's height is released,
    // otherwise the full text flashes for a frame.
    if (!nextOpen) {
      animation.onfinish = () => flushSync(() => setClampOn(true));
    }
    animationRef.current = animation;
  };

  return (
    <div className="w-full rounded-md bg-[#112240] p-4 text-sm leading-relaxed md:p-6 md:text-base">
      <div ref={wrapperRef} className="overflow-hidden">
        <p ref={textRef} id={id} className={clsx(clampOn && "line-clamp-4")}>
          {content}
        </p>
      </div>
      {overflowing && (
        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={id}
          className="mt-2 font-titleFont text-sm tracking-wide text-colorPrimary duration-300 hover:underline"
        >
          {open ? "Show less" : "More"}
        </button>
      )}
    </div>
  );
};
