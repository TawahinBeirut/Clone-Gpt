import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { createContext } from "react"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type PageContextType = {
  Name: string | null
  Email: string | null,
  ApiKey: string | null,
  change : (arg0: boolean) => void,
}

export type ChatProps = {
  User : string,
  Text : string,
  mode: string
}
export const RequestType = {
  CHAT: "0",
  IMAGE: "1"
}


export const PageContext = createContext<PageContextType>({Name:"",Email:"",ApiKey:"",change() {}});