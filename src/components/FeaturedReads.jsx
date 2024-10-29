import formatDate from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

const LatestArticles = async ({ title, data }) => {
  const featured = data.data.case_studies.concat(data.data.insights);
  return (
    <div className="relative border-y">
      <Image
        src={`/images/case_background.jpg`}
        alt={`case background consus`}
        fill
        className="object-cover"
      />
      <div className="relative max-w-6xl px-4 py-10 mx-auto lg:py-24 2xl:max-w-7xl">
        <h2 className="text-4xl tracking-tight text-center lg:text-6xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 divide-y lg:mt-12 lg:grid-cols-3 gap-x-8 lg:gap-y-16 lg:divide-y-0">
          {featured.map((item) => (
            <Link
              href={`/${
                item.content_type === "INSIGHT" ? "insights" : "case-studies"
              }/${item.slug}`}
              className="items-center block py-4 space-x-0 group lg:py-0"
              key={item.uuid}
            >
              <div className="w-full relative aspect-[16/9] rounded-lg overflow-hidden lg:rounded-tl-3xl lg:rounded-br-3xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.thumbnail.url}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {item?.industry?.name ||
                  (item?.expertise?.name && (
                    <span className="absolute left-0 inline-flex px-2.5 py-0.5 text-xs font-medium tracking-wide text-white uppercase shadow-lg rounded-r-full top-3 bg-brand-lightblue">
                      {item.content_type === "INSIGHT"
                        ? item.industry.name
                        : item.expertise.name}
                    </span>
                  ))}
              </div>
              <div className="lg:flex-1">
                <div className="inline-flex mt-4 space-x-2 text-xs">
                  <span className="tracking-wide uppercase">
                    {`// ${
                      item.content_type === "INSIGHT"
                        ? "Insights"
                        : "Case Study"
                    }`}
                  </span>
                  <span>&bull;</span>
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
      </div>
    </div>
  );
};

export default LatestArticles;
