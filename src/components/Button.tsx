import { cva } from "class-variance-authority";
import { JSX } from "react";

type ButtonColor = "primary" | "secondary" | "shade";
type ButtonSize = "small" | "normal" | "large";

type ButtonVariantsProps = {
  color?: ButtonColor;
  size?: ButtonSize;
};

type ButtonProps = ButtonVariantsProps & {
  customClassNames?: string;
  children: React.ReactNode;
  [key: string]: unknown;
};

type ButtonVariantsFunction = (props: ButtonVariantsProps) => string;

const ButtonVariants: ButtonVariantsFunction = cva(
  [
    "text-primary-100 font-bold rounded transition-colors duration-150 cursor-pointer flex justify-center items-center",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "focus:outline-none",
  ].join(" "),
  {
    variants: {
      color: {
        primary: [
          "bg-primary-150",
          "hover:bg-primary-200 hover:text-primary-150",
        ].join(" "),
        secondary: [
          "bg-primary-100 text-primary-300 border border-1 border-secondary-150 shadow-md",
          "hover:bg-primary-200 hover:text-primary-150",
        ].join(" "),
        shade: [
          "bg-secondary-300",
          "hover:bg-secondary-350 hover:text-secondary-100",
        ].join(" "),
      },
      size: {
        small: "p-1 text-sm",
        normal: "p-3 text-base",
        large: "p-4 text-xl",
      },
    },

    defaultVariants: {
      color: "primary",
      size: "normal",
    },
  }
);

export default function Button({
  color,
  size,
  customClassNames = "",
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`${ButtonVariants({ color, size })} ${customClassNames}`}
      {...rest}
    >
      {children}
    </button>
  );
}
