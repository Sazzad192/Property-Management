import TextInputField from "@/components/forms/TextInputField";

export default function StepThree({ formik }) {
  return (
    <section className={`flex flex-col w-full md:w-1/2 gap-4 md:gap-10`}>
      <TextInputField
        name="something_else"
        id="something_else"
        label="If you have something to add, write it here"
        placeholder="Write your choice"
        onChange={formik.handleChange}
        value={formik.values.something_else}
      />

      <label
        className={`flex justify-start items-center gap-2 cursor-pointer pt-5`}
      >
        <input
          type="checkbox"
          name="is_agreed"
          checked={formik.values.is_agreed}
          onChange={formik.handleChange}
        />
        By clicking here, you will agree with us.
      </label>
    </section>
  );
}
