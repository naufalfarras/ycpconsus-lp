import Offices from "@/components/Offices";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { metadataBase } from "@/app/shared-metadata.js";

export const metadata = {
  metadataBase,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Contact Our Experts",
  description:
    "Get in touch with us to learn more about our flexible solutions for resilient businesses.",
  keywords: ["contact us"],
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative pb-20 overflow-hidden bg-white border-t isolate"
    >
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
      <div className="items-center max-w-6xl px-4 pt-10 mx-auto pb-14 2xl:max-w-7xl lg:flex lg:pt-20 lg:pb-32">
        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <h2 className="text-4xl tracking-tight lg:text-6xl">Contact Us</h2>
          <p className="mt-5">
            {`Get in touch with us today. We are always eager to help bring your
         vision to life.`}
          </p>
          <ContactForm />
        </div>
        <div className="hidden max-w-2xl mx-auto mt-16 lg:flex sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
            <div className="p-2 -m-2 rounded-xl bg-gray-900/5 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/uploads/hand_holding_smart_phone_typing_text_message_generated_by_ai_54c724b850.jpg`}
                alt="Contact Us"
                width={832}
                height={953}
                className="w-[50rem] max-h-[60rem] rounded-md object-cover shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
      <Offices />
    </section>
  );
};

export default Contact;
