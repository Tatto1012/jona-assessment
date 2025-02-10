"use client";

import { JSX } from "react";
import { Select } from "@/components";
import { getSortOptionList } from "@/helpers";

type SearchProps = {
  [key: string]: unknown;
};

export default function Sort({ ...rest }: SearchProps): JSX.Element {
  const optionList = getSortOptionList();

  return (
    <div className="flex flex-row items-center gap-5" {...rest}>
      <b className="text-xl">Sort By</b>
      <Select
        options={optionList}
        placeholder="Sort current results"
        onChange={(selected) => {
          console.log(selected);
        }}
      />
    </div>
  );
}
