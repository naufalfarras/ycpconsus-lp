"use client";

import InputNumber from "@/components/InputNumber";
import { postInquiry } from "@/lib/api";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useReCaptcha } from "next-recaptcha-v3";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useReCaptcha();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const token = await executeRecaptcha("contact_form");
    const response = await fetch("/api/verify-captcha", {
      method: "POST",
      body: JSON.stringify({ token }),
    });
    const result = await response.json();
    if (result.success && result.score > 0.5) {
      setIsLoading(true);
      const response = await postInquiry(data);
      if (response.ok) {
        router.push("/submission-success");
      }
      setIsLoading(false);
    }
  }
  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="grid grid-cols-12 mt-8 lg:mt-10 gap-y-6 gap-x-5"
    >
      <div className="col-span-12">
        <input
          type="text"
          {...register("full_name", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Full Name"
        />
        {errors.full_name && (
          <p className="mt-2 text-sm text-red-600">Full name is required</p>
        )}
      </div>
      <div className="col-span-6">
        <input
          type="email"
          {...register("email", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Email"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">Email is required</p>
        )}
      </div>
      <div className="col-span-6">
        <Controller
          control={control}
          name="phone_number"
          defaultValue={undefined}
          rules={{ required: true }}
          render={({ field }) => (
            <InputNumber {...field} placeholder={"Phone Number"} ref={null} />
          )}
        />
        {errors.phone_number && (
          <p className="mt-2 text-sm text-red-600">Phone number is required</p>
        )}
      </div>
      <div className="col-span-12">
        <input
          type="text"
          {...register("company", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Company"
        />
        {errors.company && (
          <p className="mt-2 text-sm text-red-600">Company is required</p>
        )}
      </div>
      <div className="col-span-12">
        <input
          type="text"
          {...register("job_title", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Job Title"
        />
        {errors.job_title && (
          <p className="mt-2 text-sm text-red-600">Job title is required</p>
        )}
      </div>
      <div className="col-span-12">
        <textarea
          {...register("needs", { required: true })}
          rows="5"
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Describe your Needs"
        />
        {errors.needs && (
          <p className="mt-2 text-sm text-red-600">
            Please describe your needs
          </p>
        )}
      </div>
      <div className="col-span-12">
        <button
          type="submit"
          className="inline-flex items-center space-x-3.5"
          disabled={isLoading}
        >
          <span>{isLoading ? "Submitting..." : "Submit"}</span>
          <span className="inline-flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-800">
            <ArrowRight weight="bold" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
