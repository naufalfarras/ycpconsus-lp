"use client";

import InputNumber from "@/components/InputNumber";
import { postWhitepaperUser } from "@/lib/api";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { saveAs } from "file-saver";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ComboboxCountries from "./ComboboxCountries";

const DownloadWhitepaper = ({ whitepaper }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    setIsLoading(true);
    const payload = {
      ...data,
      country: data.country.name,
    };
    const response = await postWhitepaperUser(payload);
    if (response.ok) {
      toast.success("Your whitepaper should be downloaded immediately");
      saveAs(
        process.env.NEXT_PUBLIC_BASE_URL + whitepaper.url,
        whitepaper.name
      );
    }
    setIsLoading(false);
  }
  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="grid grid-cols-12 mt-8 lg:mt-10 gap-y-6 gap-x-5"
    >
      <div className="col-span-6">
        <input
          type="text"
          {...register("first_name", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="First Name"
        />
        {errors.first_name && (
          <p className="mt-2 text-sm text-red-600">First name is required</p>
        )}
      </div>
      <div className="col-span-6">
        <input
          type="text"
          {...register("last_name", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Last Name"
        />
        {errors.last_name && (
          <p className="mt-2 text-sm text-red-600">Last name is required</p>
        )}
      </div>
      <div className="col-span-12">
        <input
          type="email"
          {...register("email", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Email Address"
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-600">Email is required</p>
        )}
      </div>
      <div className="col-span-6">
        <input
          type="text"
          {...register("company", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Company Name"
        />
        {errors.company && (
          <p className="mt-2 text-sm text-red-600">Company name is required</p>
        )}
      </div>
      <div className="col-span-6">
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

      <div className="col-span-6">
        <Controller
          control={control}
          name="phone_number"
          defaultValue={undefined}
          rules={{ required: true }}
          render={({ field }) => (
            <InputNumber {...field} ref={null} placeholder="Phone Number" />
          )}
        />
        {errors.phone_number && (
          <p className="mt-2 text-sm text-red-600">Phone number is required</p>
        )}
      </div>
      <div className="col-span-6">
        <Controller
          control={control}
          name="country"
          rules={{ required: true }}
          defaultValue={undefined}
          render={({ field }) => (
            <ComboboxCountries onChange={field.onChange} />
          )}
        />
        {errors.country && (
          <p className="mt-2 text-sm text-red-600">Country is required</p>
        )}
      </div>
      <div className="col-span-12">
        <button
          type="submit"
          className="inline-flex items-center space-x-3.5"
          disabled={isLoading}
        >
          <span>{isLoading ? "Processing..." : "Download"}</span>
          <span className="inline-flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-800">
            <ArrowRight weight="bold" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default DownloadWhitepaper;
