"use client";

import { SailingData, SailingParamsConversion } from "@/types";
import { JSX } from "react";
import { Sort, Button, Pagination, EmptyResults, Card } from "@/components";
import { usePathname, useRouter } from "next/navigation";

type CruiseListProps = {
  data: SailingData;
  params: SailingParamsConversion;
};

export default function CruiseList({
  data,
  params,
}: CruiseListProps): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="flex-1 bg-primary-100 pl-5 pr-12 pt-10 pb-10 text-primary-300 overflow-y-auto overflow-x-auto"
      data-testid="cruise-list"
    >
      <section>
        <div className="flex flex-row justify-end gap-5">
          <Sort params={params} />
        </div>

        <div className="flex flex-row justify-start gap-3 items-center">
          <b>{data.totalItems} trips found</b>
          <Button
            size="small"
            color="secondary"
            onClick={() => {
              router.push(`${pathname}`);
            }}
          >
            Reset filters
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-8 my-5">
        {data.results.length === 0 && <EmptyResults />}
        {data.results.length > 0 &&
          data.results.map((sailing, index) => (
            <Card key={sailing.name + index} sailing={sailing} />
          ))}
      </section>

      <section>
        <Pagination totalPages={data.totalPages} params={params} />
      </section>
    </div>
  );
}
