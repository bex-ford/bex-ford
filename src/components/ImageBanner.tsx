"use client";

import { InfiniteScroller } from "@/components/InfiniteScroller";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

export const LogoBanner = () => {
  return (
    <div className="flex flex-wrap w-full items-center justify-evenly bg-custom-light-grey p-5">
      <Fade triggerOnce={true}>
        <InfiniteScroller speed="extra-slow">
          <li>
            <Image
              className="h-24 p-2"
              src="/images/avatars/avatar-1.png"
              alt="Avatar"
              width={96}
              height={96}
              loading="lazy"
            />
          </li>
          <li>
            <Image
              className="h-24 p-2"
              src="/images/avatars/avatar-1.png"
              alt="Avatar"
              width={96}
              height={96}
              loading="lazy"
            />
          </li>
          <li>
            <Image
              className="h-24 p-2"
              src="/images/avatars/avatar-1.png"
              alt="Avatar"
              width={96}
              height={96}
              loading="lazy"
            />
          </li>
          <li>
            <Image
              className="h-24 p-2"
              src="/images/avatars/avatar-1.png"
              alt="Avatar"
              width={96}
              height={96}
              loading="lazy"
            />
          </li>
          <li>
            <Image
              className="h-24 p-2"
              src="/images/avatars/avatar-1.png"
              alt="Avatar"
              width={96}
              height={96}
              loading="lazy"
            />
          </li>
          <li>
            <Image
              className="h-24 p-2"
              src="/images/avatars/avatar-1.png"
              alt="Avatar"
              width={96}
              height={96}
              loading="lazy"
            />
          </li>
          <li>
            <Image
              className="h-24 p-2"
              src="/images/avatars/avatar-1.png"
              alt="Avatar"
              width={96}
              height={96}
              loading="lazy"
            />
          </li>
        </InfiniteScroller>
      </Fade>
    </div>
  );
};