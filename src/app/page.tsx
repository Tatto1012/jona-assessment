import { Button, Card, Pagination, Sort, EmptyResults } from "@/components";
import { fetchSailings } from "@/services/api";
import { filterData } from "@/services/filter-data";

interface PageProps {
  searchParams: {
    page?: number;
    sort?: string;
    sortBy?: string;
    q?: string;
  };
}

export default async function Home({ searchParams }: PageProps) {
  const { page = 1 } = await searchParams;

  const sailings = await fetchSailings();

  const q = { departureDate: "2022-11-23" };

  const data = filterData(sailings, page, undefined, q);

  return (
    <>
      <section>
        <div className="flex flex-row justify-end gap-5">
          {/* <Search placeholder="Search cruise..." /> */}
          <Sort />
        </div>

        <div className="flex flex-row justify-start gap-3 items-center">
          <b>{data.totalItems} trips found</b>
          <Button size="small" color="secondary">
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
        <Pagination totalPages={data.totalPages} currentPage={page} />
      </section>
    </>
  );
}
