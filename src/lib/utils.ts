import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(value: number): string {
  if (value >= 1_000_000_000) {
    return (
      (value / 1_000_000_000).toFixed(value % 1_000_000_000 === 0 ? 0 : 1) + "B"
    );
  }
  if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1) + "M";
  }
  if (value >= 1_000) {
    return (value / 1_000).toFixed(value % 1_000 === 0 ? 0 : 1) + "K";
  }
  return value.toString();
}
