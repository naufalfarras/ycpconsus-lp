"use client";

import gsap from "gsap";
import React from "react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#011C43]">
      <svg
        className="absolute top-0 h-full -translate-x-1/2 lg:h-48 left-1/2"
        viewBox="0 0 1183 187"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.8" filter="url(#filter0_f_43_471)">
          <path
            d="M362.3 221.218C652.468 177.021 702.734 164.787 926.438 168.575C1150.14 172.362 821.346 25.1648 641.516 -52.2161C461.686 -129.597 286.479 -154.437 249.638 -103.013C212.798 -51.5899 72.1318 265.415 362.3 221.218Z"
            fill="url(#paint0_linear_43_471)"
          />
          <path
            d="M362.3 221.218C652.468 177.021 702.734 164.787 926.438 168.575C1150.14 172.362 821.346 25.1648 641.516 -52.2161C461.686 -129.597 286.479 -154.437 249.638 -103.013C212.798 -51.5899 72.1318 265.415 362.3 221.218Z"
            fill="url(#paint1_linear_43_471)"
            fillOpacity="0.4"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_43_471"
            x="0.51268"
            y="-312.616"
            width="1183.83"
            height="720.655"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="91.3042"
              result="effect1_foregroundBlur_43_471"
            />
          </filter>
          <linearGradient
            id="paint0_linear_43_471"
            x1="452.856"
            y1="-100.754"
            x2="454.894"
            y2="141.988"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="0.455" stopColor="white" stopOpacity="0.425" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_43_471"
            x1="489.238"
            y1="-79.6703"
            x2="525.38"
            y2="226.866"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#26E5F1" />
            <stop offset="0.406551" stopColor="#0057FF" />
            <stop offset="0.920519" stopColor="#0057FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative flex flex-col items-center justify-center max-w-6xl px-4 py-8 mx-auto text-center text-white lg:py-16 lg:text-left lg:justify-between lg:flex-row 2xl:max-w-7xl">
        <p className="mb-4 text-lg leading-snug lg:text-2xl lg:mb-0">
          Contact us and see how our industry expertise can help you{" "}
          <br className="hidden lg:block" /> achieve your business goals.
        </p>
        <button
          type="button"
          onClick={() =>
            gsap.to(window, { duration: 1, scrollTo: "#contact-us" })
          }
          className="inline-flex px-10 py-4 text-xl font-medium leading-none text-white transition rounded-lg bg-brand-lightblue hover:bg-blue-500"
        >
          Get in Touch
        </button>
      </div>
    </section>
  );
}
