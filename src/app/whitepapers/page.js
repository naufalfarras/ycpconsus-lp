import FeaturedArticle from "@/components/FeaturedArticle";
import { getInsights, getWhitepapers } from "@/lib/api";
import formatDate from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import { metadataBase } from "@/app/shared-metadata.js";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  metadataBase,
  alternates: {
    canonical: "/whitepapers",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Read Our White Papers",
  description:
    "Stay informed about the world's most pressing economic, industrial, and business challenges with our insightful and comprehensive analysis.",
  keywords: ["insights", "article"],
};

const Whitepapers = async () => {
  const whitepapers = await getWhitepapers();
  return (
    <div className="py-20">
      <div className="max-w-6xl px-4 mx-auto mb-10 2xl:max-w-7xl">
        <h1 className="text-4xl tracking-tight sm:text-6xl">White Papers</h1>
      </div>
      <div className="grid max-w-6xl grid-cols-1 px-4 mx-auto mt-10 divide-y 2xl:max-w-7xl lg:grid-cols-4 gap-x-8 lg:gap-y-16 lg:divide-y-0">
        {whitepapers.data.map((item) => (
          <Link
            href={`/whitepapers/${item.slug}`}
            className="flex items-center py-4 space-x-5 transition-transform lg:block group lg:space-x-0 lg:py-0 hover:scale-110"
            key={item.uuid}
          >
            <div className="w-[100px] lg:w-full relative aspect-square lg:aspect-[595/841] rounded-lg overflow-hidden lg:rounded-md">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.thumbnail.url}`}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
      <div id="contact-us" className="my-20">
        <ContactCTA title="Contact Us" />
      </div>
    </div>
  );
};

export default Whitepapers;
