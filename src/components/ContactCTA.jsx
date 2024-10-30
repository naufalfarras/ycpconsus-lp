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
      <div className="relative">
        <h2 className="max-w-2xl mx-auto text-3xl tracking-tight text-center sm:text-5xl">
          {title}
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-lg leading-snug text-center">
          {`Reach out to us today and let us help you make your vision a reality.`}
        </p>
        <form
          onSubmit={handleSubmit((data) => onSubmit(data))}
          className="grid max-w-xl grid-cols-6 gap-4 mx-auto mt-10 gap-x-4"
        >
          <input
            type="hidden"
            {...register("source")}
            value={"ycpconsus.com"}
          />
          <div className="col-span-6">
            <label className="text-sm leading-none ">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full mt-2  border rounded-md bg-gray-200/70 border-transparent focus:border-brand-lightblue py-1.5"
              {...register("full_name", { required: true })}
            />
            {errors.full_name && (
              <p className="mt-2 text-sm text-red-600">Full name is required</p>
            )}
          </div>
          <div className="col-span-3">
            <label className="text-sm leading-none ">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="w-full mt-2  border rounded-md bg-gray-200/70 border-transparent focus:border-brand-lightblue py-1.5"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600">Email is required</p>
            )}
          </div>
          <div className="col-span-3">
            <label className="text-sm leading-none ">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Controller
              control={control}
              name="phone_number"
              defaultValue={undefined}
              rules={{ required: true }}
              render={({ field }) => (
                <InputNumber
                  customClass={`w-full mt-2  border rounded-md bg-gray-200/70 border-transparent focus:border-brand-lightblue py-1.5`}
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
            <label className="text-sm leading-none ">
              Company <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full mt-2  border rounded-md bg-gray-200/70 border-transparent focus:border-brand-lightblue py-1.5"
              {...register("company", { required: true })}
            />
            {errors.company && (
              <p className="mt-2 text-sm text-red-600">Company is required</p>
            )}
          </div>
          <div className="col-span-3">
            <label className="text-sm leading-none ">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full mt-2  border rounded-md bg-gray-200/70 border-transparent focus:border-brand-lightblue py-1.5"
              {...register("job_title", { required: true })}
            />
            {errors.job_title && (
              <p className="mt-2 text-sm text-red-600">Job title is required</p>
            )}
          </div>
          <div className="col-span-6">
            <label className="text-sm leading-none ">
              Describe your Needs <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full mt-2  border rounded-md bg-gray-200/70 border-transparent focus:border-brand-lightblue py-1.5"
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
            <span className="block">
              {isLoading ? "Submitting..." : "Submit"}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactCTA;
