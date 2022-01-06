const dataService = {
  metadata: {
    // block level
    user_details: [
      // field level
      {
        // should this field render on component mount
        is_render_initial: true,
        // field info
        key: "user_name",
        label: "Name",
        type: "text_field",
        placeholder: "Enter Name",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: null,
        static_options: null,
        input_data_api: null,
        // next field info
        node_scope: null,
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "6",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: true,
        // field info
        key: "user_gender",
        label: "Gender",
        type: "dropdown",
        placeholder: "Select Gender",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: true,
        static_options: [
          {
            text: "Male",
            value: "male",
          },
          {
            text: "Female",
            value: "female",
          },
          {
            text: "Other",
            value: "other",
          },
        ],
        input_data_api: null,
        // next field info
        node_scope: null,
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "6",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: true,
        // field info
        key: "user_ssn",
        label: "Social Security Number",
        type: "text_field",
        placeholder: "Enter SSN",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: null,
        static_options: null,
        input_data_api: null,
        // next field info
        node_scope: null,
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "6",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: true,
        // field info
        key: "user_country",
        label: "Country",
        type: "dropdown",
        placeholder: "Select Country",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: false,
        static_options: null,
        input_data_api: {
          url: "/countries",
          method: "GET",
          body: null,
          bind_vars: null,
        },
        // next field info
        node_scope: null,
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "6",
        },
      },
    ],
    patient_details: [
      {
        // should this field render on component mount
        is_render_initial: true,
        // field info
        key: "patient_relationship",
        label: "Relationship With Patient",
        type: "dropdown",
        placeholder: "Select your relationship with patient",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: true,
        static_options: [
          { text: "Self", value: "self" },
          { text: "Parent", value: "parent" },
          { text: "Child", value: "child" },
          { text: "Spouse", value: "spouse" },
        ],
        input_data_api: null,
        // next field info
        node_scope: null,
        is_check_next_nodes: true,
        next_nodes: [
          "patient_name",
          "patient_gender",
          "patient_ssn",
          "patient_country",
          "patient_diagnosis",
          "patient_first_physician",
          "patient_check_hicn",
        ],
        // extra info
        misc: {
          column_size: "12",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: false,
        // field info
        key: "patient_name",
        label: "Patient Name",
        type: "text_field",
        placeholder: "Enter Patient Name",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: null,
        static_options: null,
        input_data_api: null,
        // next field info
        node_scope: ["parent", "child", "spouse"],
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "6",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: false,
        // field info
        key: "patient_gender",
        label: "Patient Gender",
        type: "dropdown",
        placeholder: "Select Patient Gender",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: true,
        static_options: [
          {
            text: "Male",
            value: "male",
          },
          {
            text: "Female",
            value: "female",
          },
          {
            text: "Other",
            value: "other",
          },
        ],
        input_data_api: null,
        // next field info
        node_scope: ["parent", "child", "spouse"],
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "6",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: false,
        // field info
        key: "patient_ssn",
        label: "Patient Social Security Number",
        type: "text_field",
        placeholder: "Enter Patient SSN",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: null,
        static_options: null,
        input_data_api: null,
        // next field info
        node_scope: ["parent", "child", "spouse"],
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "6",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: false,
        // field info
        key: "patient_country",
        label: "Patient Country",
        type: "dropdown",
        placeholder: "Select Patient Country",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: false,
        static_options: null,
        input_data_api: {
          url: "/countries",
          method: "GET",
          body: null,
          bind_vars: null,
        },
        // next field info
        node_scope: ["parent", "child", "spouse"],
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "6",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: false,
        // field info
        key: "patient_diagnosis",
        label: "Patient Injury or Sickness",
        type: "text_area",
        placeholder: "Describe Patient Injury or Sickness",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: null,
        static_options: null,
        input_data_api: null,
        // next field info
        node_scope: ["self", "parent", "child", "spouse"],
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "12",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: false,
        // field info
        key: "patient_first_physician",
        label: "Patient First Physician",
        type: "text_field",
        placeholder: "Enter Name of Patient's First Physician",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: null,
        static_options: null,
        input_data_api: null,
        // next field info
        node_scope: ["self", "parent", "child", "spouse"],
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "12",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: false,
        // field info
        key: "patient_check_hicn",
        label: "Does Patient Have a HICN number?",
        type: "radio",
        placeholder: null,
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: true,
        static_options: [
          {
            text: "No",
            value: false,
          },
          {
            text: "Yes",
            value: true,
          },
        ],
        input_data_api: null,
        // next field info
        node_scope: ["self", "parent", "child", "spouse"],
        is_check_next_nodes: true,
        next_nodes: ["patient_hicn"],
        // extra info
        misc: {
          column_size: "6",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: false,
        // field info
        key: "patient_hicn",
        label: "Patient HICN",
        type: "text_field",
        placeholder: "Enter Patient HICN",
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: null,
        static_options: null,
        input_data_api: null,
        // next field info
        node_scope: [true],
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "6",
        },
      },
    ],
    insurance_plan: [
      {
        // should this field render on component mount
        is_render_initial: true,
        // field info
        key: "check_insurance_plan",
        label:
          "Are you or your dependant covered under any other insurance plan?",
        type: "radio",
        placeholder: null,
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: true,
        static_options: [
          {
            text: "No",
            value: false,
          },
          {
            text: "Yes",
            value: true,
          },
        ],
        input_data_api: null,
        // next field info
        node_scope: null,
        is_check_next_nodes: true,
        next_nodes: ["insurance_company"],
        // extra info
        misc: {
          column_size: "12",
        },
      },
      {
        // should this field render on component mount
        is_render_initial: false,
        // field info
        key: "insurance_company",
        label: null,
        type: "block",
        placeholder: null,
        is_multiple: null,
        validation: {
          mandatory: true,
        },
        is_show_encrypted: null,
        // field input data info
        is_static_options: null,
        static_options: null,
        input_data_api: null,
        // next field info
        node_scope: [true],
        is_check_next_nodes: null,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "12",
        },
      },
    ],
    user_consent: [
      {
        // should this field render on component mount
        is_render_initial: true,
        // field info
        key: "accept_terms",
        label: "Have you read all the terms and conditions?",
        type: "checkbox",
        placeholder: null,
        validation: {
          mandatory: true,
        },
        // field input data info
        is_static_options: false,
        static_options: null,
        input_data_api: null,
        // next field info
        node_scope: null,
        is_check_next_nodes: false,
        next_nodes: null,
        // extra info
        misc: {
          column_size: "6",
        },
      },
    ],
  },
  metadataConfig: {
    title: "Insurance Claim Form",
    blocks: {
      user_details: {
        flat: true,
        key: null,
      },
      patient_details: {
        flat: false,
        key: "patient",
      },
      insurance_plan: {
        flat: true,
        key: null,
      },
      user_consent: {
        flat: true,
        key: null,
      },
    },
    submit: {
      label: "Submit",
      allow: {
        block: "user_consent",
        field: "accept_terms",
        value: true,
      },
    },
  },
  countries: [
    {
      text: "Pakistan",
      value: "pakistan",
    },
    {
      text: "India",
      value: "india",
    },
    {
      text: "Bangladesh",
      value: "bangladesh",
    },
  ],
};

module.exports = dataService;
