import ExpertiseTab from "@/components/ExpertiseTab";
import FeaturedArticle from "@/components/FeaturedArticle";
import Header from "@/components/Header";
import LatestArticles from "@/components/LatestArticles";
import Maps from "@/components/Maps";
import {
  getExpertises,
  getLatestCaseStudies,
  getLatestInsights,
  getLatestWhitepapers,
} from "@/lib/api";

import { metadataBase } from "@/app/shared-metadata.js";
import Image from "next/image";
import {
  ArrowArcRight,
  ArrowRight,
  ArrowUpRight,
  Car,
  Crane,
  CurrencyCircleDollar,
  Factory,
  Handshake,
  Heartbeat,
  Lightning,
  Panorama,
  Storefront,
  Truck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ContactCTA from "@/components/ContactCTA";
import CTASection from "@/components/CTASection";

export const metadata = {
  metadataBase,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "YCP Consus | Supply Chain Advisory and Consulting Firm",
  description:
    "Consus, YCP's consulting platform, offers integrated solutions for business success. Elevate your strategy with Consus's comprehensive consulting services.",
  keywords: ["ycp consus", "supply chain advisory", "supply chain consulting"],
};
const industry = [
  {
    icon: <Car className="w-7 h-7" />,
    title: "Automotive & Mobility",
    desc: "We support companies in the automotive and mobility industry overcome supply chain challenges by providing improved efficiency and productivity, greater agility and responsiveness, reduced risk and compliance and increased innovation.",
  },
  {
    icon: <Lightning className="w-7 h-7" />,
    title: "Energy & Natural Resources",
    desc: "Energy and natural resources companies face unique challenges in managing their supply chains, and we provide support by overseeing volatile commodity prices and complex global supply chains for sustainability and environmental stewardship.",
  },
  {
    icon: <Crane className="w-7 h-7" />,
    title: "Construction & Infrastructure",
    desc: "In the demanding construction and infrastructure industry, supply chain disruptions can have a significant impact on project timelines, costs, and quality. Our team will support companies to overcome these challenges.",
  },
  {
    icon: <Storefront className="w-7 h-7" />,
    title: "Consumer & Retail",
    desc: "We work with consumer and retail businesses to develop and implement customized supply chain solutions designed to improve efficiency, reduce costs, and gain a competitive edge.",
  },
  {
    icon: <CurrencyCircleDollar className="w-7 h-7" />,
    title: "Financial Services",
    desc: "We work with consumer and retail businesses to develop and implement customized supply chain solutions designed to improve efficiency, reduce costs, and gain a competitive edge.",
  },
  {
    icon: <Heartbeat className="w-7 h-7" />,
    title: "Healthcare",
    desc: "By leveraging our expertise and technologies, we enable healthcare organizations to achieve supply chain excellence and resilience by optimizing operations, reducing costs, and improving patient outcomes through analytics and inventory management.",
  },
  {
    icon: <Factory className="w-7 h-7" />,
    title: "Industrials",
    desc: "We support industrial businesses to ensure they acquire the expertise and reinforcement they need to optimize their supply chains and meet their targets of delivering high-quality products to customers in a safe, cost-effective, and timely manner.",
  },
  {
    icon: <Handshake className="w-7 h-7" />,
    title: "Private Equity & Investment",
    desc: "We provide private equity and investment firms with valuable insights to fulfill their goals by conducting thorough due diligence assessments, identifying and mitigating potential risks, and implementing optimization initiatives.",
  },
  {
    icon: <UsersThree className="w-7 h-7" />,
    title: "Public Sector",
    desc: "We help organizations leverage data, analytics, and technology to optimize decision-making that can improve operational performance and service delivery, enhancing transparency, accountability, and compliance.",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Transportation & Logistics",
    desc: "We streamline transportation and logistics operations by leveraging analytics and technology to drive innovation and agility, optimize costs and performance, and enable data-driven innovation and collaboration.",
  },
  {
    icon: <Panorama className="w-7 h-7" />,
    title: "Technology, Media, Telecommunications",
    desc: "We enable enable technology, media, and telecommunications companies to optimize costs, performance, and innovation by adopting new technologies, streamlining operations, and reducing costs to drive growth.",
  },
];

const expertise = [
  {
    title: "Source-to-Pay (S2P) System Digitization",
    desc: "We provide PMO services, blueprint and system design and configuration, testing, deployment, and system upgrades.",
    url: "#",
  },
  {
    title: "Analytics & Insights (BluMor)",
    desc: "Our team will get insights from data and enrich it using scripts and scrapes, then extract data features using neural networks and NLP.",
    url: "#",
  },
  {
    title: "Supply Chain Turnarounds",
    desc: "Demand forecasting, inventory optimization, distribution efficiency, supplier quality, cash flow management, risk mitigation, sustainability, and visibility.",
    url: "#",
  },
  {
    title: "Procurement Operations",
    desc: "We optimize processes such as order tracking, PO diagnostics, requisition processing, compliance and risk management.",
    url: "#",
  },
  {
    title: "Expert Sourcing",
    desc: "We provide support through market research, category strategy, supplier evaluation, specification standardization.",
    url: "#",
  },
];

const teams = [
  {
    image: "/images/team-1.webp",
    name: "Saurabh Mehta",
    title:
      "Group Officer and Managing Partner, CEO of Supply Chain Solutions Division",
    expertise:
      "Procurement Transformations, Management Operations, Sales & Channel Optimization",
  },
  {
    image: "/images/team-2.webp",
    name: "Gourish Birajdar",
    title: "Partner",
    expertise:
      "Growth Strategies, Procurement & Operations, Strategy and Implemention",
  },
  {
    image: "/images/team-3.webp",
    name: "Bajrang Singh",
    title: "Partner",
    expertise:
      "Financial Operations, Accountancy & Account Management, Taxation, Compliance, and Auditing",
  },
  {
    image: "/images/team-4.webp",
    name: "Sonal Shukla",
    title: "Partner",
    expertise:
      "Digital Transformation, Project Implementation, Advisory - Strategy, Operations, IT Governance",
  },
  {
    image: "/images/team-5.webp",
    name: "Jason George",
    title: "Partner",
    expertise:
      "Operations & Strategy Digital Transformation -- SaaS, Media, and Innovation Technical Engineering",
  },
  {
    image: "/images/team-6.webp",
    name: "Navneet Bargoti",
    title: "Partner",
    expertise:
      "Operations & Strategic Sourcing, Digital and Technology (SaaS), Supplier Performance - Stratification, Audits, and Monitoring",
  },
  {
    image: "/images/team-7.webp",
    name: "Mehak Batra",
    title: "Vice President",
    expertise: "",
  },
];

export default async function Home() {
  //   const [expertises, latestCaseStudies, latestInsights, latestWhitepapers] =
  //     await Promise.all([
  //       getExpertises(),
  //       getLatestCaseStudies(),
  //       getLatestInsights(),
  //       getLatestWhitepapers(),
  //     ]);
  return (
    <main>
      <Header />

      <section
        id="awards"
        className="max-w-6xl px-4 py-10 mx-auto lg:py-20 2xl:max-w-7xl"
      >
        <h2 className="text-4xl text-center lg:text-6xl">Awards</h2>
        <p className="max-w-2xl mx-auto mt-4 leading-snug text-center">
          YCP Consus has been consistently recognized by leading industry forums
          and procurement leaders for its expertise and innovation in supply
          chain solutions.
        </p>
        <div className="max-w-4xl mx-auto mt-10">
          <div className="relative w-full">
            <Image
              src={"/images/awards-pc.webp"}
              alt={""}
              width={2000}
              height={2000}
              className="hidden object-cover w-full h-auto lg:block"
            />
            <Image
              src={"/images/awards-sp.webp"}
              alt={""}
              width={2000}
              height={2000}
              className="object-cover w-full h-auto lg:hidden"
            />
          </div>
        </div>
      </section>

      <section
        id="whitepapers"
        className="relative bg-[#011C43] text-white overflow-hidden"
      >
        <svg
          className="w-[50vw] absolute -top-[15vw] -left-[12vw]"
          viewBox="0 0 1185 1085"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8" filter="url(#filter0_f_169_20)">
            <path
              d="M362.3 893.568C652.467 804.217 702.734 779.483 926.437 787.14C1150.14 794.798 821.346 497.213 641.516 340.774C461.686 184.335 286.479 134.118 249.638 238.079C212.797 342.04 72.1315 982.919 362.3 893.568Z"
              fill="url(#paint0_linear_169_20)"
            />
            <path
              d="M362.3 893.568C652.467 804.217 702.734 779.483 926.437 787.14C1150.14 794.798 821.346 497.213 641.516 340.774C461.686 184.335 286.479 134.118 249.638 238.079C212.797 342.04 72.1315 982.919 362.3 893.568Z"
              fill="url(#paint1_linear_169_20)"
              fillOpacity="0.4"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_169_20"
              x="0.512436"
              y="0.895737"
              width="1183.83"
              height="1083.8"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="91.3042"
                result="effect1_foregroundBlur_169_20"
              />
            </filter>
            <linearGradient
              id="paint0_linear_169_20"
              x1="452.856"
              y1="242.646"
              x2="461.182"
              y2="733.283"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.455" stopColor="white" stopOpacity="0.425" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_169_20"
              x1="489.238"
              y1="285.271"
              x2="630.958"
              y2="879.821"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#26E5F1" />
              <stop offset="0.406551" stopColor="#0057FF" />
              <stop offset="0.920519" stopColor="#0057FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative max-w-6xl px-4 py-10 mx-auto lg:py-20 2xl:max-w-7xl">
          <h2 className="text-4xl text-center lg:text-6xl">Publications</h2>
          <div className="grid items-stretch gap-4 mt-8 lg:grid-cols-2">
            <div className="relative flex-shrink-0">
              <Image
                src={"/images/publication-1.webp"}
                alt={""}
                width={2000}
                height={2000}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="relative flex-shrink-0">
              <Image
                src={"/images/publication-2.webp"}
                alt={""}
                width={2000}
                height={2000}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="expertise"
        className="max-w-6xl px-4 py-10 mx-auto lg:py-20 2xl:max-w-7xl"
      >
        <h2 className="text-4xl text-center lg:text-6xl">Our Expertise</h2>
        <div className="grid gap-5 mt-5 lg:mt-8 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="relative p-6 overflow-hidden border border-gray-100 rounded-md shadow-lg lg:p-7 pb-7"
            >
              <span className="absolute bottom-0 left-0 w-2/3 h-1 bg-black"></span>
              <div className="flex items-start justify-between gap-6">
                <p className="text-2xl leading-tight font-heading">
                  {item.title}
                </p>
                <ArrowUpRight className="flex-shrink-0 w-6 h-6 lg:w-8 lg:h-8 text-brand-lightblue" />
              </div>
              <p className="mt-1 text-base leading-snug lg:mt-2 opacity-70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />

      <section
        id="industries"
        className="max-w-6xl px-4 py-10 mx-auto lg:py-20 2xl:max-w-7xl"
      >
        <h2 className="text-4xl text-center lg:text-6xl">
          Explore Our Industry Coverage
        </h2>
        <p className="max-w-2xl mx-auto mt-4 leading-snug text-center">
          Backed by years of expertise and knowledge across several industries,
          our professionals and their services can provide actionable insight
          and data-driven strategies that deliver high-impact results for your
          business growth
        </p>
        <div className="grid gap-8 mt-10 lg:mt-20 lg:gap-12 lg:grid-cols-3">
          {industry.map((item, index) => (
            <div
              key={index}
              className="relative pb-4 overflow-hidden border-b border-gray-300 lg:pb-6"
            >
              <div className="flex items-start gap-3.5">
                <span className="-translate-y-px">{item.icon}</span>
                <p className="text-2xl leading-tight font-heading">
                  {item.title}
                </p>
              </div>
              <p className="mt-2 text-base leading-snug opacity-70">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="team"
        className="relative bg-[#011C43] text-white overflow-hidden"
      >
        <svg
          className="w-[50vw] absolute -top-[15vw] -left-[12vw]"
          viewBox="0 0 1185 1085"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8" filter="url(#filter0_f_169_20)">
            <path
              d="M362.3 893.568C652.467 804.217 702.734 779.483 926.437 787.14C1150.14 794.798 821.346 497.213 641.516 340.774C461.686 184.335 286.479 134.118 249.638 238.079C212.797 342.04 72.1315 982.919 362.3 893.568Z"
              fill="url(#paint0_linear_169_20)"
            />
            <path
              d="M362.3 893.568C652.467 804.217 702.734 779.483 926.437 787.14C1150.14 794.798 821.346 497.213 641.516 340.774C461.686 184.335 286.479 134.118 249.638 238.079C212.797 342.04 72.1315 982.919 362.3 893.568Z"
              fill="url(#paint1_linear_169_20)"
              fillOpacity="0.4"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_169_20"
              x="0.512436"
              y="0.895737"
              width="1183.83"
              height="1083.8"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="91.3042"
                result="effect1_foregroundBlur_169_20"
              />
            </filter>
            <linearGradient
              id="paint0_linear_169_20"
              x1="452.856"
              y1="242.646"
              x2="461.182"
              y2="733.283"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="0.455" stopColor="white" stopOpacity="0.425" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_169_20"
              x1="489.238"
              y1="285.271"
              x2="630.958"
              y2="879.821"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#26E5F1" />
              <stop offset="0.406551" stopColor="#0057FF" />
              <stop offset="0.920519" stopColor="#0057FF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="relative max-w-6xl px-4 py-10 mx-auto lg:py-20 2xl:max-w-7xl">
          <h2 className="text-4xl text-center lg:text-6xl">Meet Our Team</h2>
          <p className="max-w-2xl mx-auto mt-4 leading-snug text-center">
            At YCP Consus, our leadership comprises a diverse roster of seasoned
            professionals who leverage their industry know-how to achieve
            transformative growth for clients across Asia and beyond.
          </p>
          <div className="grid gap-16 mt-16 lg:grid-cols-2">
            {teams.map((item, index) => (
              <div
                key={index}
                className="relative flex items-end gap-8 pb-6 overflow-hidden"
              >
                <div className="relative flex-shrink-0 w-1/3">
                  <Image
                    src={item.image}
                    alt={""}
                    width={700}
                    height={700}
                    className="object-cover w-full h-auto"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-3xl leading-tight font-heading">
                    {item.name}
                  </p>
                  <p className="pb-8 mt-1 mb-4 text-base leading-snug border-b opacity-80 border-white/40">
                    {item.title}
                  </p>
                  {item.expertise && (
                    <div className="text-base">
                      <p className="opacity-50">Expertise:</p>
                      <p className="mt-1">{item.expertise}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div id="contact-us" className="py-10 lg:py-20">
        <ContactCTA title="Ready to Talk?" />
      </div>
    </main>
  );
}
