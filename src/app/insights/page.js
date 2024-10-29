import FeaturedArticle from "@/components/FeaturedArticle";
import { getInsights } from "@/lib/api";
import formatDate from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import { metadataBase } from "@/app/shared-metadata.js";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  metadataBase,
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Read Our Insights",
  description:
    "Stay informed about the world's most pressing economic, industrial, and business challenges with our insightful and comprehensive analysis.",
  keywords: ["insights", "article"],
};

const Insights = async () => {
  const insights = await getInsights();
  return (
    <div className="py-20">
      <div className="max-w-6xl px-4 mx-auto mb-10 2xl:max-w-7xl">
        <h1 className="text-4xl tracking-tight sm:text-6xl">
          In-depth perspectives, analysis, and expertise from our team.
        </h1>
      </div>
      <FeaturedArticle type="insights" data={insights.data.slice(0, 4)} />
      {insights.data.length > 4 && (
        <div className="grid max-w-6xl grid-cols-1 px-4 mx-auto mt-20 divide-y 2xl:max-w-7xl lg:grid-cols-3 gap-x-8 lg:gap-y-16 lg:divide-y-0">
          {insights.data.slice(4).map((item) => (
            <Link
              href={`/insights/${item.slug}`}
              className="flex items-center py-4 space-x-5 lg:block group lg:space-x-0 lg:py-0"
              key={item.uuid}
            >
              <div className="w-[100px] lg:w-full relative aspect-square lg:aspect-[16/9] rounded-lg overflow-hidden lg:rounded-tl-3xl lg:rounded-br-3xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.thumbnail.url}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {item.industry && (
                  <span className="absolute left-0 inline-flex px-2.5 py-0.5 text-xs font-medium tracking-wide text-white uppercase shadow-lg rounded-r-full top-3 bg-brand-lightblue">
                    <span className="translate-y-0.5">
                      {item.industry.name}
                    </span>
                  </span>
                )}
              </div>
              <div className="flex-1">
                <div className="inline-flex mt-4 space-x-2 text-xs">
                  <span className="tracking-wide text-blue-800 uppercase">
                    {formatDate(item.publishedAt)}
                  </span>
                  <span>&bull;</span>
                  <span>by {item.author.name}</span>
                </div>
                <h3 className="mt-1 text-xl leading-tight group-hover:underline">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div id="contact-us" className="mt-20">
        <ContactCTA title="Contact Us" />
      </div>
    </div>
  );
};

export default Insights;
