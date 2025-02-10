import { Sailing, SailingsResponse } from "@/types";

const API_URL = process.env.API_URL || "https://sandbox.cruisebound-qa.com";

export const fetchSailings = async (): Promise<Sailing[]> => {
  const endpoint = `${API_URL}/sailings`;
  const response: SailingsResponse = await fetch(endpoint).then((response) =>
    response.json()
  );

  if (response.results) {
    return response.results;
  }

  return [];
};
