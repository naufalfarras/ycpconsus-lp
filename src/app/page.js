import ExpertiseTab from "@/components/ExpertiseTab";
import FeaturedArticle from "@/components/FeaturedArticle";
import Header from "@/components/Header";
import LatestArticles from "@/components/LatestArticles";
import Maps from "@/components/Maps";
import {
  getExpertises,
  getLatestCaseStudies,
  getLatestInsights,
  getLatestWhitepapers,
} from "@/lib/api";

import { metadataBase } from "@/app/shared-metadata.js";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  metadataBase,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "YCP Consus | Supply Chain Advisory and Consulting Firm",
  description:
    "Consus, YCP's consulting platform, offers integrated solutions for business success. Elevate your strategy with Consus's comprehensive consulting services.",
  keywords: ["ycp consus", "supply chain advisory", "supply chain consulting"],
};

export default async function Home() {
  const [expertises, latestCaseStudies, latestInsights, latestWhitepapers] =
    await Promise.all([
      getExpertises(),
      getLatestCaseStudies(),
      getLatestInsights(),
      getLatestWhitepapers(),
    ]);
  return (
    <main>
      <Header />
      <section className="relative z-10 max-w-6xl px-4 mx-auto -mt-32 lg:-mt-20 2xl:max-w-7xl">
        <p className="mb-3 text-xs font-light tracking-wide lg:mb-4 lg:text-sm text-white/70">{`*YCP Consus, previously operated as Consus Global, has been awarded the World's Best Procurement Consultancy Project by Procurement Leaders`}</p>
        <div className="grid px-4 py-4 text-center text-white rounded-md shadow-md gap-y-2 lg:gap-y-0 lg:divide-x lg:px-0 lg:py-6 lg:grid-cols-5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 divide-white/20">
          <div className="flex items-center justify-between lg:block gap-x-4 lg:gap-x-0">
            <p className="text-3xl lg:text-[40px] font-semibold leading-none">
              100+
            </p>
            <span className="flex-1 h-px bg-white/20 lg:hidden"></span>
            <p className="text-sm lg:text-base">Category Experts</p>
          </div>
          <div className="flex items-center justify-between lg:block gap-x-4 lg:gap-x-0">
            <p className="text-3xl lg:text-[40px] font-semibold leading-none">
              250K+
            </p>
            <span className="flex-1 h-px bg-white/20 lg:hidden"></span>
            <p className="text-sm lg:text-base">Validated Suppliers</p>
          </div>
          <div className="flex items-center justify-between lg:block gap-x-4 lg:gap-x-0">
            <p className="text-3xl lg:text-[40px] font-semibold leading-none">
              20+
            </p>
            <span className="flex-1 h-px bg-white/20 lg:hidden"></span>
            <p className="text-sm lg:text-base">Countries Deployed</p>
          </div>
          <div className="flex items-center justify-between lg:block gap-x-4 lg:gap-x-0">
            <p className="text-3xl lg:text-[40px] font-semibold leading-none">
              $10B+
            </p>
            <span className="flex-1 h-px bg-white/20 lg:hidden"></span>
            <p className="text-sm lg:text-base">Spend Managed</p>
          </div>
          <div className="flex items-center justify-between lg:block gap-x-4 lg:gap-x-0">
            <p className="text-3xl lg:text-[40px] font-semibold leading-none">
              $2B
            </p>
            <span className="flex-1 h-px bg-white/20 lg:hidden"></span>
            <p className="text-sm lg:text-base">Procurement Savings</p>
          </div>
        </div>
      </section>
      <section>
        {latestWhitepapers && (
          <div className="max-w-6xl px-4 mx-auto py-14 lg:py-20 2xl:max-w-7xl">
            <h2 className="text-3xl tracking-tight text-center lg:text-6xl">
              New White Paper
            </h2>
            <div className="mt-4 lg:mt-8">
              <div className="grid items-center grid-cols-6 gap-4 p-2 border rounded-lg bg-gray-50">
                <div className="col-span-2 lg:col-span-1 relative aspect-[595/841] rounded-md">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${latestWhitepapers.thumbnail.url}`}
                    alt={latestWhitepapers.thumbnail.alternativeText}
                    fill={true}
                    style={{
                      objectFit: "cover",
                    }}
                    className="rounded-lg"
                  />
                </div>
                <div className="col-span-4 lg:p-5 lg:col-span-3">
                  {latestWhitepapers.industry && (
                    <span className="inline-block px-2.5 lg:px-3 py-1 lg:py-1.5 text-[10px] lg:text-[11px] leading-none text-white uppercase rounded-full bg-brand-primary">
                      {latestWhitepapers.industry.name}
                    </span>
                  )}
                  <h3 className="mt-2 text-lg leading-tight line-clamp-3 lg:mt-4 font-heading lg:text-3xl">
                    {latestWhitepapers.title}
                  </h3>
                  <div className="hidden lg:block">
                    <p className="mt-3 text-base line-clamp-2">
                      {latestWhitepapers.description}
                    </p>
                  </div>
                  <Link
                    href={`/whitepapers/${latestWhitepapers.slug}`}
                    className="text-sm inline-flex items-center lg:text-base space-x-2.5 lg:space-x-3.5 mt-3 lg:mt-4"
                  >
                    <span>Read Whitepaper</span>
                    <span className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full lg:w-12 lg:h-12 bg-gradient-to-r from-blue-400 to-blue-600">
                      <ArrowRight weight="bold" />
                    </span>
                  </Link>
                </div>
                {latestWhitepapers.supporting_image.map((image, index) => (
                  <div
                    className="hidden lg:block relative aspect-[595/841] rounded-md"
                    key={index}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${image.url}`}
                      alt={image.alternativeText}
                      fill={true}
                      style={{
                        objectFit: "cover",
                      }}
                      className="rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
      <section id="our-expertise">
        <div className="max-w-6xl px-4 mx-auto lg:py-20 2xl:max-w-7xl">
          <ExpertiseTab expertises={expertises.data} />
        </div>
      </section>
      <section>
        <div className="max-w-6xl px-4 mx-auto pt-14 lg:pt-20 2xl:max-w-7xl">
          <h2 className="text-3xl tracking-tight text-center lg:text-6xl">
            Global Presence
          </h2>
        </div>
        <div className="mt-5">
          <Maps />
        </div>
      </section>
      <section>
        <LatestArticles
          title="Case Study"
          data={latestCaseStudies.data}
          type="case-studies"
        />
      </section>
      <section>
        <div className="flex items-center max-w-6xl px-4 mx-auto mb-3 space-x-4 lg:mt-20 2xl:max-w-7xl lg:mb-8">
          <h2 className="text-3xl tracking-tight lg:text-6xl">
            Latest Insights
          </h2>
          <span className="flex-1 border-t"></span>
        </div>
        <div className="mb-8 lg:mb-16">
          <FeaturedArticle type="insights" data={latestInsights.data} />
        </div>
      </section>
      <div id="contact-us" className="my-20">
        <ContactCTA title="Contact Us" />
      </div>
    </main>
  );
}
