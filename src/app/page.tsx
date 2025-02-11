import { Sidenav, CruisesList } from "@/components";
import { getCruiseLineList, mapSailingParamsOrDefault } from "@/helpers";
import { fetchSailings } from "@/services/api";
import { filterData } from "@/services/filter-data";
import { SailingParams } from "@/types";

interface PageProps {
  searchParams: Promise<SailingParams>;
}

export default async function Home({ searchParams }: PageProps) {
  const params = mapSailingParamsOrDefault(await searchParams);
  const sailings = await fetchSailings();
  const cruiselist = getCruiseLineList(sailings);
  const data = filterData(sailings, params);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Sidenav params={params} cruiselist={cruiselist} />
      <CruisesList params={params} data={data} />
    </div>
  );
}
