import * as React from "react"
import { type UseFormRegisterReturn } from "react-hook-form"

import { cn } from "@/utils/cn"

import {
  FieldWrapper,
  type FieldWrapperPassThroughProps,
} from "./field-wrapper"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    className?: string
    registration: Partial<UseFormRegisterReturn>
  }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, registration, ...props }, ref) => {
    return (
      <FieldWrapper label={label} error={error}>
        <input
          type={type}
          className={cn(
            "border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...registration}
          {...props}
        />
      </FieldWrapper>
    )
  }
)
Input.displayName = "Input"

export { Input }
