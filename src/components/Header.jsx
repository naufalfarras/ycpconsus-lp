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
      <div className="relative max-w-6xl px-4 pt-40 pb-5 mx-auto text-white lg:pt-56 2xl:max-w-7xl">
        <h1 className="text-6xl lg:text-[110px] leading-none">YCP Consus</h1>
        <p className="mt-0 text-lg font-light lg:mt-5 lg:text-2xl">
          Your trusted global supply chain solutions provider
        </p>
        {/* <button
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
        </button> */}

        <div className="mt-10">
          <div className="grid max-w-3xl px-4 py-4 text-center text-white rounded-md shadow-md gap-y-2 lg:gap-y-0 lg:divide-x lg:px-0 lg:py-6 lg:grid-cols-5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 divide-white/20">
            <div className="flex items-center justify-between lg:block gap-x-4 lg:gap-x-0">
              <p className="text-3xl font-semibold leading-none">100+</p>
              <span className="flex-1 h-px bg-white/20 lg:hidden"></span>
              <p className="text-sm lg:mt-1">Category Experts</p>
            </div>
            <div className="flex items-center justify-between lg:block gap-x-4 lg:gap-x-0">
              <p className="text-3xl font-semibold leading-none">250K+</p>
              <span className="flex-1 h-px bg-white/20 lg:hidden"></span>
              <p className="text-sm lg:mt-1">Validated Suppliers</p>
            </div>
            <div className="flex items-center justify-between lg:block gap-x-4 lg:gap-x-0">
              <p className="text-3xl font-semibold leading-none">20+</p>
              <span className="flex-1 h-px bg-white/20 lg:hidden"></span>
              <p className="text-sm lg:mt-1">Countries Deployed</p>
            </div>
            <div className="flex items-center justify-between lg:block gap-x-4 lg:gap-x-0">
              <p className="text-3xl font-semibold leading-none">$10B+</p>
              <span className="flex-1 h-px bg-white/20 lg:hidden"></span>
              <p className="text-sm lg:mt-1">Spend Managed</p>
            </div>
            <div className="flex items-center justify-between lg:block gap-x-4 lg:gap-x-0">
              <p className="text-3xl font-semibold leading-none">$2B</p>
              <span className="flex-1 h-px bg-white/20 lg:hidden"></span>
              <p className="text-sm lg:mt-1">Procurement Savings</p>
            </div>
          </div>
          <p className="mt-20 text-xs font-light tracking-wide lg:mb-4 lg:text-sm text-white/70">{`*YCP Consus, previously operated as Consus Global, has been awarded the World's Best Procurement Consultancy Project by Procurement Leaders`}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
