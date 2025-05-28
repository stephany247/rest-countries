"use client";
import { useState } from "react";
import CountriesContainer from "@/components/CountriesContainer";
import RegionDropdown from "@/components/RegionDropdown";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("All");

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
        <SearchInput value={search} onChange={setSearch} />
        <RegionDropdown value={region} onChange={setRegion} />
      </div>
      <CountriesContainer
        region={region}
        search={search}
        clearSearch={() => setSearch("")}
      />
    </>
  );
}
