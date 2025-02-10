import { JSX } from "react";
import { Input } from "@/components";

type SearchProps = {
  placeholder: string;
  [key: string]: unknown;
};

export default function Search({
  placeholder,
  ...rest
}: SearchProps): JSX.Element {
  return (
    <div className="flex flex-row items-center gap-5">
      <b className="text-xl">Search</b>
      <Input
        type="text"
        placeholder={placeholder}
        customClassName="h-16"
        {...rest}
      />
    </div>
  );
}
