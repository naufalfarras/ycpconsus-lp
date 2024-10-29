"use client";

import { Tab } from "@headlessui/react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const AcademyCurriculum = () => {
  const curriculums = [
    {
      title: "Foundational Concepts in Procurement and Supply Chain Management",
      duration: "4 Hours",
      materials: [
        "Introduction to Procurement and Supply Chain Management",
        "Importance and Role in Business Strategy",
        "Historical Perspectives and Evolution",
        "Procurement Pyramid Inversion",
        "Methodology",
        "Timeline",
      ],
    },
    {
      title: "Strategic Performance Measurement",
      duration: "4 Hours",
      materials: [
        "Why measuring performance",
        "Key Performance Indicators (KPIs) in Procurement and Supply Chain",
        "Benchmarking and Best Practices",
        "Continuous Improvement Strategies",
        "Case Studies",
        "Timeline",
      ],
    },
    {
      title: "Data Analysis/Spend Cube",
      duration: "4 Hours",
      materials: [
        "Data Collection and Management in Procurement",
        "Spend Analysis Techniques",
        "Data Visualization Tools and Techniques",
        "Spend Cube Modeling and Analysis",
        "Case Studies",
      ],
    },
    {
      title: "Strategic Sourcing Methodology",
      duration: "4 Hours",
      materials: [
        "Strategic Sourcing Frameworks and Models",
        "Total Cost of Ownership (TCO) Analysis",
        "Make vs. Buy Decisions",
        "Supplier Segmentation Strategies",
        "Outsourcing Strategies and Considerations",
        "Case Studies",
      ],
    },
    {
      title: "Strategic Negotiation and Relationship Management",
      duration: "4 Hours",
      materials: [
        "Principled Negotiation Techniques",
        "BATNA (Best Alternative to a Negotiated Agreement) Analysis",
        "Win-Win Negotiation Strategies",
        "Relationship-based Negotiation Approaches",
        "Cross-cultural Negotiation Skills",
      ],
    },
    {
      title: "Supplier Relationship Development and Optimization",
      duration: "4 Hours",
      materials: [
        "Supplier Relationship Management (SRM) Strategies",
        "Supplier Performance Evaluation",
        "Supplier Development and Collaboration",
        "Supplier Diversity and Inclusion Initiatives",
        "Conflict Resolution with Suppliers",
        "Case Studies",
      ],
    },
    {
      title: "Comprehensive Supply Chain Risk Identification and Mitigation",
      duration: "4 Hours",
      materials: [
        "Identifying and Assessing Supply Chain Risks",
        "Risk Mitigation Strategies and Contingency Planning",
        "Supply Chain Resilience and Business Continuity Planning",
        "Compliance and Regulatory Risk Management",
        "Supply Chain Disruption Management",
        "Case studies",
      ],
    },
    {
      title: "Dynamic Performance Monitoring and Optimization",
      duration: "4 Hours",
      materials: [
        "Performance Dashboards and Reporting",
        "Key Metrics for Performance Tracking",
        "Root Cause Analysis for Performance Deviations",
        "Corrective Actions and Improvement Plans",
        "Case studies",
      ],
    },
    {
      title: "Recap & Path Ahead",
      duration: "4 Hours",
      materials: [
        "Review of Key Concepts Covered in the Program",
        "Reflection on Learning and Application to Real-world Scenarios",
        "Developing a Personalized Action Plan for learnings implementation",
        "Alumni Network and Continuing Support Resources",
        "Implementation",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-4xl text-center lg:text-5xl">Curriculums</h2>
      <Tab.Group as={Fragment}>
        <div className="mt-6 mb-16 lg:mt-10 lg:flex">
          <div className="flex-1 lg:pr-10 lg:mr-10 lg:border-r">
            <Tab.List className="-my-1.5 divide-y lg:-my-2">
              {curriculums.map((curriculum, index) => (
                <Tab as={Fragment} key={`tab-${index}`}>
                  {({ selected }) => (
                    <button
                      className={`text-left leading-snug lg:leading-none text-lg lg:text-xl font-heading w-full py-1.5 lg:py-2 focus:outline-none ${
                        selected ? "text-brand-lightblue" : ""
                      }`}
                    >
                      <span>{curriculum.title}</span>
                      <span className="ml-1.5 -mt-px text-sm text-gray-500">
                        ({curriculum.duration})
                      </span>
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <div className="flex-1 mt-10 lg:mt-0">
            <Tab.Panels>
              {curriculums.map((curriculum, index) => (
                <Tab.Panel key={`curriculum-${index}`}>
                  <h3 className="text-3xl text-brand-lightblue">
                    {curriculum.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {curriculum.materials.map((item, index) => (
                      <li key={`material-${index}`} className="flex space-x-3">
                        <span className="relative flex h-2.5 w-2.5 translate-y-2.5">
                          <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-brand-lightblue"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-lightblue"></span>
                        </span>
                        <span className="text-xl">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
};

export default AcademyCurriculum;
