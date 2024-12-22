import Select from "react-select";
import TextInputField from "@/components/forms/TextInputField";
import {
  baths,
  beadRooms,
  ownershipStatus,
  propertyConditionOptions,
  propertyLocation,
  propertyType,
} from "@/const";

export default function StepTwo({ formik }) {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-5 md:gap-6 items-start">
      <section className="space-y-5 w-full md:w-1/2">
        <div className={`space-y-1`}>
          <p className="appearance-none block text-sm font-semibold text-neutral-700">
            Property Type
          </p>
          <Select
            placeholder="Property Type"
            name="property_type"
            options={propertyType}
            value={propertyType.find(
              (option) => option.value === formik.values.property_type
            )}
            onChange={(selectedOption) => {
              formik.setFieldValue("property_type", selectedOption.value);
            }}
            styles={{
              control: (provided) => ({
                ...provided,
                padding: "16px",
              }),
            }}
          />
        </div>
        <div className="space-y-1">
          <p
            className={`appearance-none block text-sm font-semibold text-neutral-700`}
          >
            Property location
          </p>
          <Select
            placeholder="Enter property location"
            name="location"
            options={propertyLocation}
            value={propertyLocation.find(
              (option) => option.value === formik.values.location
            )}
            onChange={(selectedOption) => {
              formik.setFieldValue("location", selectedOption.value);
            }}
            styles={{
              control: (provided) => ({
                ...provided,
                padding: "16px",
              }),
            }}
          />
        </div>

        {formik.values.location === "Others" ? (
          <TextInputField
            name="other_location"
            id="other_location"
            label="Other Location"
            placeholder="Enter address"
            onChange={formik.handleChange}
            value={formik.values.other_location}
          />
        ) : null}

        <div className="space-y-1">
          <p
            className={`appearance-none block text-sm font-semibold text-neutral-700`}
          >
            Bedrooms
          </p>
          <Select
            placeholder="Bedrooms"
            name="bedroom"
            options={beadRooms}
            value={beadRooms.find(
              (option) => option.value === formik.values.bedroom
            )}
            onChange={(selectedOption) => {
              formik.setFieldValue("bedroom", selectedOption.value);
            }}
            styles={{
              control: (provided) => ({
                ...provided,
                padding: "16px",
              }),
            }}
          />
        </div>
      </section>

      <section className="space-y-5 w-full md:w-1/2">
        <div className="space-y-1">
          <p
            className={`appearance-none block text-sm font-semibold text-neutral-700`}
          >
            Baths
          </p>
          <Select
            placeholder="Baths"
            name="bedroom"
            options={baths}
            value={baths.find(
              (option) => option.value === formik.values.bathroom
            )}
            onChange={(selectedOption) => {
              formik.setFieldValue("bathroom", selectedOption.value);
            }}
            styles={{
              control: (provided) => ({
                ...provided,
                padding: "16px",
              }),
            }}
          />
        </div>
        <div className="space-y-1">
          <p
            className={`appearance-none block text-sm font-semibold text-neutral-700`}
          >
            Property condition
          </p>
          <Select
            placeholder="Property condition"
            name="property_condition"
            options={propertyConditionOptions}
            value={propertyConditionOptions.find(
              (option) => option.value === formik.values.property_condition
            )}
            onChange={(selectedOption) => {
              formik.setFieldValue("property_condition", selectedOption.value);
            }}
            styles={{
              control: (provided) => ({
                ...provided,
                padding: "16px",
              }),
            }}
          />
        </div>
        <div className="space-y-1">
          <p
            className={`appearance-none block text-sm font-semibold text-neutral-700`}
          >
            Ownership status
          </p>
          <Select
            placeholder="Enter ownership status"
            name="ownership_status"
            options={ownershipStatus}
            value={ownershipStatus.find(
              (option) => option.value === formik.values.ownership_status
            )}
            onChange={(selectedOption) => {
              formik.setFieldValue("ownership_status", selectedOption.value);
            }}
            styles={{
              control: (provided) => ({
                ...provided,
                padding: "16px",
              }),
            }}
          />
        </div>
      </section>
    </div>
  );
}
