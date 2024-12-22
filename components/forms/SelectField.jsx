import { cn } from "@/lib/utils";

const defaultClassName =
  "block w-full mt-1 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 pl-3 pr-10 py-2 text-base font-medium text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm";

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
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "block text-sm font-semibold text-gray-600 dark:text-gray-300",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
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
              option.disabled
                ? "text-gray-500 dark:text-gray-600"
                : "text-gray-900 dark:text-white"
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
