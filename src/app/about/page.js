import Breadcrumb from "@/components/Breadcrumb";
import ContactCTA from "@/components/ContactCTA";
import FeaturedReads from "@/components/FeaturedReads";
import Offices from "@/components/Offices";
import { getFeaturedReads } from "@/lib/api";
import Image from "next/image";
import { metadataBase } from "@/app/shared-metadata.js";

const stats = [
  { id: 1, name: "Customer Retention", value: "90%+" },
  { id: 2, name: "Average Annual Spend Management", value: "$10B+" },
  { id: 3, name: "Countries Supported", value: "20+" },
  { id: 4, name: "Procurement Practitioners", value: "100+" },
  { id: 5, name: "Spend Processed Through BluMor", value: "$20B+" },
  { id: 6, name: "Physical Office Locations", value: "8" },
  { id: 7, name: "Languages Supported", value: "15+" },
  { id: 8, name: "Curated Vendors in SupplierVerse", value: "250K+" },
  { id: 9, name: "Cost Savings Delivered", value: "5-30%" },
];

const values = [
  {
    image:
      "https://images.pexels.com/photos/8297478/pexels-photo-8297478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Supply Chain Advisory",
  },
  {
    image:
      "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Procurement Solutions",
  },
];

export const metadata = {
  metadataBase,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "About Our Company",
  description:
    "YCP Consus is a professional services firm that optimizes supply chains, improves financial performance, and drives growth with strategic solutions.",
  keywords: ["about us", "company information"],
};

const About = async () => {
  const pages = [{ name: "About", href: "#", current: true }];
  const featuredReads = await getFeaturedReads();

  return (
    <>
      <Breadcrumb pages={pages} />
      <section className="relative overflow-hidden bg-white">
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
        <div className="max-w-6xl px-4 mx-auto 2xl:max-w-7xl lg:pt-20">
          <div className="max-w-5xl mx-auto lg:mx-0 lg:flex-shrink-0">
            <h1 className="text-4xl tracking-tight sm:text-7xl">
              {`We are a globally recognized, platform-driven organization specializing in procurement and supply chain solutions.`}
            </h1>
            <p className="max-w-3xl mt-5 text-lg">
              YCP Consus is a global leader in holistic supply chain solutions
              and transformation services, with a very diverse client base
              spanning 20+ countries. Through improved operational efficiency,
              we have helped our clients achieve over $2B in savings.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-3 mt-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col w-full p-8 bg-gray-100 rounded-lg gap-y-1"
              >
                <dt className="leading-none text-brand-lightblue">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="max-w-6xl px-4 py-24 mx-auto 2xl:max-x-7xl">
        <h2 className="text-2xl tracking-tight text-center lg:text-5xl">
          YCP Consus has been consistently recognized by leading industry forums
          and procurement leaders for its expertise and innovation in supply
          chain solutions.
        </h2>
        <Image
          src={`/images/consus-awards.png`}
          width={1000}
          height={1000}
          alt=""
          className="mx-auto mt-6 lg:mt-8"
        />
      </div>

      <div className="bg-gray-100">
        <div className="max-w-6xl px-4 pt-16 mx-auto lg:pt-24 2xl:max-x-7xl">
          <h2 className="text-4xl tracking-tight text-center lg:text-5xl">
            Our Expertise
          </h2>
          <div className="grid gap-4 mt-10 lg:grid-cols-2">
            {values.map((value, index) => (
              <div
                className="relative flex flex-col items-center justify-end p-3 overflow-hidden text-center text-white rounded-lg aspect-video"
                key={index}
              >
                <Image
                  src={value.image}
                  alt="Work at YCP Consus"
                  fill
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-brand-lightblue via-transparent to-transparent"></span>
                <p className="relative text-2xl font-medium">{value.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className="bg-white">
        <div className="pb-20 bg-gray-900 sm:pb-24 xl:pb-0">
          <div className="flex flex-col items-center px-6 mx-auto max-w-7xl gap-x-8 gap-y-10 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
            <div className="w-full max-w-2xl -mt-8 xl:-mb-8 xl:w-96 xl:flex-none">
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  className="absolute inset-0 object-cover w-full h-full bg-gray-800 shadow-2xl rounded-2xl"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
              <h2 className="text-4xl tracking-tight text-white lg:text-5xl">
                What our client says about us
              </h2>
              <figure className="relative pt-6 isolate sm:pt-12">
                <svg
                  viewBox="0 0 162 128"
                  fill="none"
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-32 -z-10 stroke-white/20"
                >
                  <path
                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                  />
                  <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                </svg>
                <blockquote className="text-lg font-medium text-white sm:text-xl">
                  <p>
                    Gravida quam mi erat tortor neque molestie. Auctor aliquet
                    at porttitor a enim nunc suscipit tincidunt nunc. Et non
                    lorem tortor posuere. Nunc eu scelerisque interdum eget
                    tellus non nibh scelerisque bibendum.
                  </p>
                </blockquote>
                <figcaption className="mt-8 text-base">
                  <div className="font-semibold text-white">Judith Black</div>
                  <div className="mt-1 text-gray-400">CEO of Workcation</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div> */}

      <div className="pt-16 pb-16 bg-gray-100 lg:pb-24 lg:pt-36">
        <Offices />
      </div>

      <div className="max-w-6xl px-4 py-24 mx-auto 2xl:max-x-7xl">
        <h2 className="text-4xl tracking-tight text-center lg:text-5xl">
          Trusted by leading organizations worldwide
        </h2>
        <Image
          src={`/images/logo-compilation.webp`}
          width={1000}
          height={1000}
          alt=""
          className="mx-auto mt-10"
        />
      </div>

      <FeaturedReads title={"Featured Reads"} data={featuredReads} />

      <div id="contact-us" className="py-20">
        <ContactCTA title="Contact Us" />
      </div>
    </>
  );
};

export default About;
