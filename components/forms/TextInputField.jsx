import { cn } from "@/lib/utils";
// import ErrorByFieldName from "./ErrorByFieldName";

const INPUT_LABEL_STYLES = "appearance-none block font-semibold text-[#404040]";
const INPUT_BOX_STYLES =
  "appearance-none block w-full text-lg rounded-md text-neutral-500 border border-[#CCCCCC] px-3 py-4 placeholder-neutral-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 active:border-primary-500 cursor-text";

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
      <label htmlFor={name} className={cn(INPUT_LABEL_STYLES, labelClassName)}>
        {label}
      </label>
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
      {/* <ErrorByFieldName field={name} errors={errors} /> */}
    </div>
  );
}
