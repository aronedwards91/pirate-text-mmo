import * as React from "react"

import { cn } from "@/utils/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex h-10 w-full px-3 py-2
        text-sm file:text-sm text-black file:font-medium file:border-0 file:bg-transparent
        rounded-md border border-rust-500
        bg-rust-400 ring-offset-flame-500
        placeholder:text-white
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950
        focus-visible:ring-offset-2 disabled:cursor-not-allowed
        disabled:opacity-50`,
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
