import ApplyJobForm from "@/components/ApplyJobForm";
import Breadcrumb from "@/components/Breadcrumb";
import { getJobPositions } from "@/lib/api";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { metadataBase } from "@/app/shared-metadata.js";

export const metadata = {
  metadataBase,
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Career Opportunities",
  description:
    "Join our diverse team of talented and motivated professionals who come together to create real value for our customers.",
  keywords: ["career", "opportunity"],
};

const Careers = async () => {
  const positions = await getJobPositions();
  const pages = [{ name: "Careers", href: "#", current: true }];
  const values = [
    {
      image:
        "https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Accountability",
    },
    {
      image:
        "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Diversity",
    },
    {
      image:
        "https://images.pexels.com/photos/5324986/pexels-photo-5324986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Excellence",
    },
    {
      image:
        "https://images.pexels.com/photos/12955643/pexels-photo-12955643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Integrity",
    },
    {
      image:
        "https://images.pexels.com/photos/6146702/pexels-photo-6146702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Quality",
    },
  ];
  return (
    <>
      <Breadcrumb pages={pages} />
      <section className="relative overflow-hidden bg-white">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          />
        </svg>
        <div className="items-center max-w-6xl px-4 mx-auto 2xl:max-w-7xl lg:flex lg:py-20">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
            <h1 className="text-4xl tracking-tight sm:text-7xl">
              Work at <br /> YCP Consus
            </h1>
            <p className="mt-5 text-xl">
              Join our diverse team of talented and motivated professionals who
              come together to create real value for our customers.
            </p>
            <p className="mt-5 text-lg">
              {" "}
              {`With the increasing importance of supply chain management in
                today's interconnected world, you'll be well-positioned to
                explore varying roles. A career at YCP Consus can open doors to
                a world of possibilities.`}
            </p>
            <Link
              href={"#apply-form"}
              className="inline-flex items-center space-x-3.5 mt-10"
            >
              <span className="translate-y-1">Apply Now</span>
              <span className="inline-flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-600">
                <ArrowRight weight="bold" />
              </span>
            </Link>
          </div>
          <div className="flex max-w-2xl mx-auto mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
              <div className="relative p-2 -m-2 aspect-[16/8] rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src="https://images.pexels.com/photos/7580709/pexels-photo-7580709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Work at YCP Consus"
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative border-y">
        <Image
          src={`/images/case_background.jpg`}
          alt={`case background consus`}
          fill
          className="object-cover"
        />
        <div className="relative max-w-6xl px-4 py-16 mx-auto 2xl:max-w-7xl">
          <h2 className="text-4xl tracking-tight text-center lg:text-5xl">
            What We Uphold at YCP Consus
          </h2>
          <div className="grid grid-cols-5 gap-4 mt-8">
            {values.map((value, index) => (
              <div
                className="relative rounded-lg overflow-hidden aspect-[3/4] flex flex-col justify-end items-center text-center text-white p-3"
                key={index}
              >
                <Image
                  src={value.image}
                  alt="Work at YCP Consus"
                  fill
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-brand-lightblue via-transparent to-transparent"></span>
                <p className="relative text-2xl font-medium">{value.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-24 overflow-hidden">
        <div className="max-w-6xl px-4 mx-auto 2xl:max-w-7xl">
          <div className="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
            <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="pt-24 lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-4xl tracking-tight lg:text-5xl">
                  Beyond YCP Consus
                </h2>
                <p className="mt-6 text-lg">
                  Join our team of passionate professionals and make a
                  difference in the world. Explore open positions and start your
                  journey with YCP Consus today.
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="flex-auto w-0 lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <img
                    src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="flex self-end justify-end flex-none order-first w-64 lg:w-auto">
                    <img
                      src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex justify-end flex-auto w-96 lg:w-auto lg:flex-none">
                    <img
                      src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <img
                      src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="apply-form" className="max-w-3xl px-4 mx-auto mb-16">
        <h2 className="text-4xl tracking-tight text-center lg:text-5xl">
          Join YCP Consus
        </h2>
        <ApplyJobForm positions={positions} />
      </div>
    </>
  );
};

export default Careers;
