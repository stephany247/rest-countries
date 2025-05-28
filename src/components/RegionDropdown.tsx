import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

type RegionDropdownProps = {
  value: string;
  onChange: (region: string) => void;
};

function RegionDropdown({ value, onChange }: RegionDropdownProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-52 md:w-72 md:py-6 md:text-lg rounded">
        <SelectValue placeholder="Filter by Region" />
      </SelectTrigger>
      <SelectContent className="p-2 w-52 md:w-72 md:mt-2 rounded">
        <SelectGroup>
          <SelectLabel>Filter by Region</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="Africa">Africa</SelectItem>
          <SelectItem value="Americas">Americas</SelectItem>
          <SelectItem value="Asia">Asia</SelectItem>
          <SelectItem value="Europe">Europe</SelectItem>
          <SelectItem value="Oceania">Oceania</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default RegionDropdown;
