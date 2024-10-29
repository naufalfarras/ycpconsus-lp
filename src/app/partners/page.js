import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
import {
  getExpertises,
  getExpertiseCategories,
  getTeams,
  getPartners,
  getLatestInsights,
} from "@/lib/api";

import { metadataBase } from "@/app/shared-metadata.js";
import Offices from "@/components/Offices";
import FeaturedArticle from "@/components/FeaturedArticle";
import ContactForm from "@/components/ContactForm";

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
    canonical: "/partners",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Our Partner Companies",
  description: "Our Partners",
  keywords: ["ycp consus", "partnership"],
};

export default async function Leadership() {
  const [partners, latestInsights] = await Promise.all([
    getPartners(),
    getLatestInsights(),
  ]);
  const pages = [{ name: "Partners", href: "#", current: true }];
  return (
    <>
      <Breadcrumb pages={pages} />
      <div className="max-w-6xl px-4 pt-10 mx-auto lg:pt-20 2xl:max-w-7xl">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl">Our Partner Companies</h1>
          <p className="mt-4">
            Our extensive network includes partner companies worldwide that
            specialize across several areas in the global sourcing and
            procurement value chain, including sustainability, artificial
            intelligence, and digital innovation.
          </p>
        </div>
      </div>
      <section className="max-w-6xl px-4 mx-auto 2xl:max-w-7xl">
        <div className="grid flex-1 grid-cols-1 mt-8 lg:mt-12 lg:grid-cols-3 gap-x-8 gap-y-6 lg:gap-y-12">
          {partners.map((partner, index) => (
            <div className="" key={index}>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${partner.image.url}`}
                alt={partner.image.alternativeText}
                className="object-cover h-10 lg:h-14"
              />
              <p className="mt-4 text-base leading-tight lg:mt-7 border-brand-lightblue">
                {partner.description}
              </p>
              <Link
                href={partner.url}
                target="_blank"
                className="inline-block mt-3 text-base underline text-brand-lightblue"
              >
                {partner.url}
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="flex items-center max-w-6xl px-4 mx-auto mt-16 mb-3 space-x-4 lg:mt-20 2xl:max-w-7xl lg:mb-8">
          <h2 className="text-3xl tracking-tight lg:text-6xl">
            Latest Insights
          </h2>
          <span className="flex-1 border-t"></span>
        </div>
        <div className="mb-8 lg:mb-16">
          <FeaturedArticle type="insights" data={latestInsights.data} />
        </div>
      </section>
      <section id="contact-us" className="border-t">
        <div className="items-center max-w-6xl px-4 pt-10 mx-auto pb-14 2xl:max-w-7xl lg:flex lg:pt-20 lg:pb-32">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
            <h2 className="text-4xl tracking-tight lg:text-6xl">Contact Us</h2>
            <p className="mt-5">
              {`Get in touch with us today. We are always eager to help bring your
         vision to life.`}
            </p>
            <ContactForm />
          </div>
          <div className="hidden max-w-2xl mx-auto mt-16 lg:flex sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
              <div className="p-2 -m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/hand_holding_smart_phone_typing_text_message_generated_by_ai_54c724b850.jpg`}
                  alt="Contact Us"
                  width={832}
                  height={953}
                  className="w-[50rem] max-h-[60rem] rounded-md object-cover shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
