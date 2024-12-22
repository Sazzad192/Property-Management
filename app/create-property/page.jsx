"use client";
import { useState } from "react";
import Button from "@/components/buttons/Button";
import ProgressBar from "@/components/ProgressBar";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import { useFormik } from "formik";
import toast from "react-hot-toast";

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
  status: "",
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
      !formik.values.status ||
      !formik.values.property_condition,
    !formik.values.is_agreed,
  ];

  const steps = [
    { title: "Owner Details" },
    { title: "Property Details" },
    { title: "Confirm" },
  ];

  const submitForm = () => {
    try {
      const existingData = JSON.parse(localStorage.getItem("formData")) || [];

      const updatedData = Array.isArray(existingData)
        ? [...existingData, formik.values]
        : [formik.values];

      localStorage.setItem("formData", JSON.stringify(updatedData));
      toast.success("Property created successfully");
      // Optionally reset the form or redirect the user
      formik.resetForm();
      setCurrentStep(1);
    } catch (error) {
      console.error("Error saving data to local storage", error);
      toast.danger("Property created successfully");
    }
  };

  return (
    <div className="space-y-8 pt-8">
      <section>
        <h1 className={`text-2xl font-medium text-left`}>Create Property</h1>
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
