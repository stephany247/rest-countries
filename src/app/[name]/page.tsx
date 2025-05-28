import { BackButton } from "@/components/Buttons";
import CountryDetails from "@/components/CountryDetails";
import { fetchCountries, getCountry } from "@/utils/action";
import { redirect } from "next/navigation";

export default async function CountryPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const country = await getCountry(name);
  const allCountries = await fetchCountries();

  if (!country) redirect("/");

  return (
    <main className="space-y-6">
      <BackButton />

      <CountryDetails
        key={country.cca3}
        name={country.name.common}
        nativeName={
          (
            Object.values(country.name.nativeName || {})[0] as {
              common?: string;
            }
          )?.common || country.name.common
        }
        capital={country.capital?.[0] || "N/A"}
        region={country.region}
        subregion={country.subregion}
        population={country.population}
        flag={country.flags.svg}
        alt={country.flags.alt}
        tld={country.tld?.[0] || "N/A"}
        currencies={
          Object.values(country.currencies || {})
            .map((currency: any) => currency.name)
            .join(", ") || "N/A"
        }
        languages={Object.values(country.languages || {}).join(", ") || "N/A"}
        borders={country.borders || []}
        allCountries={allCountries}
      />
    </main>
  );
}
