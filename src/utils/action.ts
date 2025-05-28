export type Country = {
  cca3: string;
  name: { common: string };
  capital?: string[];
  region: string;
  subregion: string;
  population: number;
  flags: { svg: string; png: string; alt: string };
};

export async function fetchCountries(): Promise<Country[]> {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags,cca3"
    );

    if (!res.ok) throw new Error("Failed to fetch countries");

    const data: Country[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}

// lib/actions/getCountry.ts
// export async function getCountry(name: string) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
//   if (!res.ok) throw new Error("Country not found");
//   const data = await res.json();
//   return data[0]; // return the first match
// }

export async function getCountry(name: string) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    if (!res.ok) throw new Error("Country not found");
    const data = await res.json();
    // console.log(data[0]);

    return data[0];
  } catch (error) {
    console.error("Error fetching county: ", error);
  }
}

// export async function getCountriesByRegion(region: string) {
//   try {
//     const res = await fetch("https://restcountries.com/v3.1/all");
//     const data = await res.json();

//     if (region === "All") return data;

//     return data.filter((country: any) => country.region === region);
//   } catch (error) {
//     console.error("Error fetching countries by region:", error);
//     return [];
//   }
// }

export async function getCountriesByRegion(region: string) {
  try {
    if (region === "All") {
      const res = await fetch("https://restcountries.com/v3.1/all");
      return await res.json();
    }

    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching countries by region:", error);
    return [];
  }
}

// utils/action.ts
export async function getCountriesBySearch(search: string, region: string) {
  try {
    let countries: any[] = [];

    if (region === "All") {
      const res = await fetch("https://restcountries.com/v3.1/all");
      countries = await res.json();
    } else {
      const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      countries = await res.json();
    }

    if (!search) return countries;

    return countries.filter((country) => {
      const name = country.name.common.toLowerCase();
      const code = country.cca3.toLowerCase();
      const input = search.toLowerCase();
      return name.includes(input) || code === input;
    });
  } catch (err) {
    console.error("Error searching countries:", err);
    return [];
  }
}

// Get countries by name or code
export async function getCountriesByName(query: string) {
  const input = query.toLowerCase();
  try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const allCountries = await res.json();

    return allCountries.filter((country: any) => {
      const name = country.name.common.toLowerCase();
      const code = country.cca3.toLowerCase();
      return name.includes(input) || code === input;
    });
  } catch (error) {
    console.error("Error searching countries:", error);
    return [];
  }
}