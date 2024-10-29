import formatDate from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedArticle({ type, data }) {
  return (
    <div className="max-w-6xl px-4 mx-auto 2xl:max-w-7xl">
      <div className="lg:flex lg:space-x-12">
        <div className="lg:w-3/5">
          <Link href={`/${type}/${data[0].slug}`} className="group">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}${data[0].thumbnail.url}?height=600&format=webp`}
                alt={data[0].title}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                priority
                className="object-cover"
              />
              {data[0]?.expertise?.name ||
                (data[0]?.industry?.name && (
                  <span className="absolute left-0 inline-flex px-2.5 py-0.5 text-xs font-medium tracking-wide text-white uppercase shadow-lg rounded-r-full top-3 bg-brand-lightblue">
                    <span className="translate-y-0.5">
                      {type === "case-studies"
                        ? data[0]?.expertise?.name
                        : data[0]?.industry?.name}
                    </span>
                  </span>
                ))}
            </div>
            <div className="inline-flex mt-3 lg:mt-5 space-x-2 lg:space-x-2.5 text-xs lg:text-sm">
              <span className="tracking-wide text-blue-800 uppercase">
                {formatDate(data[0].publishedAt)}
              </span>
              <span>&bull;</span>
              <span>by {data[0]?.author?.name}</span>
            </div>
            <h2 className="mt-2 text-xl leading-tight tracking-tight lg:mt-3 lg:text-3xl group-hover:underline">
              {data[0].title}
            </h2>
          </Link>
        </div>
        <div className="pt-8 -my-4 divide-y lg:pt-0 lg:w-2/5 divide-dashed">
          {data.slice(1, 5).map((item) => (
            <Link
              href={`/${type}/${item.slug}`}
              className="flex items-start py-4 space-x-4 lg:space-x-5 group"
              key={item.uuid}
            >
              <div className="w-20 lg:w-[100px] relative aspect-square overflow-hidden rounded-md lg:rounded-xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${item.thumbnail.url}?height=150&format=webp`}
                  alt={item.title}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="inline-flex space-x-2.5 text-xs">
                  <span className="tracking-wide text-blue-800 uppercase">
                    {formatDate(item.publishedAt)}
                  </span>
                  <span>&bull;</span>
                  <span>by {item?.author?.name}</span>
                </div>
                <p className="mt-0.5 text-xl leading-tight font-heading group-hover:underline">
                  {item.title}
                </p>
                {item?.expertise?.name ||
                  (item?.industry?.name && (
                    <span className="mt-2 inline-flex px-2 py-0.5 text-[11px] leading-tight font-medium tracking-wide text-brand-lightblue uppercase rounded-full border border-brand-lightblue">
                      {type === "case-studies"
                        ? item?.expertise?.name
                        : item?.industry?.name}
                    </span>
                  ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
