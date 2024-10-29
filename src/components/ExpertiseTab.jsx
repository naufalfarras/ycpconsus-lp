"use client";
import { Tab } from "@headlessui/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const ExpertiseTab = ({ expertises }) => {
  return (
    <Tab.Group as={Fragment}>
      <div className="lg:flex">
        <div className="flex-1 lg:pt-16 lg:pr-10 lg:mr-10 lg:border-r">
          <h2 className="text-3xl text-center lg:text-left lg:text-6xl">
            <span className="italic text-brand-lightblue">Our</span>
            <br className="hidden lg:block" /> Expertise
          </h2>
          <Tab.List className="pt-6 -my-1.5 divide-y lg:-my-4 lg:pt-14">
            {expertises.map((expertise, index) => (
              <Tab as={Fragment} key={expertise.uuid}>
                {({ selected }) => (
                  <button
                    className={`text-left text-lg lg:text-3xl font-heading flex w-full py-1.5 lg:py-4 focus:outline-none justify-between ${
                      selected ? "text-brand-lightblue underline" : ""
                    }`}
                  >
                    <span>{expertise.name}</span>
                    <ArrowRight
                      className={`transition-transform ${
                        selected ? "rotate-[-45deg]" : "rotate-[45deg]"
                      }`}
                    />
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
        </div>
        <div className="flex-1 mt-6 lg:mt-0">
          <Tab.Panels>
            {expertises.map((expertise) => (
              <Tab.Panel key={expertise.uuid}>
                <div className="relative aspect-[16/9] rounded-md">
                  <span className="absolute bottom-0 right-0 hidden w-40 h-64 translate-x-5 translate-y-5 rounded-lg lg:block bg-brand-lightblue"></span>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${expertise.thumbnail.url}?height=600&format=webp`}
                    alt={expertise.name}
                    fill={true}
                    sizes="(max-width: 768px) 100vw, 584px"
                    className="object-cover rounded-lg"
                  />
                </div>
                <p className="mt-4 text-2xl lg:text-3xl lg:mt-7 font-heading">
                  {expertise.name}
                </p>
                <p className="mt-2 lg:mt-4">{expertise.overview_description}</p>
                <Link
                  href={`/expertise/${expertise.slug}`}
                  className="inline-flex text-sm lg:text-base items-center space-x-2.5 lg:space-x-3.5 mt-4 lg:mt-5"
                >
                  <span>Learn More</span>
                  <span className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full lg:w-12 lg:h-12 bg-gradient-to-r from-blue-400 to-blue-600">
                    <ArrowRight weight="bold" />
                  </span>
                </Link>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </div>
    </Tab.Group>
  );
};

export default ExpertiseTab;
