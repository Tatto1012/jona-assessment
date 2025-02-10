import { Sailing, SelectOption } from "@/types";

const ITEMS_PER_PAGE = 3;

export const filterData = (
  data: Sailing[],
  currentPage?: number,
  selectedOption?: SelectOption,
  q?: { [key: string]: string }
) => {
  // filter by search
  const filteredDataBySearch = q !== undefined ? searchData(data, q) : data;
  // sort by category asc/desc
  const sortedData =
    selectedOption !== undefined
      ? sortData(filteredDataBySearch, selectedOption)
      : filteredDataBySearch;
  // paginate results
  return currentPage && currentPage > 0
    ? paginateData(sortedData, currentPage)
    : paginateData(sortedData, 1);
};

export const searchData = (
  data: Sailing[],
  criteria: { [key: string]: string }
) => {
  return data.filter((cruise) => {
    const matchDepartureDate = criteria.departureDate
      ? cruise.departureDate.includes(criteria.departureDate)
      : true;

    const matchCruiseLine = criteria.cruiseLine
      ? cruise.ship.line.name
          .toLowerCase()
          .includes(criteria.cruiseLine.toLowerCase())
      : true;

    return matchDepartureDate && matchCruiseLine;
  });
};

export const sortData = (data: Sailing[], selectedOption: SelectOption) => {
  const {
    value: [key, order],
  } = selectedOption;

  return data.slice().sort((a, b) => {
    const valueA = key === "departureDate" ? new Date(a[key]) : a[key];
    const valueB = key === "departureDate" ? new Date(b[key]) : b[key];

    if (order === "asc") {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });
};

export const paginateData = (data: Sailing[], currentPage: number) => {
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const results = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return {
    totalItems: data.length,
    totalPages,
    results,
  };
};
