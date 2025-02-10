"use client";

import { SelectOption } from "@/types";
import clsx from "clsx";
import { useState } from "react";
import { JSX } from "react";

type SelectProps = {
  options: SelectOption[];
  placeholder: string;
  showDetail?: boolean;
  onChange?: (option: SelectOption) => void;
  customClassName?: string;
};

export default function Select({
  options,
  placeholder,
  showDetail = true,
  onChange,
  customClassName,
}: SelectProps): JSX.Element {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<SelectOption>({
    label: "",
    detail: "",
    value: ["", ""],
  });

  const handleSelect = (option: SelectOption) => {
    setShowOptions(!showOptions);
    setSelected(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className={clsx("relative w-64 ", customClassName)}>
      <button
        className="w-full px-4 py-2 text-left bg-primary-100 border rounded-lg shadow focus:outline-none flex items-center"
        onClick={() => setShowOptions(!showOptions)}
      >
        <div className="flex flex-col flex-1">
          <b>{selected.label || placeholder}</b>
          {showDetail && (
            <div className="text-secondary-150">
              {selected.detail || placeholder}
            </div>
          )}
        </div>
        <b className="material-icons text-4xl">arrow_drop_down</b>
      </button>

      {showOptions && (
        <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-md">
          {options.map((option, index) => (
            <div
              key={option.label + index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              <b>{option.label}</b>
              {showDetail && (
                <div className="text-secondary-150">{option.detail}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
