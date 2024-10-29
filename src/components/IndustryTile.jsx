"use client";

import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const IndustryTile = ({ data }) => {
  return (
    <Link
      href={`/industries/${data.slug}`}
      className="flex flex-col justify-between p-6 bg-white border shadow-sm rounded-xl hover:bg-gradient-to-tr from-blue-400 to-blue-600 hover:text-white group"
    >
      <div>
        <p className="text-xl tracking-tight lg:leading-tight lg:text-2xl font-heading">
          {data.name}
        </p>
        <p className="pt-3 mt-1 text-base border-t opacity-80 group-hover:border-white/20">
          {data.description}
        </p>
      </div>
      <p className="inline-flex items-start mt-5 space-x-3 text-base text-brand-lightblue group-hover:text-white">
        <span>Learn More</span>
        <ArrowRight className="translate-y-0.5" />
      </p>
    </Link>
  );
};

export default IndustryTile;
