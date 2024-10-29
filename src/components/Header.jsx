"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  return (
    <header className="relative">
      <Image
        src={`/images/world-procurement-award.png`}
        alt="YCP Auctus"
        height={700}
        width={400}
        className="absolute top-0 right-0 z-10 w-auto rounded-lg h-36 lg:h-72"
      />
      <Image
        src={`/images/header-background.jpg`}
        alt="YCP Auctus"
        fill={true}
        priority
        style={{
          objectFit: "cover",
        }}
      />
      <div className="relative max-w-6xl px-4 pt-40 mx-auto text-white pb-44 lg:py-64 2xl:max-w-7xl">
        <h1 className="text-6xl lg:text-[110px] leading-none">YCP Consus</h1>
        <p className="mt-0 text-lg font-light lg:mt-5 lg:text-2xl">
          Your trusted global supply chain solutions provider
        </p>
        <button
          type="button"
          onClick={() =>
            gsap.to(window, { duration: 1, scrollTo: "#our-expertise" })
          }
          className="text-sm inline-flex lg:text-base items-center space-x-2.5 lg:space-x-3.5 mt-6 lg:mt-10"
        >
          <span className="text-white">Explore More</span>
          <span className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full lg:w-12 lg:h-12 bg-gradient-to-r from-blue-400 to-blue-600">
            <ArrowRight weight="bold" />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
