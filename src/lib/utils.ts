import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type PageContextType = {
  Name: string | null
  Email: string | null,
  ApiKey: string | null,
  change : (arg0: boolean) => void
}
