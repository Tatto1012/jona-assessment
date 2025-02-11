import { API_URL } from "@/config";
import { Sailing, SailingsResponse } from "@/types";

export const fetchSailings = async (): Promise<Sailing[]> => {
  const endpoint = `${API_URL}/sailings`;
  const response: SailingsResponse = await fetch(endpoint, {
    next: { revalidate: 3600 },
  }).then((response) => response.json());

  if (response.results) {
    return response.results;
  }

  return [];
};
