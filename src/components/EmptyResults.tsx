import Link from "next/link";
import { JSX } from "react";

export default function EmptyResults(): JSX.Element {
  return (
    <div className="flex-1 flex flex-col items-center justify-center border p-14 rounded">
      <h1 className="text-2xl font-semibold">No results found</h1>
      <p className="text-gray-500 mb-4">
        We couldn`t find any sailings matching your search criteria.
      </p>

      <Link
        className="text-primary-100 bg-primary-150 p-3 rounded"
        href={{
          pathname: "/",
        }}
      >
        Reset filters
      </Link>
    </div>
  );
}
