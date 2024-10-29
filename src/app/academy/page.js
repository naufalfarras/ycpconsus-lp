import ApplyJobForm from "@/components/ApplyJobForm";
import Breadcrumb from "@/components/Breadcrumb";
import AcademyCurriculum from "@/components/AcademyCurriculum";
import { getJobPositions } from "@/lib/api";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { metadataBase } from "@/app/shared-metadata.js";
import { Tab } from "@headlessui/react";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  metadataBase,
  alternates: {
    canonical: "/academy",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Academy",
  description:
    "Join our diverse team of talented and motivated professionals who come together to create real value for our customers.",
  keywords: ["career", "opportunity"],
};

const Academy = async () => {
  const pages = [{ name: "Academy", href: "#", current: true }];

  return (
    <>
      <Breadcrumb pages={pages} />
      <div className="max-w-6xl px-4 pt-10 mx-auto lg:pt-20 2xl:max-w-7xl">
        <div className="max-w-4xl">
          <h1 className="text-4xl tracking-tight lg:text-6xl">
            YCP Supply Chain Academy
          </h1>
          <p className="mt-4">
            With the goal of investing in empowering individuals and the
            workforce to succeed within the procurement and supply chain
            industry, our program acts as the perfect launching pad for budding
            professionals who want to elevate their careers, skillsets, and
            industry know-how.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden aspect-video lg:aspect-[9/2] rounded-r-3xl my-8 mr-8 lg:my-16">
        <Image
          src={`/images/academy_header.webp`}
          sizes="(max-width: 480px) 480w, 100vw"
          alt="Header Image"
          priority={true}
          fill
          className="object-cover object-top w-full h-full"
        />
      </div>
      <section className="relative z-10 max-w-6xl px-4 mx-auto 2xl:max-w-7xl">
        <div className="grid items-center px-4 py-4 text-center text-white rounded-md shadow-md gap-y-2 lg:gap-y-0 lg:divide-x lg:px-0 lg:grid-cols-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 divide-white/20">
          <div className="lg:px-4 lg:block gap-x-4 lg:gap-x-0">
            <p className="text-xl font-medium leading-tight capitalize">
              High-quality expert-led sessions
            </p>
          </div>
          <div className="lg:px-4 lg:block gap-x-4 lg:gap-x-0">
            <p className="text-xl font-medium leading-tight capitalize">
              Full syllabus coverage
            </p>
          </div>
          <div className="lg:px-4 lg:block gap-x-4 lg:gap-x-0">
            <p className="text-xl font-medium leading-tight capitalize">
              Modular practice assessments
            </p>
          </div>
          <div className="lg:px-4 lg:block gap-x-4 lg:gap-x-0">
            <p className="text-xl font-medium leading-tight capitalize">
              Practice assessment debrief sessions
            </p>
          </div>
          <div className="lg:px-4 lg:block gap-x-4 lg:gap-x-0">
            <p className="text-xl font-medium leading-tight capitalize">
              Real-world case studies
            </p>
          </div>
          <div className="lg:px-4 lg:block gap-x-4 lg:gap-x-0">
            <p className="text-xl font-medium leading-tight capitalize">
              End of course hands on project
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl px-4 mx-auto mt-10 lg:mt-20 2xl:max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl tracking-tight lg:text-5xl">Course Tracks</h2>
          <p className="mt-2">
            Following completion of a Core course that covers the basic
            fundamentals of related areas like supply chain, sourcing, and
            purchasing, students may pursue coursework in six specialized
            tracks, earning certification with varying levels from Practitioner
            to Expert.
          </p>
        </div>
        <ul className="grid mt-8 lg:grid-cols-3 gap-y-8 gap-x-4">
          <div>
            <div className="relative block overflow-hidden rounded-lg aspect-video group">
              <Image
                src={`https://consus.ycp.com/_next/image?url=https%3A%2F%2Fapi.ycpconsus.ycps.digital%2Fuploads%2F3d_logistics_network_global_transportation_connection_illustration_afb1fad63f.jpg%3Fheight%3D400%3Fformat%3Dwebp&w=3840&q=75`}
                alt={"Supply Chain"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-lightblue via-transparent to-transparent"></span>
              <span className="absolute bottom-0 block px-4 pt-2 text-base font-medium text-center -translate-x-1/2 bg-white rounded-t-lg 2xl:pt-3 2xl:px-6 2xl:text-xl group-hover:text-brand-lightblue whitespace-nowrap left-1/2">
                Supply Chain
              </span>
            </div>
            <ul className="mt-4 ml-4 list-disc">
              <li>Supplier relationship management</li>
              <li>Supply chain financing</li>
              <li>Supplier risk assessment & mitigation</li>
            </ul>
          </div>
          <div>
            <div className="relative block overflow-hidden rounded-lg aspect-video group">
              <Image
                src={`https://consus.ycp.com/_next/image?url=https%3A%2F%2Fapi.ycpconsus.ycps.digital%2Fuploads%2Fglobal_businessman_glowing_with_success_standing_tall_generated_by_ai_fcbefe2129.jpg%3Fheight%3D400%3Fformat%3Dwebp&w=3840&q=75`}
                alt={"Sourcing"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-lightblue via-transparent to-transparent"></span>
              <span className="absolute bottom-0 block px-4 pt-2 text-base font-medium text-center -translate-x-1/2 bg-white rounded-t-lg 2xl:pt-3 2xl:px-6 2xl:text-xl group-hover:text-brand-lightblue whitespace-nowrap left-1/2">
                Sourcing
              </span>
            </div>
            <ul className="mt-4 ml-4 list-disc">
              <li>Category management</li>
              <li>Supplier selection</li>
              <li>Spec design & rationalization</li>
              <li>Direct & Indirect</li>
            </ul>
          </div>
          <div>
            <div className="relative block overflow-hidden rounded-lg aspect-video group">
              <Image
                src={`https://consus.ycp.com/_next/image?url=https%3A%2F%2Fapi.ycpconsus.ycps.digital%2Fuploads%2Fcontainer_ship_unloading_commercial_dock_dusk_generated_by_ai_269f11596e.jpg%3Fheight%3D400%3Fformat%3Dwebp&w=3840&q=75`}
                alt={"Procurement"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-lightblue via-transparent to-transparent"></span>
              <span className="absolute bottom-0 block px-4 pt-2 text-base font-medium text-center -translate-x-1/2 bg-white rounded-t-lg 2xl:pt-3 2xl:px-6 2xl:text-xl group-hover:text-brand-lightblue whitespace-nowrap left-1/2">
                Procurement
              </span>
            </div>
            <ul className="mt-4 ml-4 list-disc">
              <li>PO/PR expedition, tracking</li>
              <li>Compliance & Risk Management</li>
              <li>Contract life cycle management</li>
              <li>Payment compliance & controls</li>
            </ul>
          </div>
          <div>
            <div className="relative block overflow-hidden rounded-lg aspect-video group">
              <Image
                src={`https://consus.ycp.com/_next/image?url=https%3A%2F%2Fapi.ycpconsus.ycps.digital%2Fuploads%2Fbusinessman_holding_digital_tablet_success_cityscape_generated_by_ai_3610224ff8.jpg%3Fheight%3D400%3Fformat%3Dwebp&w=3840&q=75`}
                alt={"Analytics"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-lightblue via-transparent to-transparent"></span>
              <span className="absolute bottom-0 block px-4 pt-2 text-base font-medium text-center -translate-x-1/2 bg-white rounded-t-lg 2xl:pt-3 2xl:px-6 2xl:text-xl group-hover:text-brand-lightblue whitespace-nowrap left-1/2">
                Analytics
              </span>
            </div>
            <ul className="mt-4 ml-4 list-disc">
              <li>Reporting</li>
              <li>Market analysis & research</li>
              <li>Supplier performance monitoring</li>
            </ul>
          </div>
          <div>
            <div className="relative block overflow-hidden rounded-lg aspect-video group">
              <Image
                src={`https://consus.ycp.com/_next/image?url=https%3A%2F%2Fapi.ycpconsus.ycps.digital%2Fuploads%2Ffuturistic_online_shopping_concept_technology_digital_payment_by_smartphone_ai_generative_f81b134f54.jpg%3Fheight%3D400%3Fformat%3Dwebp&w=3840&q=75`}
                alt={"Digital Systems"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-lightblue via-transparent to-transparent"></span>
              <span className="absolute bottom-0 block px-4 pt-2 text-base font-medium text-center -translate-x-1/2 bg-white rounded-t-lg 2xl:pt-3 2xl:px-6 2xl:text-xl group-hover:text-brand-lightblue whitespace-nowrap left-1/2">
                Digital Systems
              </span>
            </div>
            <ul className="mt-4 ml-4 list-disc">
              <li>
                Source to pay (S2P) system requirement assessment & selection
              </li>
              <li>
                Blueprint & system design, config, testing, deployment, and
                upgrades
              </li>
              <li>System training and certification</li>
            </ul>
          </div>
          <div>
            <div className="relative block overflow-hidden rounded-lg aspect-video group">
              <Image
                src={`https://consus.ycp.com/_next/image?url=https%3A%2F%2Fapi.ycpconsus.ycps.digital%2Fuploads%2Fpexels_tiger_lily_4484155_a3b59b93c2.jpg&w=3840&q=75`}
                alt={"Sustainability"}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-lightblue via-transparent to-transparent"></span>
              <span className="absolute bottom-0 block px-4 pt-2 text-base font-medium text-center -translate-x-1/2 bg-white rounded-t-lg 2xl:pt-3 2xl:px-6 2xl:text-xl group-hover:text-brand-lightblue whitespace-nowrap left-1/2">
                Sustainability
              </span>
            </div>
            <ul className="mt-4 ml-4 list-disc">
              <li>Ethical sourcing</li>
              <li>Supply chain transparency</li>
              <li>Circular economy</li>
            </ul>
          </div>
        </ul>
      </section>

      <section className="max-w-6xl px-4 mx-auto mt-10 lg:mt-28 2xl:max-w-7xl">
        <AcademyCurriculum />
      </section>

      <section className="mb-10 overflow-hidden lg:my-24">
        <div className="max-w-6xl px-4 mx-auto 2xl:max-w-7xl">
          <div className="items-center lg:space-x-16 lg:flex">
            <div className="lg:w-1/2">
              <h2 className="text-4xl tracking-tight lg:text-5xl">
                Certification Badges
              </h2>
              <p className="mt-4 text-lg">
                Upon successfully passing a course, the student is awarded a
                badge that may be displayed on LinkedIn, resumes, or similar.
              </p>
            </div>
            <img src={`/images/badges.png`} alt="" className="lg:w-1/2" />
          </div>
        </div>
      </section>

      <section className="py-16 text-white bg-brand-primary">
        <h2 className="text-4xl tracking-tight text-center lg:text-5xl">
          Meet the Instructors
        </h2>
        <div className="max-w-6xl px-4 mx-auto mt-12 space-y-16 2xl:max-w-7xl">
          <div className="flex items-start space-x-4 lg:space-x-6">
            <div className="w-1/5 bg-white relative aspect-[3/4] rounded lg:rounded-lg overflow-hidden">
              <Image
                src={`https://consus.ycp.com/_next/image?url=https%3A%2F%2Fapi.ycpconsus.ycps.digital%2Fuploads%2FNanveet_YCPC_no_BG_88d7b395ab.png&w=3840&q=75`}
                alt={""}
                fill
                sizes="(max-width: 640px) 100w, 280w"
                className="object-cover w-full"
              />
            </div>
            <div className="hidden w-1/5 ml-6 lg:block lg:ml-0">
              <h3 className="text-2xl lg:mt-6 lg:text-3xl">Navneet Bargoti</h3>
              <p className="text-base leading-tight text-brand-lightblue lg:mt-0.5">
                VP, Global Sourcing
              </p>
            </div>
            <div className="flex-1">
              <div className="mb-4 lg:hidden">
                <h3 className="text-2xl">Navneet Bargoti</h3>
                <p className="text-base leading-tight text-brand-lightblue lg:mt-0.5">
                  VP, Global Sourcing
                </p>
              </div>
              <p className="opacity-80">
                Navneet assumed the role of VP of Sourcing, Global at YCP Consus
                in July 2023 but has worked with Consus since 2010 as Director
                of Operations. He has over 22 years of experience in consulting,
                supply chain, strategic sourcing, and digital S2P/P2P SaaS
                platform management. He has been instrumental in generating
                millions of dollars of savings for YCP Consus customers
                globally. He holds an impressive track record in improving
                supplier performance through structured supplier quality
                improvement programs involving supplier stratification, supplier
                audits, and supplier performance monitoring. Prior to joining
                YCP Group, Navneet worked as a consultant and engineer, where he
                accumulated experience across different industries, including
                automotive, logistics, and others.
                <br />
                <br />
                He has an MBA in Operations from Symbiosis, a BTech in
                Mechanical Engineering from Rajasthan Tech, and a Diploma in
                Production Management from IIMTE.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 lg:space-x-6">
            <div className="w-1/5 bg-white relative aspect-[3/4] rounded lg:rounded-lg overflow-hidden">
              <Image
                src={`https://consus.ycp.com/_next/image?url=https%3A%2F%2Fapi.ycpconsus.ycps.digital%2Fuploads%2FJason_YCPC_no_BG_1dacd36379.png&w=3840&q=75`}
                alt={""}
                fill
                sizes="(max-width: 640px) 100w, 280w"
                className="object-cover w-full"
              />
            </div>
            <div className="hidden w-1/5 ml-6 lg:block lg:ml-0">
              <h3 className="text-2xl lg:mt-6 lg:text-3xl">Jason George</h3>
              <p className="text-base leading-tight text-brand-lightblue lg:mt-0.5">
                VP Operations, NA/LATAM
              </p>
            </div>
            <div className="flex-1">
              <div className="mb-4 lg:hidden">
                <h3 className="text-2xl">Jason George</h3>
                <p className="text-base leading-tight text-brand-lightblue lg:mt-0.5">
                  VP Operations, NA/LATAM
                </p>
              </div>
              <p className="opacity-80">
                Jason assumed the role of VP of Operations in July 2023 and is
                responsible for overseeing regional Operations for the Americas.
                He brings 20+ years of professional leadership experience in
                Digital Transformation, SaaS, Media, and Strategy. Prior to
                joining YCP Consus, he worked at Dalet Digital Media Systems,
                focusing on digital media supply chain solutions for clients
                such as ABC, NBC, Starz, Fox, Crown/Hallmark, and QVC. He has
                also held leadership roles with Charter/Spectrum, managing
                technical engineering operations for the California and Oceanic
                regions; building 24/7 channels and working with partners
                including the Lakers, Dodgers, Sparks, Galaxy, Los Angeles
                Times, and Spectrum News 1.
                <br />
                <br />
                He has an MA in Forensic Psychology from John Jay, a BA in
                Psychology from Pace, a BS in Computer Science from Oregon
                State, a Master’s certificate in Terrorism Studies from John
                Jay, and a small handful of local Emmy awards. He is a combat
                veteran who previously served in the US Army as part of the
                101st Airborne Division.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 lg:space-x-6">
            <div className="w-1/5 bg-white relative aspect-[3/4] rounded lg:rounded-lg overflow-hidden">
              <Image
                src={`/images/person-placeholder.png`}
                alt={""}
                fill
                sizes="(max-width: 640px) 100w, 280w"
                className="object-cover w-full"
              />
            </div>
            <div className="hidden w-1/5 ml-6 lg:block lg:ml-0">
              <h3 className="text-2xl lg:mt-6 lg:text-3xl">Tiago Bonetto</h3>
              <p className="text-base leading-tight text-brand-lightblue lg:mt-0.5">
                Engagement Manager
              </p>
            </div>
            <div className="flex-1">
              <div className="mb-4 lg:hidden">
                <h3 className="text-2xl">Tiago Bonetto</h3>
                <p className="text-base leading-tight text-brand-lightblue lg:mt-0.5">
                  Engagement Manager
                </p>
              </div>
              <p className="opacity-80">
                Tiago is an Engagement Manager who joined YCP Consus in August
                2022. He has more than 17 years of experience in international
                supply chain and product development leading businesses in over
                21 countries in the North and South Americas, Asia, the Middle
                East, and Europe, and was responsible for more than 15,000
                containers shipped out around the world.
                <br />
                <br />
                He has an MBA in International Business from Unisinos and
                Bachelor’s in Business Administration from FSG -
                Centro Universitário da Serra Gaúcha.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 lg:space-x-6">
            <div className="w-1/5 bg-white relative aspect-[3/4] rounded lg:rounded-lg overflow-hidden">
              <Image
                src={`/images/person-placeholder.png`}
                alt={""}
                fill
                sizes="(max-width: 640px) 100w, 280w"
                className="object-cover w-full"
              />
            </div>
            <div className="hidden w-1/5 ml-6 lg:block lg:ml-0">
              <h3 className="text-2xl lg:mt-6 lg:text-3xl">
                Swanpil Chodanker
              </h3>
              <p className="text-base leading-tight text-brand-lightblue lg:mt-0.5">
                Director, Global Sourcing
              </p>
            </div>
            <div className="flex-1">
              <div className="mb-4 lg:hidden">
                <h3 className="text-2xl">Swanpil Chodanker</h3>
                <p className="text-base leading-tight text-brand-lightblue lg:mt-0.5">
                  Director, Global Sourcing
                </p>
              </div>
              <p className="opacity-80">
                Swapnil is the Director of Sourcing at YCP Consus. With over 14
                years of professional experience, he possesses a robust skill
                set, particularly in areas such as Global Sourcing, Commodity
                Management, Supplier Development, e-Sourcing, Contract
                Management, and Project Management.​ Prior to joining YCP
                Consus, he held a key leadership position as the head of the
                supply chain department at Kineco Kaman Composite. His diverse
                career journey includes significant roles in strategic sourcing
                at renowned organizations such as Siemens, Reliance
                Infrastructure, and Analytics Quotient.​
                <br />
                <br />
                He holds an MBA in Supply Chain & Finance from Goa Institute of
                Management. He also earned his Bachelor of Engineering from the
                Goa College of Engineering, specializing in Electrical &
                Electronics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl px-4 py-10 mx-auto lg:py-20 2xl:max-x-7xl">
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
      </section>
      <div id="contact-us" className="pb-10 lg:py-20">
        <ContactCTA title="Get to know YCP Supply Chain Academy" />
      </div>
    </>
  );
};

export default Academy;
