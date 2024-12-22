import TextInputField from "@/components/forms/TextInputField";
import {
  baths,
  beadRooms,
  propertyConditionOptions,
  propertyLocation,
  propertyType,
  rentalStatus,
} from "@/const";
import ReactCustomSelect from "@/components/forms/ReactCustomSelect";

export default function StepTwo({ formik }) {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-5 md:gap-6 items-start">
      <section className="space-y-5 w-full md:w-1/2">
        <ReactCustomSelect
          label="Property Type"
          placeholder="Property Type"
          name="property_type"
          options={propertyType}
          value={propertyType.find(
            (option) => option.value === formik.values.property_type
          )}
          onChange={(selectedOption) => {
            formik.setFieldValue("property_type", selectedOption.value);
          }}
          extraClassName="w-full"
        />

        <ReactCustomSelect
          label="Property location"
          placeholder="Enter property location"
          name="location"
          options={propertyLocation}
          value={propertyLocation.find(
            (option) => option.value === formik.values.location
          )}
          onChange={(selectedOption) => {
            formik.setFieldValue("location", selectedOption.value);
          }}
          extraClassName="w-full"
        />

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

        <ReactCustomSelect
          label="Bedrooms"
          placeholder="Bedrooms"
          name="bedroom"
          options={beadRooms}
          value={beadRooms.find(
            (option) => option.value === formik.values.bedroom
          )}
          onChange={(selectedOption) => {
            formik.setFieldValue("bedroom", selectedOption.value);
          }}
          extraClassName="w-full"
        />
      </section>

      <section className="space-y-5 w-full md:w-1/2">
        <ReactCustomSelect
          label="Baths"
          placeholder="Baths"
          name="bedroom"
          options={baths}
          value={baths.find(
            (option) => option.value === formik.values.bathroom
          )}
          onChange={(selectedOption) => {
            formik.setFieldValue("bathroom", selectedOption.value);
          }}
          extraClassName="w-full"
        />
        <ReactCustomSelect
          label="Property condition"
          placeholder="Property condition"
          name="property_condition"
          options={propertyConditionOptions}
          value={propertyConditionOptions.find(
            (option) => option.value === formik.values.property_condition
          )}
          onChange={(selectedOption) => {
            formik.setFieldValue("property_condition", selectedOption.value);
          }}
          extraClassName="w-full"
        />
        <ReactCustomSelect
          label="Rental Status"
          options={rentalStatus}
          value={rentalStatus.find(
            (option) => option.value === formik.values.status
          )}
          onChange={(selectedOption) => {
            formik.setFieldValue("status", selectedOption.value);
          }}
          placeholder="Select rental status"
          extraClassName="w-full"
        />
      </section>
    </div>
  );
}
