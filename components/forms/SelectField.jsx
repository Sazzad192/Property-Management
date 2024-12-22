import { cn } from "@/lib/utils";

const defaultClassName =
  "block w-full mt-1 border rounded-md border-gray-300 pl-3 pr-10 py-2 text-base font-medium focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm";

export default function SelectField({
  label = "",
  name = "",
  id = "",
  extraClassName,
  labelClassName,
  value = "",
  options = [],
  onChange = () => {},
  onBlur = () => {},
  disabled = false,
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className={cn(
          "block text-sm font-semibold text-gray-600",
          labelClassName
        )}
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        className={cn(defaultClassName, extraClassName)}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={`${
              option.disabled ? "text-gray-500" : "text-gray-900"
            } font-semibold`}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
