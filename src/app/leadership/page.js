import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
import { getExpertises, getExpertiseCategories, getTeams } from "@/lib/api";

import { metadataBase } from "@/app/shared-metadata.js";
import Offices from "@/components/Offices";

const values = [
  {
    image:
      "https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Supply Chain Advisory",
  },
  {
    image:
      "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Procurement Solutions",
  },
];

export const metadata = {
  metadataBase,
  alternates: {
    canonical: "/leadership",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Meet Our Leadership Team",
  description: "Our Leadership",
  keywords: ["ycp consus", "leadership"],
};

export default async function Leadership() {
  const [teams] = await Promise.all([getTeams()]);
  const pages = [{ name: "Leadership", href: "#", current: true }];
  return (
    <>
      <Breadcrumb pages={pages} />
      <div className="max-w-6xl px-4 pt-10 mx-auto lg:pt-20 2xl:max-w-7xl">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl">Meet Our Leadership Team</h1>
          <p className="mt-4">
            At YCP Consus, our leadership comprises a diverse roster of seasoned
            professionals who leverage their industry know-how to achieve
            transformative growth for clients across Asia and beyond.
          </p>
        </div>
      </div>
      <section className="max-w-6xl px-4 mx-auto 2xl:max-w-7xl">
        <div className="grid flex-1 grid-cols-1 mt-8 lg:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-12">
          {teams.map((team, index) => (
            <div className="flex items-center space-x-6" key={index}>
              <div className="w-1/4 lg:w-1/3 relative aspect-[3/4] border rounded lg:rounded-lg overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${team.image.url}`}
                  alt={team.image.alternativeText}
                  fill
                  sizes="(max-width: 640px) 100w, 280w"
                  className="object-cover w-full"
                />
              </div>
              <div className="flex-1 ml-6 lg:ml-0">
                <h3 className="text-2xl lg:mt-6 lg:text-3xl">{team.name}</h3>
                <p className="text-sm leading-tight text-blue-800 lg:mt-0.5">
                  {team.position}
                </p>
                <p className="pl-3 text-base leading-tight border-l-[3px] mt-3 lg:mt-4 border-brand-lightblue">
                  {team.biography}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl px-4 py-16 mx-auto lg:py-24 2xl:max-x-7xl">
        <h2 className="text-2xl tracking-tight text-center lg:text-5xl">
          YCP Consus has been consistently recognized by leading industry forums
          and procurement leaders for its expertise and innovation in supply
          chain solutions.
        </h2>
        <Image
          src={`/images/consus-awards.png`}
          width={1000}
          height={1000}
          alt=""
          className="mx-auto mt-6 lg:mt-8"
        />
      </div>
      <div className="bg-gray-100">
        <div className="max-w-6xl px-4 pt-16 mx-auto lg:pt-24 2xl:max-x-7xl">
          <h2 className="text-4xl tracking-tight text-center lg:text-5xl">
            Our Expertise
          </h2>
          <div className="grid gap-4 mt-10 lg:grid-cols-2">
            {values.map((value, index) => (
              <div
                className="relative flex flex-col items-center justify-end p-3 overflow-hidden text-center text-white rounded-lg aspect-video"
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
      <div className="pt-16 bg-gray-100 pb-28 lg:pb-36 lg:pt-36">
        <Offices />
      </div>
      <div id="contact-us" className="mb-16 -mt-16">
        <ContactCTA title="Ready to Talk?" />
      </div>
    </>
  );
}
