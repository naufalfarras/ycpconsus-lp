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
      <div className="relative max-w-6xl px-4 pt-56 pb-5 mx-auto text-white 2xl:max-w-7xl">
        <h1 className="text-6xl lg:text-[110px] leading-none">YCP Consus</h1>
        <p className="mt-0 text-lg font-light lg:mt-5 lg:text-2xl">
          Your trusted global supply chain solutions provider
        </p>

        <div className="mt-10">
          <div className="inline-grid w-auto max-w-3xl grid-cols-2 px-4 py-4 text-center text-white rounded-md shadow-md lg:grid gap-y-2 lg:gap-y-0 lg:divide-x lg:px-0 lg:py-6 lg:grid-cols-5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 divide-white/20">
            <div className="block">
              <p className="text-2xl font-semibold leading-none lg:text-3xl">
                100+
              </p>
              <p className="text-xs lg:text-sm lg:mt-1">Category Experts</p>
            </div>
            <div className="block">
              <p className="text-2xl font-semibold leading-none lg:text-3xl">
                250K+
              </p>
              <p className="text-xs lg:text-sm lg:mt-1">Validated Suppliers</p>
            </div>
            <div className="hidden lg:block">
              <p className="text-2xl font-semibold leading-none lg:text-3xl">
                20+
              </p>
              <p className="text-xs lg:text-sm lg:mt-1">Countries Deployed</p>
            </div>
            <div className="hidden lg:block">
              <p className="text-2xl font-semibold leading-none lg:text-3xl">
                $10B+
              </p>
              <p className="text-xs lg:text-sm lg:mt-1">Spend Managed</p>
            </div>
            <div className="hidden lg:block">
              <p className="text-2xl font-semibold leading-none lg:text-3xl">
                $2B
              </p>
              <p className="text-xs lg:text-sm lg:mt-1">Procurement Savings</p>
            </div>
          </div>
          <div className="inline-grid w-auto max-w-3xl grid-cols-3 px-4 py-4 mt-4 text-center text-white rounded-md shadow-md lg:hidden gap-y-2 lg:gap-y-0 lg:divide-x lg:px-0 lg:py-6 lg:grid-cols-5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 divide-white/20">
            <div>
              <p className="text-2xl font-semibold leading-none lg:text-3xl">
                20+
              </p>
              <p className="text-xs lg:text-sm lg:mt-1">Countries Deployed</p>
            </div>
            <div>
              <p className="text-2xl font-semibold leading-none lg:text-3xl">
                $10B+
              </p>
              <p className="text-xs lg:text-sm lg:mt-1">Spend Managed</p>
            </div>
            <div>
              <p className="text-2xl font-semibold leading-none lg:text-3xl">
                $2B
              </p>
              <p className="text-xs lg:text-sm lg:mt-1">Procurement Savings</p>
            </div>
          </div>
          <p className="mt-6 text-xs font-light tracking-wide lg:mt-20 lg:mb-4 lg:text-sm text-white/70">{`*YCP Consus, previously operated as Consus Global, has been awarded the World's Best Procurement Consultancy Project by Procurement Leaders`}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
