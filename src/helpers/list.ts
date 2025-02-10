import { Sailing, SelectOption } from "@/types";

export const getSortOptionList = (): SelectOption[] => {
  return [
    {
      label: "Price",
      detail: "Lowest First",
      value: ["price", "asc"],
    },
    {
      label: "Price",
      detail: "Highest First",
      value: ["price", "desc"],
    },
    {
      label: "Departure Date",
      detail: "Nearby First",
      value: ["departureDate", "asc"],
    },
    {
      label: "Departure Date",
      detail: "Far Away First",
      value: ["departureDate", "desc"],
    },
    {
      label: "Duration",
      detail: "Shorter First",
      value: ["duration", "asc"],
    },
    {
      label: "Duration",
      detail: "Longest First",
      value: ["duration", "desc"],
    },
  ];
};

export const getCruiseLineList = (sailing: Sailing[]): SelectOption[] => {
  const uniqueNames = new Set<string>();

  return sailing.reduce<SelectOption[]>((list, item) => {
    const cruiseLineName = item?.ship?.line?.name;

    if (cruiseLineName && !uniqueNames.has(cruiseLineName)) {
      uniqueNames.add(cruiseLineName);
      list.push({
        label: cruiseLineName,
        value: cruiseLineName,
      });
    }

    return list;
  }, []);
};
