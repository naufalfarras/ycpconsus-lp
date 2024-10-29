import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
import { getExpertises, getExpertiseCategories } from "@/lib/api";

import { metadataBase } from "@/app/shared-metadata.js";

export const metadata = {
  metadataBase,
  alternates: {
    canonical: "/expertise",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Our Services Expertise",
  description:
    "Our in-house experts unlock unrealized value with innovative supply chain solutions.",
  keywords: ["ycp consus", "our expertise"],
};

export default async function Expertise() {
  const [expertises, expertiseCategories] = await Promise.all([
    getExpertises(),
    getExpertiseCategories(),
  ]);
  const pages = [{ name: "Expertise", href: "#", current: true }];
  return (
    <>
      <Breadcrumb pages={pages} />
      <div className="max-w-6xl px-4 pt-10 mx-auto lg:pt-20 2xl:max-w-7xl">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-6xl">Our Expertise</h1>
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
          src={
            "https://images.unsplash.com/photo-1554381848-37fa45b4bf8e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          sizes="(max-width: 480px) 480w, 100vw"
          alt="Header Image"
          priority={true}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <section className="grid max-w-6xl grid-cols-1 px-4 mx-auto mb-8 2xl:max-w-7xl gap-x-16 gap-y-6 lg:gap-y-12 lg:mb-16">
        {expertiseCategories.data.map((category) => (
          <div key={category.uuid}>
            <h2 className="text-xl leading-tight lg:text-3xl">
              {category.name}
            </h2>
            <p className="pt-3">{category.description}</p>
            <ul className="grid gap-4 lg:grid-cols-3 pt-7">
              {expertises.data
                .filter(
                  (item) => item.expertise_category.uuid === category.uuid
                )
                .map((expertise) => (
                  <Link
                    href={`/expertise/${expertise.slug}`}
                    className="relative block overflow-hidden rounded-lg aspect-video group"
                    key={expertise.uuid}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${expertise.thumbnail.url}?height=400?format=webp`}
                      alt={expertise.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-brand-lightblue via-transparent to-transparent"></span>
                    <span className="absolute bottom-0 block px-4 pt-2 text-base font-medium text-center -translate-x-1/2 bg-white rounded-t-lg 2xl:pt-3 2xl:px-6 2xl:text-xl group-hover:text-brand-lightblue whitespace-nowrap left-1/2">
                      {expertise.name}
                    </span>
                  </Link>
                ))}
            </ul>
          </div>
        ))}
      </section>
      <section className="py-16 text-white lg:ml-8 rounded-l-3xl bg-gradient-to-tr from-blue-400 to-brand-lightblue">
        <div className="items-center max-w-6xl px-4 mx-auto lg:flex lg:-translate-x-4 gap-x-16 2xl:max-w-7xl">
          <div className="lg:w-1/2">
            <h3 className="text-5xl">
              YCP Consus <br /> Work with Clients
            </h3>
            <p className="mt-5">
              Dole Thailand sought to drive cost savings and transparency in
              their procurement functions.
            </p>
            <p className="mt-2">
              Our professionals implemented several solutions that streamlined
              procurement processes, expanded the supplier base, and reduced
              costs, ultimately bringing new levels of efficiency to their
              sourcing and procurement operations.
            </p>
          </div>
          <div className="mt-8 lg:w-1/2 lg:mt-0">
            <div className="overflow-hidden">
              <VideoPlayer
                url={"//www.youtube.com/embed/zQ-lG_LOzHE?si=NQ7JdBiH2o7FdXj8"}
              />
            </div>
          </div>
        </div>
      </section>
      <div id="contact-us" className="py-16">
        <ContactCTA title="Ready to Talk?" />
      </div>
    </>
  );
}
