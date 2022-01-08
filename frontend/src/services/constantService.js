export const constantService = {
  baseUrl: "http://localhost:3000",
  routes: [
    {
      name: "Static Example",
      path: "/static",
      value: 0,
    },
    {
      name: "Dynamic Example",
      path: "/dynamic",
      value: 1,
    },
  ],
  defaultColumnWidth: 6,
  blockIdToComponentMap: {
    user_details: "cUserDetails",
    patient_details: "cPatientDetails",
    insurance_plan: "cInsurancePlan",
    user_consent: "cUserConsent",
  },
  fieldKeyToComponentMap: {
    text_field: "cTextField",
    number_field: "cNumberField",
    dropdown: "cDropdown",
    radio: "cRadio",
    text_area: "cTextArea",
    checkbox: "cCheckbox",
    block: "cStaticBlock",
  },
};
