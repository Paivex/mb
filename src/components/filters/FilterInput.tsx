interface Props {
  value: string | number;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterInput({
  value,
  placeholder,
  onChange,
}: Props) {
  return (
    <input
      type="number"
      min={0}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-red-600"
    />
  );
}