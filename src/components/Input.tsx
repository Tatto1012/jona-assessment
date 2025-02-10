import { JSX } from "react";

type InputProps = {
  type: string;
  placeholder: string;
  customClassName?: string;
  [key: string]: unknown;
};

export default function Input({
  type,
  placeholder,
  customClassName,
  ...rest
}: InputProps): JSX.Element {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={[
        "h-10 w-full px-3 py-2 rounded border border-input bg-primary-100 font-bold text-primary-300",
        "placeholder:text-neutral-400",
        "focus-visible:outline-none",
        customClassName,
      ].join(" ")}
      {...rest}
    />
  );
}
