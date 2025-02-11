import { ITEMS_PER_PAGE } from "@/config";

import { Sailing, SailingParamsConversion, SailingData } from "@/types";

export const filterData = (
  data: Sailing[],
  params: SailingParamsConversion
): SailingData => {
  const { page, sort, order, departure, cruiseline } = params;

  const filteredDataBySearch = searchData(data, departure, cruiseline);

  const sortedData = sortData(filteredDataBySearch, sort, order);

  return paginateData(sortedData, page);
};

export const searchData = (
  data: Sailing[],
  departure: string,
  cruiseline: string
): Sailing[] => {
  if (departure || cruiseline) {
    return data.filter((cruise) => {
      const matchDepartureDate =
        departure && cruise.departureDate
          ? cruise.departureDate.replace(/[-–—]/g, "-").trim() ===
            departure.replace(/[-–—]/g, "-").trim()
          : true;

      const matchCruiseLine = cruiseline
        ? cruise.ship.line.name.toLowerCase().includes(cruiseline.toLowerCase())
        : true;

      return matchDepartureDate && matchCruiseLine;
    });
  } else {
    return data;
  }
};

export const sortData = (
  data: Sailing[],
  sort: string,
  order: string
): Sailing[] => {
  if (!sort && !order) {
    return data;
  } else {
    return data.slice().sort((a, b) => {
      const valueA =
        sort === "departureDate" ? new Date(a[sort]) : a[sort as keyof Sailing];
      const valueB =
        sort === "departureDate" ? new Date(b[sort]) : b[sort as keyof Sailing];

      if (order === "asc") {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });
  }
};

export const paginateData = (data: Sailing[], page: number): SailingData => {
  if (page < 1) {
    return {
      totalItems: data.length,
      totalPages: data.length / ITEMS_PER_PAGE,
      results: data,
    };
  } else {
    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const results = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return {
      totalItems: data.length,
      totalPages,
      results,
    };
  }
};
