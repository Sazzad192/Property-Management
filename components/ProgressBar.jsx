export default function ProgressBar({ steps, currentStep }) {
  return (
    <div className="flex justify-center md:justify-start items-center w-full py-4">
      <div className="flex justify-between w-full md:w-5/6 lg:w-1/2">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center w-full">
            {/* Step Indicator */}
            <div className="flex flex-col items-center relative">
              <div
                className={`rounded-full ${
                  currentStep > index + 1
                    ? "bg-primary-500"
                    : currentStep === index + 1
                    ? "border-4 border-primary-500 bg-white"
                    : "bg-gray-200"
                } w-7 h-7 flex items-center justify-center`}
              >
                <div
                  className={`${
                    currentStep > index + 1 ? "bg-primary-500" : ""
                  } rounded-full w-5 h-5`}
                ></div>
              </div>
              <p className="absolute -bottom-5 text-gray-500 text-xs font-medium text-center whitespace-nowrap">
                {step.title}
              </p>
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className={`flex-grow border-t-4 transition duration-500 ${
                  currentStep > index + 1
                    ? "border-primary-500"
                    : "border-gray-200"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
