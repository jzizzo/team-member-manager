import { TeamMember } from "./types/types";

export const capitalizeString = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const formatMobile = (str: TeamMember["phone_number"]) =>
  `${str.slice(0, 3)}-${str.slice(3, 6)}-${str.slice(6)}`;

// Url prefixes would be set dynamically in .env files once multiple environments were supported
export const urlPrefix = "http://localhost:8000";
