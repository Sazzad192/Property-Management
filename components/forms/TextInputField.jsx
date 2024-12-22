import { cn } from "@/lib/utils";

const INPUT_LABEL_STYLES =
  "appearance-none block font-semibold text-[#404040] dark:text-gray-300";
const INPUT_BOX_STYLES =
  "appearance-none block w-full text-lg rounded-md text-neutral-500 dark:text-white bg-white dark:bg-gray-800 border border-[#CCCCCC] dark:border-gray-600 px-3 py-4 placeholder-neutral-400 dark:placeholder-gray-500 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 active:border-primary-500 cursor-text";

export default function TextInputField(props) {
  const {
    type = "text",
    name,
    id,
    label,
    placeholder,
    className,
    mainDivClass,
    errors,
    value,
    onChange,
    readOnly,
    labelClassName,
    ...rest
  } = props;

  const INPUT_FIELD_STYLES = cn(INPUT_BOX_STYLES, className);
  return (
    <div className={cn("flex flex-col w-full", mainDivClass)}>
      {label && (
        <label
          htmlFor={name}
          className={cn(INPUT_LABEL_STYLES, labelClassName)}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={INPUT_FIELD_STYLES}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        {...rest}
      />
    </div>
  );
}
