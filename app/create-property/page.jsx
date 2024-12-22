"use client";
import { useState } from "react";
import Button from "@/components/buttons/Button";
import ProgressBar from "@/components/ProgressBar";
import StepOne from "./form/StepOne";
import StepTwo from "./form/StepTwo";
import StepThree from "./form/StepThree";
import { useFormik } from "formik";

const initialValues = {
  contact_method: "",
  name: "",
  phone: "",
  email: "",
  address: "",
  property_type: "",
  location: "",
  other_location: "",
  property_condition: "",
  ownership_status: "",
  bedroom: "",
  bathroom: "",
  amenities: [],
  availability: "",
  is_agreed: false,
  follow_up: "",
  something_else: "",
  has_contacted: false,
};

export default function CreateProperty() {
  const [currentStep, setCurrentStep] = useState(1);

  const formik = useFormik({
    initialValues,
  });

  const consultationStepViews = [
    <StepOne formik={formik} />,
    <StepTwo formik={formik} />,
    <StepThree formik={formik} />,
  ];

  const validation = [
    !formik.values.contact_method ||
      !formik.values.phone ||
      !formik.values.name ||
      !formik.values.availability ||
      !formik.values.address,
    !formik.values.property_type ||
      !formik.values.bedroom ||
      !formik.values.bathroom ||
      !formik.values.location ||
      !formik.values.ownership_status ||
      !formik.values.property_condition,
    !formik.values.is_agreed || !formik.values.follow_up,
  ];

  const steps = [
    { title: "Owner Details" },
    { title: "Property Details" },
    { title: "Confirm" },
  ];

  return (
    <div className="space-y-8 pt-8">
      <section>
        <h3 className={`text-2xl font-medium text-left`}>
          Please complete this form to join the waitlist!
        </h3>
      </section>
      <section>
        <ProgressBar steps={steps} currentStep={currentStep} />
      </section>

      <section>{consultationStepViews[currentStep - 1]}</section>

      <section className="flex justify-end gap-3 mt-5 pb-5">
        <Button
          disabled={currentStep == 1}
          variant="rounded"
          onClick={() => {
            setCurrentStep(currentStep - 1);
          }}
          className="rounded-md font-normal w-[140px] h-10"
        >
          Back
        </Button>
        <Button
          disabled={validation[currentStep - 1]}
          onClick={() => {
            currentStep === 3 ? submitForm() : setCurrentStep(currentStep + 1);
          }}
          className="rounded-md font-bold w-[140px] h-10"
        >
          {currentStep === 3 ? "Submit" : "Next"}
        </Button>
      </section>
    </div>
  );
}
