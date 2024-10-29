import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import DownloadWhitepaper from "@/components/DownloadWhitepaper";
import Offices from "@/components/Offices";
import { getWhitepaperDetail } from "@/lib/api";
import formatDate from "@/lib/formatDate";
import Image from "next/image";

export async function generateMetadata({ params }, parent) {
  const data = await getWhitepaperDetail(params.slug);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_LIVE_URL),
    alternates: {
      canonical: `/whitepapers/${params.slug}`,
    },
    openGraph: {
      images: `${process.env.NEXT_PUBLIC_BASE_URL}${data.thumbnail.url}?width=1200&height=630`,
    },
    title: data.title,
  };
}

const InsightDetail = async ({ params }) => {
  const data = await getWhitepaperDetail(params.slug);
  var contents = data.body.replace(
    /(https?:\/\/[^\/]+\/uploads\/)/g,
    `${process.env.NEXT_PUBLIC_BASE_URL}/uploads/`
  );
  const pages = [
    { name: "White Papers", href: "/whitepapers", current: false },
    { name: data.title, href: "#", current: true },
  ];
  return (
    <>
      <Breadcrumb pages={pages} />
      <div className="pb-20">
        <div className="relative py-12 lg:py-16 bg-slate-100">
          <Image
            src={`/images/background_footer.svg`}
            alt="Graphic"
            fill
            className="object-cover scale-x-[-1]"
          />
          <div className="flex items-center max-w-6xl px-4 mx-auto gap-x-16">
            <div className="w-1/4 relative aspect-[595/841] overflow-hidden lg:rounded-2xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.thumbnail.url}`}
                alt={data.thumbnail.alternativeText}
                priority
                fill
                className="object-cover"
              />
            </div>
            <div className="relative flex-1">
              <div className="flex mb-3 lg:mb-6">
                <span className="bg-gradient-to-r from-blue-400 uppercase tracking-wider to-blue-800 rounded-full text-white font-medium text-[10px] lg:text-xs px-2.5 inline-flex lg:py-1 leading-0">
                  <span>White Papers</span>
                </span>
              </div>
              <h1 className="max-w-4xl mx-auto text-3xl lg:text-6xl">
                {data.title}
              </h1>
              <div className="flex mt-3 lg:mt-5 space-x-2.5 text-sm">
                <span className="tracking-wide text-blue-800 uppercase">
                  {formatDate(data.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="max-w-4xl px-4 pb-8 mx-auto mt-8 prose prose-lg border-b lg:mt-16 lg:mb-16 lg:pb-16"
          dangerouslySetInnerHTML={{ __html: contents }}
        ></div>
        <div className="max-w-2xl px-4 mx-auto">
          <p className="text-4xl font-medium tracking-tight text-center font-heading">
            Download Whitepaper
          </p>
          <DownloadWhitepaper whitepaper={data.whitepaper} />
        </div>
      </div>
      <div id="contact-us" className="mb-20">
        <ContactCTA title="Contact Us" />
      </div>
    </>
  );
};

export default InsightDetail;
