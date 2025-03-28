import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "~/lib/utils";

const buttonStyles = cva(
  cn(
    "flex gap-2 items-center transition-all tracking-widest duration-300 ease-in-out",
  ),
  {
    variants: {
      intent: {
        primary:
          "bg-gradient-to-tr from-secondary-800 to-secondary-600 text-white -skew-x-12",
        secondary: "bg-gray-700 text-gray-200 hover:bg-gray-600",
        danger: "bg-red-500 text-white hover:bg-red-600",
        success: "bg-green-500 text-white hover:bg-green-600",
        info: "bg-teal-500 text-white hover:bg-teal-600",
        dark: "bg-gray-900/60 text-white hover:bg-opacity-30",
        ghost:
          "bg-transparent border-secondary-700 border  text-[#D79128] -skew-x-12 backdrop-blur-md backdrop-filter",
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-sm md:text-base", "py-1 md:py-2", "px-2 md:px-4"],
        large: ["text-lg", "py-2", "px-4"],
        xlarge: ["text-lg md:text-3xl", "py-2"],
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
      outline: {
        true: "border bg-transparent",
        false: "border-0",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed pointer-events-none",
      },
    },
    compoundVariants: [
      {
        intent: "danger",
        outline: true,
        className: "hover:bg-red-500/30 border-red-500 text-red-500",
      },
      {
        intent: "success",
        outline: true,
        className: "hover:bg-green-500/30 border-green-500 text-green-500",
      },
      {
        intent: "info",
        outline: true,
        className: "hover:bg-teal-500/30 border-teal-500 text-teal-500",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  },
);

type ButtonProps = {
  disabled?: boolean;
  noScaleOnHover?: boolean;
  variant?: string;
} & VariantProps<typeof buttonStyles> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  intent,
  size,
  fullWidth,
  children,
  outline,
  disabled,
  className,
  noScaleOnHover,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${
        noScaleOnHover
          ? "hover:scale-100"
          : "transition-transform duration-300 ease-in-out hover:scale-[1.03]"
      } ${className + " active:scale-90"} ${buttonStyles({
        intent,
        size,
        fullWidth,
        outline,
        disabled,
      })}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
