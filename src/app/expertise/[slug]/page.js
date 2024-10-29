import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import LatestArticles from "@/components/LatestArticles";
import { getExpertiseDetail } from "@/lib/api";
import Image from "next/image";

export async function generateMetadata({ params }, parent) {
  const data = await getExpertiseDetail(params.slug);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_LIVE_URL),
    alternates: {
      canonical: `/expertise/${params.slug}`,
    },
    openGraph: {
      images: `${process.env.NEXT_PUBLIC_BASE_URL}${data.thumbnail.url}?width=1200&height=630`,
    },
    title: data.meta_title,
    description: data.meta_description,
    keywords: data.keywords,
  };
}

const ExpertiseDetail = async ({ params }) => {
  const expertise = await getExpertiseDetail(params.slug);
  // Manual Sorting and Pick 3 Latest Item
  const featuredReads = expertise.case_studies
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);
  const pages = [
    { name: "Expertise", href: "/expertise", current: false },
    { name: expertise.name, href: "#", current: true },
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
        <div className="items-center max-w-6xl px-4 pt-8 mx-auto 2xl:max-w-7xl lg:flex lg:py-20">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-white rounded-full bg-brand-lightblue">
              {expertise.name}
            </span>
            <h1 className="mt-6 text-4xl tracking-tight sm:text-6xl">
              {expertise.overview_title}
            </h1>
            <p className="mt-5 text-lg">{expertise.overview_description}</p>
          </div>
          <div className="flex max-w-2xl mx-auto mt-10 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
              <div className="relative p-2 -m-2 aspect-video rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${expertise.thumbnail.url}?height=1000?format=webp`}
                  alt={expertise.overview_title}
                  width={1000}
                  height={1000}
                  className="object-cover w-full h-full rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 border-gray-200 lg:py-20 border-y bg-gray-50">
        <div className="grid grid-cols-1 px-4 mx-auto lg:grid-cols-3 2xl:max-w-7xl gap-x-8 gap-y-6 lg:gap-y-12">
          {expertise.scope.map((scope, index) => (
            <div key={index}>
              <p className="text-xl leading-tight tracking-tight font-heading lg:text-2xl">
                {scope.title}
              </p>
              <p className="pt-4 mt-2 border-t opacity-70">
                {scope.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="relative z-10 max-w-6xl px-4 py-10 mx-auto lg:py-20 2xl:max-w-7xl">
        <Image
          src={`/images/case_background.jpg`}
          alt={`case background consus`}
          fill
          className="object-cover"
        />
        <h2 className="relative text-4xl tracking-tight text-center lg:text-6xl">
          Why Work with Us
        </h2>
        <div className="relative grid grid-cols-1 py-6 mt-5 space-y-5 text-center text-white divide-x rounded-md shadow-md lg:py-8 lg:space-y-0 lg:grid-cols-5 lg:mt-9 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 divide-white/20">
          <div className="translate-y-1">
            <p className="text-3xl font-semibold leading-none">Up to 15%</p>
            <p className="text-base">Reduce Procurement Spend</p>
          </div>
          <div className="translate-y-1">
            <p className="text-3xl font-semibold leading-none">AI-Based</p>
            <p className="text-base">Spend Insights & Analytics</p>
          </div>
          <div className="translate-y-1">
            <p className="text-3xl font-semibold leading-none">200K+</p>
            <p className="text-base">Global Suppliers Access</p>
          </div>
          <div className="translate-y-1">
            <p className="text-3xl font-semibold leading-none">
              Best Practices
            </p>
            <p className="text-base">Across Industry Verticals</p>
          </div>
          <div className="translate-y-1">
            <p className="text-3xl font-semibold leading-none">20+ Countries</p>
            <p className="text-base">Global Presence</p>
          </div>
        </div>
      </div>
      {expertise.case_studies.length > 0 && (
        <LatestArticles
          title="Featured Reads"
          data={featuredReads}
          type="case-studies"
          showTag={false}
        />
      )}
      <div className="mb-10 lg:my-20">
        <ContactCTA title={`Want to know more about ${expertise.name}?`} />
      </div>
    </>
  );
};

export default ExpertiseDetail;
