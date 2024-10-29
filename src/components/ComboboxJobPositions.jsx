"use client";

import countries from "@/lib/countries.json";
import { Combobox } from "@headlessui/react";
import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ComboboxJobPositions({ options, onChange }) {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) => {
          return option.position.toLowerCase().includes(query.toLowerCase());
        });

  const handleChange = (value) => {
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <Combobox as="div" value={selectedOption} onChange={handleChange}>
      <div className="relative">
        <Combobox.Input
          className="block leading-none w-full border-0 border-b-2 border-brand-primary/20 focus:ring-0 pl-0 focus:border-blue-800 py-1.5 pr-10 placeholder:text-brand-primary"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(value) => value?.position}
          placeholder="Select Job Position *"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md focus:outline-none">
          <CaretDown className="w-5 h-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredOptions?.length > 0 && (
          <Combobox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOptions.map((option) => (
              <Combobox.Option
                key={`country-${option.id}`}
                value={option}
                className={({ active, selected }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-brand-lightblue text-white" : "text-gray-900",
                    selected && "bg-brand-lightbue"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <span
                        className={classNames(
                          "ml-3 truncate",
                          selected && "font-medium"
                        )}
                      >
                        {option.position}
                      </span>
                    </div>
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
