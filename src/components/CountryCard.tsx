import Image from "next/image";
import Link from "next/link";

export type CountryCardProps = {
  flag: string;
  alt: string;
  name: string;
  capital: string;
  region: string;
  population: number;
};

export default function CountryCard({
  flag,
  alt,
  name,
  capital,
  region,
  population,
}: CountryCardProps) {
  return (
    <article className="rounded-sm overflow-hidden bg-card text-card-foreground shadow-md">
      <Link href={`/${name.toLocaleLowerCase()}`}>
        <Image
          src={flag}
          alt={alt || `Flag of ${name}`}
          width={300}
          height={250}
          className="w-full h-48 object-cover"
        />
        <article className="p-8 pb-12 flex flex-col justify-center">
          <header>
            <h2 className="text-2xl font-bold mb-4">{name}</h2>
          </header>
          <dl className="space-y-2 md:text-lg">
            {[
              { label: "Population", value: population.toLocaleString() },
              { label: "Region", value: region },
              { label: "Capital", value: capital },
            ].map(({ label, value }) => (
              <div key={label} className="flex gap-1">
                <dt className="font-semibold">{label}:</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </Link>
    </article>
  );
}
