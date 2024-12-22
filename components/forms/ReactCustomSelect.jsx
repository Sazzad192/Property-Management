import Select from "react-select";

const ReactCustomSelect = ({
  options = [],
  placeholder = "Select an option",
  value,
  onChange,
  name,
  isDisabled = false,
  label = "",
  extraClassName = "",
}) => {
  const isDarkMode =
    typeof window !== "undefined" &&
    document.documentElement.classList.contains("dark");

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      padding: "8px",
      borderRadius: "8px",
      backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF", // Dark: gray-800, Light: white
      borderColor: isDarkMode ? "#374151" : "#D1D5DB", // Dark: gray-700, Light: gray-300
      color: isDarkMode ? "#F3F4F6" : "#374151", // Dark: gray-100, Light: gray-700
      boxShadow: "none",
      "&:hover": {
        borderColor: isDarkMode ? "#6B7280" : "#A0AEC0", // Dark: gray-600, Light: gray-400
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: isDarkMode ? "#1F2937" : "#FFFFFF", // Dark: gray-800, Light: white
      color: isDarkMode ? "#F3F4F6" : "#374151", // Dark: gray-100, Light: gray-700
      borderRadius: "8px",
      zIndex: 9999,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? isDarkMode
          ? "#374151" // Dark: gray-700
          : "#E5E7EB" // Light: gray-200
        : isDarkMode
        ? "#1F2937" // Dark: gray-800
        : "#FFFFFF", // Light: white
      color: isDarkMode ? "#F3F4F6" : "#374151", // Text color
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: isDarkMode ? "#F3F4F6" : "#374151", // Ensure good contrast for the selected value
    }),
    placeholder: (provided) => ({
      ...provided,
      color: isDarkMode ? "#9CA3AF" : "#6B7280", // Dark: gray-400, Light: gray-600
    }),
  };

  return (
    <div className={`space-y-1 ${extraClassName}`}>
      {label && (
        <p className="appearance-none block text-sm font-semibold text-neutral-700 dark:text-gray-300">
          {label}
        </p>
      )}
      <Select
        placeholder={placeholder}
        name={name}
        options={options}
        value={value}
        onChange={onChange}
        isDisabled={isDisabled}
        styles={customStyles}
      />
    </div>
  );
};

export default ReactCustomSelect;
