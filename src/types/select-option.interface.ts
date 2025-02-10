export interface SelectOption {
  label: string;
  detail?: string;
  value:
    | ["price" | "duration" | "departureDate" | "", "asc" | "desc" | ""]
    | string;
}
