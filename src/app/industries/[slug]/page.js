// "use client";
import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import LatestArticles from "@/components/LatestArticles";
import { getIndustryDetail } from "@/lib/api";
import Image from "next/image";

export async function generateMetadata({ params }, parent) {
  const data = await getIndustryDetail(params.slug);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_LIVE_URL),
    alternates: {
      canonical: `/industries/${params.slug}`,
    },
    openGraph: {
      images: `${process.env.NEXT_PUBLIC_BASE_URL}${data.thumbnail.url}?width=1200&height=630`,
    },
    title: data.meta_title,
    description: data.meta_description,
    keywords: data.keywords,
  };
}

const IndustryDetail = async ({ params }) => {
  const industry = await getIndustryDetail(params.slug);
  const featuredReads = industry.insights
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);
  const pages = [
    { name: "Industries", href: "/industries", current: false },
    { name: industry.name, href: "#", current: true },
  ];

  return (
    <>
      <Breadcrumb pages={pages} />
      <section className="relative overflow-hidden bg-white isolate">
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
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-white rounded-full bg-brand-lightblue">
              {industry.name}
            </span>
            <h1 className="mt-5 text-4xl tracking-tight sm:text-6xl">
              {industry.overview_title}
            </h1>
            <p className="mt-6 text-lg">{industry.overview_description}</p>
          </div>
          <div className="flex w-full max-w-2xl mx-auto mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="flex-none w-full max-w-3xl sm:max-w-5xl lg:max-w-none">
              <div className="relative aspect-[16/7] rounded-xl lg:rounded-2xl overflow-hidden ring-[12px] ring-gray-900/[0.04] shadow-2xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${industry.thumbnail.url}?height=1000?format=webp`}
                  alt={industry.overview_title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 border-gray-200 border-y bg-gray-50">
        <div className="px-4 mx-auto 2xl:max-w-7xl ">
          <h2 className="text-4xl tracking-tight lg:text-6xl">What We Do</h2>
          <div className="grid grid-cols-1 mt-12 lg:grid-cols-2 gap-x-8 gap-y-6 lg:gap-y-12">
            {industry.offering.map((item, index) => (
              <div key={index}>
                <p className="text-xl leading-tight tracking-tight font-heading lg:text-2xl">
                  {item.title}
                </p>
                <p className="pt-4 mt-2 border-t border-gray-300 opacity-70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {industry.experts.length > 0 && (
        <section>
          <div className="max-w-6xl px-4 pt-12 mx-auto 2xl:max-w-7xl lg:py-20">
            <h2 className="text-4xl tracking-tight text-center lg:text-6xl">
              Meet The Industry Experts
            </h2>
            <div className="grid grid-cols-1 gap-8 mt-10 lg:mt-14 lg:text-center lg:gap-16 lg:grid-cols-4">
              {industry.experts.map((expert, index) => (
                <div className="flex lg:block" key={index}>
                  <div className="w-[120px] relative aspect-square lg:w-auto">
                    <span className="absolute inset-0 w-full h-full translate-x-2 -translate-y-2 rounded bg-brand-lightblue lg:translate-x-3 lg:-translate-y-3 lg:rounded-xl"></span>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BASE_URL}${expert.portrait.url}`}
                      alt={expert.name}
                      fill
                      sizes="(max-width: 640px) 100w, 280w"
                      className="object-cover rounded lg:rounded-xl"
                    />
                  </div>
                  <div className="flex-1 ml-8 lg:ml-0">
                    <h3 className="mt-4 text-2xl">{expert.name}</h3>
                    <p className="text-sm text-blue-800 lg:mt-1">
                      {expert.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {industry.insights.length > 0 && (
        <LatestArticles
          title="Featured Reads"
          data={featuredReads}
          type="insights"
          showTag={false}
        />
      )}
      <div id="contact-us" className="my-20">
        <ContactCTA title="Want to know more about Industry Coverage?" />
      </div>
    </>
  );
};

export default IndustryDetail;
