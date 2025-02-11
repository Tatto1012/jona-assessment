import { SailingParams, SailingParamsConversion } from "@/types";

export function mapSailingParamsOrDefault(
  params: SailingParams
): SailingParamsConversion {
  return {
    page: Number(params.page) || 1,
    sort: params.sort || "",
    order: params.order || "desc",
    departure: params.departure || "",
    cruiseline: params.cruiseline || "",
  };
}

export function getPageNumbers(totalPages: number, actualPage: number) {
  const pages = [];
  const maxVisible = 3;

  if (totalPages <= maxVisible + 2) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (actualPage <= maxVisible) {
    pages.push(
      ...Array.from({ length: maxVisible }, (_, i) => i + 1),
      "...",
      totalPages
    );
  } else if (actualPage >= totalPages - maxVisible + 1) {
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
      actualPage - 1,
      actualPage,
      actualPage + 1,
      "...",
      totalPages
    );
  }

  return pages;
}

export function buildUrlQueryParams(
  params: SailingParamsConversion,
  overrides: { [key: string]: string }
) {
  return new URLSearchParams({
    ...Object.fromEntries(
      Object.entries(params).map(([k, v]) => [k, String(v)])
    ),
    ...overrides,
  });
}
