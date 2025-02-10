"use client";

import Image from "next/image";
import { Button, Select, DatesPicker } from "@/components";
import Logo from "../../public/assets/logo.svg";
import { SelectOption } from "@/types";

type SidenavProps = {
  cruiselist: SelectOption[];
};

export default function Sidenav({ cruiselist }: SidenavProps) {
  const handleCruiselineSelection = (selectedOption: SelectOption) => {
    console.log(selectedOption);
  };

  return (
    <aside className="lg:w-3/12 bg-primary-50 px-7 py-3 relative">
      <div className="flex justify-end mt-5">
        <Button size="large" color="shade">
          <b className="material-icons">arrow_back</b>
        </Button>
      </div>

      <div className="mt-5">
        <div className="flex flex-col gap-2 mb-10 z-10">
          <b className="text-secondary-200">Departure port</b>
          <DatesPicker />
        </div>

        <div className="flex flex-col gap-2">
          <b className="text-secondary-200">Cruiseline</b>
          <Select
            showDetail={false}
            options={cruiselist}
            placeholder="Any Cruiseline"
            onChange={(selected) => handleCruiselineSelection(selected)}
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
