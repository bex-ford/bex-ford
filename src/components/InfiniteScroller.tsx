"use client";

import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  speed?: "extra-slow" | "slow" | "normal" | "fast" | "extra-fast";
  className?: string;
  direction?: "left" | "right";
};

export const InfiniteScroller = ({
  children,
  speed = "slow",
  direction = "left",
}: Props) => {
  const prefersReducedMotion = false;

  let scrollerStates = "overflow-hidden w-screen ";
  let innerScrollerStates = "flex-wrap items-center justify-center";

  if (!prefersReducedMotion) {
    scrollerStates +=
      "group  [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ";
    innerScrollerStates =
      "flex-nowrap items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none group-hover:pause";

    switch (speed) {
      case "extra-slow":
        innerScrollerStates +=
          direction === "right"
            ? " animate-[loop-scroll-reverse_50s_linear_infinite]"
            : " animate-[loop-scroll_50s_linear_infinite]";
        break;
      case "slow":
        innerScrollerStates +=
          direction === "right"
            ? " animate-[loop-scroll-reverse_25s_linear_infinite]"
            : " animate-[loop-scroll_25s_linear_infinite]";
        break;
      case "normal":
        innerScrollerStates +=
          direction === "right"
            ? " animate-[loop-scroll-reverse_15s_linear_infinite]"
            : " animate-[loop-scroll_15s_linear_infinite]";
        break;
      case "fast":
        innerScrollerStates +=
          direction === "right"
            ? " animate-[loop-scroll-reverse_10s_linear_infinite]"
            : " animate-[loop-scroll_10s_linear_infinite]";
        break;
      case "extra-fast":
        innerScrollerStates +=
          direction === "right"
            ? " animate-[loop-scroll-reverse_5s_linear_infinite]"
            : " animate-[loop-scroll_5s_linear_infinite]";
        break;
      default:
        innerScrollerStates +=
          direction === "right"
            ? " animate-[loop-scroll-reverse_15s_linear_infinite]"
            : " animate-[loop-scroll_15s_linear_infinite]";
        break;
    }
  }

  return (
    <>
      <div className={"inline-flex " + scrollerStates}>
        {" "}
        {/* Scroller */}
        <ul className={"flex gap-2 p-2 " + innerScrollerStates}>
          {" "}
          {/* Inner Scroller */}
          {children}
        </ul>
        {!prefersReducedMotion && (
          <ul
            className={"flex gap-2 p-2 " + innerScrollerStates}
            aria-hidden={true}
          >
            {" "}
            {/* Inner Scroller */}
            {children}
          </ul>
        )}
      </div>
    </>
  );
};
