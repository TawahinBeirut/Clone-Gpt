import * as React from "react"

import { cn } from "@/lib/utils"
import { VariantProps, cva } from "class-variance-authority"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>{
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "block w-full px-4 py-2 mt-2 text-black bg-transparent border-2 border-gray-600 rounded-xl focus:border-black focus:ring-4 focus:ring-GoldInput text-center placeholder:text-slate-700",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
