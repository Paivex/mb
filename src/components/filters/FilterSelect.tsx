interface Option {
  value: string | number;
  label: string;
}

interface FilterSelectProps {
  value: string | number;
  placeholder: string;
  options: Option[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
}

export default function FilterSelect({
  value,
  placeholder,
  options,
  onChange,
  disabled = false,
}: FilterSelectProps) {
  return (
    <select
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="
        w-full
        rounded-lg
        border
        border-gray-300
        bg-white
        px-4
        py-3
        text-sm
        outline-none
        transition
        focus:border-red-600
        disabled:cursor-not-allowed
        disabled:bg-gray-100
        disabled:text-gray-400
      "
    >
      <option value="">{placeholder}</option>

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}