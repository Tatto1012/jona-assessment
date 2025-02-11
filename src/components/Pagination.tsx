"use client";

import { JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SailingParamsConversion } from "@/types";
import { getPageNumbers } from "@/helpers";

type PaginationProps = {
  params: SailingParamsConversion;
  totalPages: number;
  [key: string]: unknown;
};

export default function Pagination({
  params,
  totalPages,
}: PaginationProps): JSX.Element {
  const { page: actualPage } = params;
  const pathname = usePathname();

  return (
    <ul className="flex justify-start lg:gap-4 mt-5 p-2 lg:p-5 bg-secondary-250 rounded w-auto lg:text-xl">
      <li>
        <Link
          aria-disabled={actualPage <= 1}
          href={{
            pathname,
            query: {
              ...params,
              page: actualPage - 1 > 0 ? actualPage - 1 : 1,
            },
          }}
          className="text-primary w-10 grid place-content-center"
        >
          <b
            className={clsx(
              "material-icons",
              actualPage === 1 ? "text-primary-200" : "text-primary-150"
            )}
          >
            chevron_left
          </b>
        </Link>
      </li>

      {getPageNumbers(totalPages, actualPage).map((page, index) => (
        <li key={index}>
          <Link
            href={{
              pathname,
              query: {
                ...params,
                page,
              },
            }}
            className={clsx(
              "flex w-6 h-6 lg:w-8 lg:h-8 rounded-full place-content-center",
              actualPage === page ? "bg-primary-100" : ""
            )}
          >
            {page}
          </Link>
        </li>
      ))}

      <li>
        <Link
          aria-disabled={actualPage <= 1}
          href={{
            pathname,
            query: {
              ...params,
              page: actualPage + 1 > 0 ? actualPage + 1 : 1,
            },
          }}
          className="text-primary w-10 grid place-content-center"
        >
          <b
            className={clsx(
              "material-icons",
              actualPage === totalPages
                ? "text-primary-200"
                : "text-primary-150"
            )}
          >
            chevron_right
          </b>
        </Link>
      </li>
    </ul>
  );
}
