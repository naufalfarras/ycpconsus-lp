import { Envelope, Mailbox } from "@phosphor-icons/react/dist/ssr";
import React from "react";

export default function StickyContact() {
  return (
    <div>
      <a
        href="#contact-us"
        className="fixed bottom-0 right-0 z-50 flex items-center justify-center mb-24 mr-6 text-2xl text-white transition-transform duration-500 transform translate-x-0"
      >
        <div className="relative z-10 flex items-center justify-center w-10 h-10 p-1 rounded-full md:w-12 md:h-12 bg-brand-lightblue">
          <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 m-1 bg-white rounded-full md:h-10 md:w-10 text-brand-lightblue">
            <Envelope />
          </div>
        </div>
        <div className="relative flex items-center py-3 pl-6 pr-3 -ml-5 rounded-r-full md:pl-5 md:-ml-4 bg-brand-lightblue">
          <p className="relative z-10 text-xs font-medium leading-snug">
            Send Inquiry
          </p>
        </div>
      </a>
    </div>
    //  <a
    //    href="#contact-us"
    //    className="fixed inline-flex items-center justify-center text-white rounded-full shadow-md w-14 h-14 bottom-24 right-3 bg-brand-lightblue"
    //  >
    //    <Envelope className="text-3xl" />
    //  </a>
  );
}
