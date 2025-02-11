"use client";

import Image from "next/image";
import { Button, Select, DatesPicker } from "@/components";
import Logo from "../../public/assets/logo.svg";
import { SailingParamsConversion, SelectOption } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import dayjs from "dayjs";
import { buildUrlQueryParams } from "@/helpers";

type SidenavProps = {
  params: SailingParamsConversion;
  cruiselist: SelectOption[];
};

export default function Sidenav({ params, cruiselist }: SidenavProps) {
  const pathname = usePathname();
  const router = useRouter();

  const toggleSidenav = () => {};

  return (
    <aside className="lg:w-3/12 bg-primary-50 px-7 py-3 relative">
      <div className="flex justify-end mt-5">
        <Button size="large" color="shade" onClick={() => toggleSidenav()}>
          <b className="material-icons max-lg:hidden lg:block">arrow_back</b>
          <b className="material-icons max-lg:block lg:hidden">arrow_upward</b>
        </Button>
      </div>

      <div className="mt-5">
        <div className="flex flex-col gap-2 mb-10">
          <b className="text-secondary-200">Departure port</b>
          <DatesPicker
            onChange={(date) => {
              const buildParams = buildUrlQueryParams(params, {
                departure: dayjs(date).format("YYYY-MM–DD"),
              });

              router.push(`${pathname}?${buildParams}`);
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <b className="text-secondary-200">Cruiseline</b>
          <Select
            showDetail={false}
            options={cruiselist}
            placeholder="Any Cruiseline"
            onChange={(selected) => {
              const buildParams = buildUrlQueryParams(params, {
                cruiseline: selected.value as string,
              });

              router.push(`${pathname}?${buildParams}`);
            }}
            customClassName="w-full z-10 text-primary-300"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center p-5 mt-3 lg:absolute lg:inset-x-0 lg:bottom-10">
        <Image src={Logo} alt="Cruisebound Logo" width={80} />
        <span className="lg:text-3xl text-xl font-bold">Cruisebound</span>
      </div>
    </aside>
  );
}
