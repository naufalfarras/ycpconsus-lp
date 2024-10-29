import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import FeaturedReads from "@/components/FeaturedReads";
import IndustryTile from "@/components/IndustryTile";
import { getIndustries } from "@/lib/api";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

import { metadataBase } from "@/app/shared-metadata.js";

export const metadata = {
  metadataBase,
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Our Industries Expertise",
  description:
    "Our procurement and supply chain management solutions are designed to meet the unique needs of a wide range of industries.",
  keywords: ["industries"],
};

const Industries = async () => {
  const industries = await getIndustries();
  const pages = [{ name: "Industries", href: "#", current: true }];
  return (
    <>
      <Breadcrumb pages={pages} />
      <div className="max-w-6xl px-4 pt-10 mx-auto lg:pt-20 2xl:max-w-7xl">
        <div className="max-w-4xl">
          <h1 className="text-4xl tracking-tight lg:text-6xl">
            Explore our Industry Coverage
          </h1>
          <p className="mt-4">
            Backed by years of expertise and knowledge across several
            industries, our professionals and their services can provide
            actionable insight and data-driven strategies that deliver
            high-impact results for your business growth
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden aspect-video lg:aspect-[9/2] rounded-r-3xl my-8 mr-8 lg:my-16">
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/global_businessman_holding_glowing_sphere_futuristic_communication_concepts_generated_by_ai_30aee5a659.jpg`}
          sizes="(max-width: 480px) 480w, 100vw"
          alt="Header Image"
          priority={true}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <section className="pb-10 lg:pb-20 bg-gradient-to-b from-white to-gray-100">
        <div className="grid grid-cols-1 gap-4 px-4 mx-auto lg:grid-cols-3 2xl:max-w-7xl">
          {industries.data.map((industry) => (
            <IndustryTile data={industry} key={industry.uuid} />
          ))}
        </div>
        <div id="contact-us" className="mt-10 lg:mt-20">
          <ContactCTA title="Want to know more about Supply Chain Turnarounds?" />
        </div>
      </section>
    </>
  );
};

export default Industries;
