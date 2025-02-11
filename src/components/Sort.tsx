"use client";

import { JSX } from "react";
import { Select } from "@/components";
import { buildUrlQueryParams, getSortOptionList } from "@/helpers";
import { usePathname, useRouter } from "next/navigation";
import { SailingParamsConversion } from "@/types";

type SearchProps = {
  params: SailingParamsConversion;
  [key: string]: unknown;
};

export default function Sort({ params, ...rest }: SearchProps): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const optionList = getSortOptionList();

  return (
    <div
      className="flex flex-col lg:flex-row items-center gap-3 lg:gap-5 mb-5 lg:mb-3 z-20"
      {...rest}
    >
      <b className="text-xl">Sort By</b>
      <Select
        options={optionList}
        placeholder="Sort current results"
        onChange={(selected) => {
          const {
            value: [sort, order],
          } = selected;

          const buildParams = buildUrlQueryParams(params, {
            sort,
            order,
          });

          router.push(`${pathname}?${buildParams}`);
        }}
      />
    </div>
  );
}
