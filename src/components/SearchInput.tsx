import { Input } from "@/components/ui/input";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <Input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search for a country..."
      className="w-full h-10 md:h-12 md:text-lg md:max-w-[400px] shadow rounded"
    />
  );
}

export default SearchInput;
