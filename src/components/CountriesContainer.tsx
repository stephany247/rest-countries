"use client";

import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { getCountriesByName, getCountriesByRegion } from "@/utils/action";
import { Button } from "./ui/button";

type CountriesContainerProps = {
  region: string;
  search: string;
  clearSearch: () => void;
};

export type CountryCardProps = {
  cca3: string;
  flags: any;
  flag: string;
  alt: string;
  name: string;
  capital: string;
  region: string;
  population: number;
};

function CountriesContainer({
  region,
  search,
  clearSearch,
}: CountriesContainerProps) {
  const [countries, setCountries] = useState<CountryCardProps[]>([]);

  useEffect(() => {
    async function getCountries() {
      let data;
      if (search.trim()) {
        data = await getCountriesByName(search);
      } else {
        data = await getCountriesByRegion(region);
      }
      const sorted = data.sort(
        (a: { name: { common: string } }, b: { name: { common: string } }) =>
          a.name.common.localeCompare(b.name.common)
      );
      setCountries(sorted);
    }

    getCountries();
  }, [region, search]);

  return (
    <div className="grid md:grid-cols-2 gap-10 lg:grid-cols-4 mt-8 md:mt-12 px-6 md:px-0">
      {countries.length === 0 ? (
        <div className="py-12 col-span-full">
          <p className="mb-4 text-lg font-semibold">
            No results.
            <br />
            Try changing or removing some of your filters.
          </p>
          <Button onClick={clearSearch} className="px-4 py-2 capitalize">
            Clear search
          </Button>
        </div>
      ) : (
        countries.map((country: any) => (
          <CountryCard
            key={country.cca3}
            name={country.name.common}
            capital={country.capital?.[0] || "N/A"}
            region={country.region}
            population={country.population}
            flag={country.flags.svg}
            alt={country.flags.alt}
          />
        ))
      )}
    </div>
  );
}

export default CountriesContainer;
