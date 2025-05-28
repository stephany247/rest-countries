import Image from "next/image";
import { NavButton } from "./Buttons";

type CountryProps = {
  flag: string;
  alt: string;
  name: string;
  nativeName?: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  tld: string;
  currencies: string;
  languages: string;
  borders: string[];
  allCountries: any[];
};

function InfoGroup({
  items,
}: {
  items: { label: string; value: string | number }[];
}) {
  return (
    <dl className="space-y-2 md:space-y-4 md:text-xl">
      {items.map(({ label, value }) => (
        <div key={label} className="flex gap-1">
          <dt className="font-semibold">{label}:</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function CountryDetails({
  flag,
  alt,
  name,
  nativeName,
  capital,
  region,
  subregion,
  population,
  tld,
  currencies,
  languages,
  borders,
  allCountries,
}: CountryProps) {
  const borderCountries = borders
    .map((code) => allCountries.find((country) => country.cca3 === code))
    .filter(Boolean);

  return (
    <section className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mt-8 md:mt-12">
      <Image
        src={flag}
        alt={alt || `Flag of ${name}`}
        width={300}
        height={250}
        className="w-full h-52 sm:h-60 md:h-[450px] object-cover"
      />

      <div className="space-y-8 md:space-y-12">
        <header>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{name}</h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          <InfoGroup
            items={[
              { label: "Native Name", value: nativeName || "N/A" },
              { label: "Population", value: population.toLocaleString() },
              { label: "Region", value: region },
              { label: "Sub Region", value: subregion },
              { label: "Capital", value: capital },
            ]}
          />

          <InfoGroup
            items={[
              { label: "Top Level Domain", value: tld },
              { label: "Currencies", value: currencies },
              { label: "Languages", value: languages },
            ]}
          />
        </div>
        <section>
          <div className="flex flex-wrap mt-2 gap-3 md:text-lg">
            <p className="font-semibold">Border Countries:</p>
            {borderCountries.length > 0 ? (
              borderCountries.map((country) => (
                <NavButton
                  key={country.cca3}
                  to={`/$${country.name.common.toLowerCase()}`}
                  className="text-sm md:text-base font-normal h-8"
                >
                  {country.name.common}
                </NavButton>
              ))
            ) : (
              <span className="ml-2">None</span>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

export default CountryDetails;
