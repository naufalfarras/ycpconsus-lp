"use client";

import ComboboxCountries from "@/components/ComboboxCountries";
import InputNumber from "@/components/InputNumber";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import ComboboxJobPositions from "./ComboboxJobPositions";
import { postApplyJob } from "@/lib/api";

const ApplyJobForm = ({ positions }) => {
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
    const payload = {
      ...data,
      job_position: data.job_position.position,
      country: data.country.name,
    };
    const response = await postApplyJob(payload);
    if (response.ok) {
      router.push("/apply-success");
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
      <div className="col-span-6">
        <Controller
          control={control}
          name="job_position"
          defaultValue={undefined}
          rules={{ required: true }}
          render={({ field }) => (
            <ComboboxJobPositions
              options={positions}
              onChange={field.onChange}
            />
          )}
        />
        {errors.job_position && (
          <p className="mt-2 text-sm text-red-600">Job Position is required</p>
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
      <div className="col-span-6">
        <input
          type="text"
          {...register("highest_degree")}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Highest Education (Degree)"
        />
      </div>
      <div className="col-span-6">
        <input
          type="text"
          {...register("highest_institute", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Highest Education (Institute) *"
        />
        {errors.highest_institute && (
          <p className="mt-2 text-sm text-red-600">
            Education Institute is required
          </p>
        )}
      </div>
      <div className="col-span-6">
        <Controller
          control={control}
          name="years_experience"
          defaultValue={undefined}
          rules={{ required: true }}
          render={({ field }) => (
            <InputNumber
              {...field}
              ref={null}
              placeholder="Total Years of Experience *"
            />
          )}
        />
        {errors.phone_number && (
          <p className="mt-2 text-sm text-red-600">Phone number is required</p>
        )}
      </div>
      <div className="col-span-6">
        <input
          type="text"
          {...register("current_organisation", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Current Organisation *"
        />
        {errors.current_organisation && (
          <p className="mt-2 text-sm text-red-600">Organisation is required</p>
        )}
      </div>
      <div className="col-span-6">
        <input
          type="text"
          {...register("current_remuneration")}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Current Annual Remuneration"
        />
        {errors.current_remuneration && (
          <p className="mt-2 text-sm text-red-600">
            Current Remuneration is required
          </p>
        )}
      </div>
      <div className="col-span-6">
        <input
          type="text"
          {...register("expected_remuneration")}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Expected Annual Remuneration"
        />
        {errors.expected_remuneration && (
          <p className="mt-2 text-sm text-red-600">
            Expected Remuneration is required
          </p>
        )}
      </div>
      <div className="col-span-6">
        <input
          type="text"
          {...register("current_location", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Current Location *"
        />
        {errors.current_location && (
          <p className="mt-2 text-sm text-red-600">
            Current location is required
          </p>
        )}
      </div>
      <div className="col-span-6">
        <input
          type="text"
          {...register("preferred_job_location", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Preferred Job Location *"
        />
        {errors.preferred_job_location && (
          <p className="mt-2 text-sm text-red-600">
            Preferred Job location is required
          </p>
        )}
      </div>
      <div className="col-span-6">
        <input
          type="text"
          {...register("linkedin_link", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Linkedin Link *"
        />
        {errors.linkedin_link && (
          <p className="mt-2 text-sm text-red-600">Linkedin link is required</p>
        )}
      </div>
      <div className="col-span-6">
        <input
          type="text"
          {...register("portfolio_link", { required: true })}
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Portfolio Link *"
        />
        {errors.portfolio_link && (
          <p className="mt-2 text-sm text-red-600">
            Portfolio link is required
          </p>
        )}
      </div>
      <div className="col-span-12">
        <textarea
          {...register("key_skills_summary", { required: true })}
          rows="5"
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          placeholder="Key Skills Summary *"
        />
        {errors.key_skills_summary && (
          <p className="mt-2 text-sm text-red-600">
            Please describe your key skills
          </p>
        )}
      </div>
      <div className="col-span-12">
        <button
          type="submit"
          className="inline-flex items-center space-x-3.5"
          disabled={isLoading}
        >
          <span>{isLoading ? "Submitting..." : "Apply Now"}</span>
          <span className="inline-flex items-center justify-center w-12 h-12 text-white rounded-full bg-gradient-to-r from-blue-400 to-blue-800">
            <ArrowRight weight="bold" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ApplyJobForm;
