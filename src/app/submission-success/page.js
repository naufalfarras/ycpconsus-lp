import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const SubmissionSuccess = () => {
  return (
    <div className="flex items-center justify-center h-[75vh]">
      <div className="px-4 mx-auto text-center">
        <Image
          width={400}
          height={400}
          alt="Message Sent"
          src={"/images/message-sent.svg"}
          className="w-40 mx-auto lg:w-56"
        />
        <h1 className="mt-4 text-3xl font-bold tracking-tighter font-heading lg:text-6xl">
          Successfully Sent!
        </h1>
        <p className="max-w-xl mx-auto mt-3 text-sm lg:leading-snug lg:mt-6 lg:text-lg">
          Thank you for your inquiry. <br /> We will review your message and
          contact you shortly.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-3.5 mt-7 lg:mt-10"
        >
          <span className="translate-y-1">Go to Homepage</span>
          <span className="inline-flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-800">
            <ArrowRight weight="bold" />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SubmissionSuccess;
