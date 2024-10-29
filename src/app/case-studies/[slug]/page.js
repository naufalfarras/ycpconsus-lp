import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import LatestArticles from "@/components/LatestArticles";
import { getCaseStudyDetail, getExpertiseDetail } from "@/lib/api";
import formatDate from "@/lib/formatDate";
import Image from "next/image";

export async function generateMetadata({ params }, parent) {
  const data = await getCaseStudyDetail(params.slug);
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_LIVE_URL),
    alternates: {
      canonical: `/case-studies/${params.slug}`,
    },
    openGraph: {
      images: `${process.env.NEXT_PUBLIC_BASE_URL}${data.thumbnail.url}?width=1200&height=630`,
    },
    title: data.title,
  };
}

const CaseStudyDetail = async ({ params }) => {
  const data = await getCaseStudyDetail(params.slug);
  const cases = await getExpertiseDetail(data.expertise.slug);

  const relatedCaseStudies = cases.case_studies
    .filter((item) => item.uuid !== data.uuid)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 3);
  //   console.log(data);
  //   const body = data.content;
  //   var contents = body.replace(
  //     /\/uploads/g,
  //     `${process.env.NEXT_PUBLIC_BASE_URL}/uploads`
  //   );
  const pages = [
    { name: "Case Studies", href: "/case-studies", current: false },
    { name: data.title, href: "#", current: true },
  ];
  return (
    <>
      <Breadcrumb pages={pages} />
      <div className="relative pt-12 pb-48 lg:pt-16 bg-slate-100 lg:pb-56">
        <Image
          src={`/images/background_footer.svg`}
          alt="Graphic"
          fill
          className="object-cover scale-x-[-1]"
        />
        <div className="relative">
          <div className="flex justify-center mb-3 lg:mb-6">
            <span className="bg-gradient-to-r from-blue-400 mx-auto uppercase tracking-wider to-blue-800 rounded-full text-white font-medium text-[10px] lg:text-xs px-2.5 inline-flex lg:py-1 leading-0">
              <span className="translate-y-0.5">Case Study</span>
            </span>
          </div>
          <h1 className="max-w-4xl mx-auto text-3xl text-center lg:text-6xl">
            {data.title}
          </h1>
          <div className="flex justify-center mt-3 lg:mt-5 space-x-2.5 text-sm">
            <span className="tracking-wide text-blue-800 uppercase">
              {formatDate(data.publishedAt)}
            </span>
            <span>&bull;</span>
            <span>by {data.author.name}</span>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-40 max-w-7xl">
        <div className="relative aspect-[16/8] lg:aspect-[16/5] overflow-hidden lg:rounded-2xl">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${data.thumbnail.url}`}
            alt={data.thumbnail.alternativeText}
            priority
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div
        className="max-w-4xl px-4 pb-8 mx-auto mt-8 prose prose-lg lg:mt-16 lg:pb-16"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
      {relatedCaseStudies.length > 0 && (
        <LatestArticles
          title={`Related Case Study`}
          data={relatedCaseStudies}
          type="case-studies"
        />
      )}
      <div id="contact-us" className="my-20">
        <ContactCTA title="Contact Us" />
      </div>
    </>
  );
};

export default CaseStudyDetail;
