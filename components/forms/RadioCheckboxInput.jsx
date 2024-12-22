function RadioCheckboxInput({
  htmlFor,
  id,
  name,
  type,
  value,
  onChange,
  checked,
  label,
  extraClassName = "",
  disabled = false,
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`flex items-center space-x-2 cursor-pointer ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      } ${extraClassName}`}
    >
      <input
        id={id}
        type={type}
        className={`cursor-pointer border-gray-300 dark:border-gray-600 focus:ring-primary-500 h-5 w-5 ${
          type === "checkbox" ? "rounded" : "rounded-full"
        }`}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <p
        className={`text-base flex flex-col items-start ${
          disabled
            ? "text-gray-400 dark:text-gray-600"
            : "text-gray-800 dark:text-gray-300"
        }`}
      >
        {label}
      </p>
    </label>
  );
}

export default RadioCheckboxInput;
