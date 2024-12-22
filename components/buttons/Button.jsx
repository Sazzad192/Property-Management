import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary-400 text-white",
  rounded: "border rounded-full border-primary-400 text-primary-400",
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
