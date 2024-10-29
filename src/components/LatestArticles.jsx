import formatDate from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

const LatestArticles = async ({ title, data, type, showTag = true }) => {
  return (
    <div className="relative lg:border-y">
      <Image
        src={`/images/case_background.jpg`}
        alt={`case background consus`}
        fill
        className="object-cover"
      />
      <div className="relative max-w-6xl px-4 mx-auto py-14 lg:py-24 2xl:max-w-7xl">
        <h2 className="text-3xl tracking-tight text-center lg:text-6xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 pt-5 -my-4 divide-y lg:pt-12 lg:grid-cols-3 gap-x-8 lg:gap-y-16 lg:divide-y-0">
          {data.map((item) => (
            <Link
              href={`/${type}/${item.slug}`}
              className="flex items-center py-4 space-x-5 lg:block group lg:space-x-0 lg:py-0"
              key={item.uuid}
            >
              <div className="w-[100px] lg:w-full relative aspect-square lg:aspect-[16/9] rounded-lg overflow-hidden lg:rounded-tl-3xl lg:rounded-br-3xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.thumbnail.url}?height=400&format=webp`}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 395px"
                  className="object-cover"
                />
                {showTag && (
                  <span className="hidden absolute left-0 lg:inline-flex px-2.5 py-0.5 text-xs font-medium tracking-wide text-white uppercase shadow-lg rounded-r-full top-3 bg-brand-lightblue">
                    {item.expertise.name}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <div className="inline-flex mt-0 space-x-2 text-xs lg:mt-4">
                  <span className="tracking-wide text-blue-800 uppercase">
                    {formatDate(item.publishedAt)}
                  </span>
                  <span>&bull;</span>
                  <span>by {item.author.name}</span>
                </div>
                <h3 className="mt-1 text-xl leading-tight group-hover:underline">
                  {item.title}
                </h3>
                {showTag && (
                  <span className="mt-2 inline-flex lg:hidden px-2.5 py-1 text-[10px] leading-none font-medium tracking-wide text-white uppercase shadow-lg rounded-full bg-brand-lightblue">
                    {item.expertise.name}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticles;
