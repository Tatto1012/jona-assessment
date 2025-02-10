"use client";

import { JSX } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import clsx from "clsx";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  [key: string]: unknown;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps): JSX.Element {
  currentPage = Number(currentPage);
  const pathname = usePathname();
  const params = useSearchParams();
  const query = Object.fromEntries(params);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 3;

    if (totalPages <= maxVisible + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= maxVisible) {
      pages.push(
        ...Array.from({ length: maxVisible }, (_, i) => i + 1),
        "...",
        totalPages
      );
    } else if (currentPage >= totalPages - maxVisible + 1) {
      pages.push(
        1,
        "...",
        ...Array.from(
          { length: maxVisible },
          (_, i) => totalPages - maxVisible + 1 + i
        )
      );
    } else {
      pages.push(
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages
      );
    }

    return pages;
  };

  return (
    <ul className="flex justify-start gap-4 mt-5 p-5 bg-secondary-250 rounded w-auto text-xl">
      <li>
        <Link
          aria-disabled={currentPage <= 1}
          href={{
            pathname,
            query: {
              ...query,
              page: currentPage - 1 > 0 ? currentPage - 1 : 1,
            },
          }}
          className="text-primary w-10 grid place-content-center"
        >
          <b
            className={clsx(
              "material-icons",
              currentPage === 1 ? "text-primary-200" : "text-primary-150"
            )}
          >
            chevron_left
          </b>
        </Link>
      </li>

      {getPageNumbers().map((page, index) => (
        <li key={index}>
          <Link
            href={{
              pathname,
              query: {
                ...query,
                page,
              },
            }}
            className={clsx(
              "flex w-8 h-8 rounded-full place-content-center",
              currentPage === page ? "bg-primary-100" : ""
            )}
          >
            {page}
          </Link>
        </li>
      ))}

      <li>
        <Link
          aria-disabled={currentPage <= 1}
          href={{
            pathname,
            query: {
              ...query,
              page: currentPage + 1 > 0 ? currentPage + 1 : 1,
            },
          }}
          className="text-primary w-10 grid place-content-center"
        >
          <b
            className={clsx(
              "material-icons",
              currentPage === totalPages
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
