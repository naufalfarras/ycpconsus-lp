"use client";

import React, { useState } from "react";
import Input from "./Input";
import { Controller, useForm } from "react-hook-form";
import InputNumber from "./InputNumber";
import { postInquiry } from "@/lib/api";
import { useRouter } from "next/navigation";

const ContactCTA = ({ title }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setIsLoading(true);
    const response = await postInquiry(data);
    if (response.ok) {
      router.push("/submission-success");
    }
    setIsLoading(false);
  }
  return (
    <section className="max-w-6xl px-4 mx-auto 2xl:max-w-7xl">
      <div className="relative px-4 pt-8 pb-5 overflow-hidden bg-gray-900 rounded-lg shadow-2xl lg:py-20 isolate sm:rounded-3xl">
        <h2 className="max-w-2xl mx-auto text-3xl tracking-tight text-center text-white sm:text-5xl">
          {title}
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-lg leading-snug text-center text-gray-300">
          {`Reach out to us today and let us help you make your vision a reality.`}
        </p>
        <form
          onSubmit={handleSubmit((data) => onSubmit(data))}
          className="grid max-w-lg grid-cols-6 gap-4 mx-auto mt-10 gap-x-4"
        >
          <div className="col-span-6">
            <label className="text-sm leading-none text-white">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full mt-2 text-white border rounded-md border-white/10 bg-white/5 py-1.5"
              {...register("full_name", { required: true })}
            />
            {errors.full_name && (
              <p className="mt-2 text-sm text-red-600">Full name is required</p>
            )}
          </div>
          <div className="col-span-3">
            <label className="text-sm leading-none text-white">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full mt-2 text-white border rounded-md border-white/10 bg-white/5 py-1.5"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">Email is required</p>
            )}
          </div>
          <div className="col-span-3">
            <label className="text-sm leading-none text-white">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Controller
              control={control}
              name="phone_number"
              defaultValue={undefined}
              rules={{ required: true }}
              render={({ field }) => (
                <InputNumber
                  customClass={`text-white py-1.5 mt-2 border border-white/10 rounded-md bg-white/5 w-full`}
                  placeholder={false}
                  {...field}
                  ref={null}
                />
              )}
            />
            {errors.phone_number && (
              <p className="mt-2 text-sm text-red-600">
                Phone number is required
              </p>
            )}
          </div>
          <div className="col-span-3">
            <label className="text-sm leading-none text-white">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full mt-2 text-white border rounded-md border-white/10 bg-white/5 py-1.5"
              {...register("company", { required: true })}
            />
            {errors.company && (
              <p className="mt-2 text-sm text-red-600">Company is required</p>
            )}
          </div>
          <div className="col-span-3">
            <label className="text-sm leading-none text-white">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full mt-2 text-white border rounded-md border-white/10 bg-white/5 py-1.5"
              {...register("job_title", { required: true })}
            />
            {errors.job_title && (
              <p className="mt-2 text-sm text-red-600">Job title is required</p>
            )}
          </div>
          <div className="col-span-6">
            <label className="text-sm leading-none text-white">
              Describe your Needs <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full mt-2 text-white border rounded-md border-white/10 bg-white/5 py-1.5"
              {...register("needs", { required: true })}
              rows="5"
            />
            {errors.needs && (
              <p className="text-sm text-red-600">Please describe your needs</p>
            )}
          </div>
          <button
            type="submit"
            className="col-span-6 px-4 py-3.5 leading-none transition bg-brand-lightblue text-white rounded-md hover:bg-blue-500"
          >
            <span className="block translate-y-0.5">
              {isLoading ? "Submitting..." : "Submit"}
            </span>
          </button>
        </form>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient
              id="759c1415-0410-454c-8f7c-9a820de03641"
              cx={0}
              cy={0}
              r={1}
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(512 512) rotate(90) scale(512)"
            >
              <stop stopColor="#001c44" />
              <stop offset={1} stopColor="#0178f8" stopOpacity={0} />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ContactCTA;
