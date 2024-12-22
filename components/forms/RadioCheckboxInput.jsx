function RadioCheckboxInput({
  htmlFor,
  id,
  name,
  type,
  value,
  onChange,
  checked,
  label,
  extraClassName,
  disabled,
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`flex items-center space-x-2 ${extraClassName}`}
    >
      <input
        id={id}
        type={type}
        className="custom-radio cursor-pointer"
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <p className="text-xl flex flex-col items-start cursor-pointer text-[#666666]">
        {label}
      </p>
    </label>
  );
}

export default RadioCheckboxInput;
