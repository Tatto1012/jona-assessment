import dayjs from "dayjs";

export const formatDate = (
  departureStringDate: string,
  returnStringDate: string
) => {
  if (
    !dayjs(departureStringDate).isValid() ||
    !dayjs(returnStringDate).isValid()
  ) {
    return "";
  }

  const returnDay = dayjs(returnStringDate).format("DD");
  const departure = dayjs(departureStringDate).format(
    "MMM DD - ${Return}, YYYY"
  );

  return departure.replace("${Return}", returnDay);
};

export const formatPrice = (stringPrice: number) => {
  if (!stringPrice || isNaN(Number(stringPrice))) return "";

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })
    .format(stringPrice)
    .replace("$", "");
};
