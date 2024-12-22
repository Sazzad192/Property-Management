import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary-500 text-white",
  secondary: "border-2 border-customRed text-customRed",
  outline: "border-2 border-neutral-300 text-neutral-600",
  redOutline: "border border-customRed text-customRed",
  redRound: "bg-customRed text-white rounded-full",
};

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  return (
    <button
      className={cn(
        "flex justify-center items-center px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap hover:opacity-80 transition-opacity disabled:opacity-25",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
