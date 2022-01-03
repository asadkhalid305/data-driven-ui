<template>
  <div class="dynamic-example">
    <dynamic-form :metadata="metadata" :form-model="formModel" :config="config" />
  </div>
</template>

<script>
import DynamicForm from "../components/DynamicForm.vue";

import { apiDataService } from "../services/apiDataService";

export default {
  name: "DynamicExample",
  components: { DynamicForm },
  data: () => ({
    metadata: {},
    config: {},
    formModel: {}
  }),
  mounted() {
    this.getMetadata();
    this.getConfig();
  },
  methods: {
    getMetadata() {
      apiDataService.getMetadata().then(response => {
        this.metadata = response.data || {};
      });
    },
    getConfig() {
      apiDataService.getMetadataConfig().then(response => {
        this.config = response.data || {};
      });
    }
  }
};
</script>
