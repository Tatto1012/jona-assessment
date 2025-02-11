import { Sailing } from "./sailing.interface";

export type SailingParams = {
  page?: string;
  sort?: string;
  order?: string;
  departure?: string;
  cruiseline?: string;
};

export type SailingParamsConversion = {
  page: number;
  sort: string;
  order: string;
  departure: string;
  cruiseline: string;
};

export type SailingData = {
  totalItems: number;
  totalPages: number;
  results: Sailing[];
};
