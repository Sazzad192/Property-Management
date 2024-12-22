import TextInputField from "@/components/forms/TextInputField";
import RadioCheckboxInput from "@/components/forms/RadioCheckboxInput";
import { contactMethod } from "@/const";

export default function StepOne({ formik }) {
  return (
    <div className="flex flex-col md:flex-row justify-start gap-5 md:gap-6 items-start">
      <section className="w-full md:w-1/2 space-y-4">
        <TextInputField
          name="name"
          id="name"
          label="Owner Name"
          placeholder="Enter your name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <TextInputField
          name="phone"
          id="phone"
          label="Phone"
          placeholder="Enter your phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <TextInputField
          name="email"
          id="email"
          label="Email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <TextInputField
          name="address"
          id="address"
          label="Address"
          placeholder="Enter your address"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        <TextInputField
          type="date"
          name="availability"
          id="availability"
          label="Availability"
          placeholder="Enter your availability time"
          onChange={formik.handleChange}
          value={formik.values.availability}
        />
      </section>
      <section>
        <p className="font-semibold">Preferred Contact Method : </p>
        {contactMethod.map((item) => (
          <RadioCheckboxInput
            htmlFor={`radio-${item.value}`}
            key={item.value}
            type="radio"
            id={`radio-${item.value}`}
            name="contact_method"
            value={item.value}
            onChange={formik.handleChange}
            checked={formik.values.contact_method === item.value}
            labelClassName="text-2xl"
            label={item.label}
            extraClassName="pl-6"
          />
        ))}
      </section>
    </div>
  );
}
