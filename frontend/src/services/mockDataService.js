export const mockDataService = {
  easyExampleMetadata: {
    status: 0,
    message: "Success",
    data: {
      form_metadata: [
        {
          // should this field render on component mount
          is_render_initial: true,
          // field info
          key: "example_easy_email",
          display_name: "Email",
          type: "text",
          placeholder: "Enter Email",
          is_multiple: "single",
          is_mandatory: true,
          is_show_encrypted: false,
          // field input data info
          input_data_api: null,
          input_display_key: null,
          input_value_key: null,
          // next field info
          is_check_node_scope: false,
          node_scope: null,
          next_possible_nodes: null,
          // extra info
          misc: null,
        },
        {
          // should this field render on component mount
          is_render_initial: true,
          // field info
          key: "example_easy_password",
          display_name: "Password",
          type: "text",
          placeholder: "Enter Password",
          is_multiple: "single",
          is_mandatory: true,
          is_show_encrypted: true,
          // field input data info
          input_data_api: null,
          input_display_key: null,
          input_value_key: null,
          // next field info
          is_check_node_scope: false,
          node_scope: null,
          next_possible_nodes: null,
          // extra info
          misc: null,
        },
        {
          // should this field render on component mount
          is_render_initial: true,
          // field info
          key: "example_easy_country",
          display_name: "Country",
          // field input info
          input_type: "dropdown",
          input_data_api: {
            url: "http://localhost:5000/country",
            method: "GET",
            query_params: null,
            bind_vars: null,
          },
          input_display_key: "name",
          input_value_key: "id",
          input_selection_type: "single",
          input_placeholder: "Select Country",
          is_input_mandatory: true,
          // next field info
          is_check_current_node_scope: false,
          current_node_scope: null,
          next_possible_nodes: null,
          // extra info
          misc: null,
        },
      ],
    },
  },
};
