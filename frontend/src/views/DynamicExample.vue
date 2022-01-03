<template>
  <div class="dynamic-example">
    <dynamic-form />
  </div>
</template>

<script>
import DynamicForm from "../components/DynamicForm.vue";

import { apiDataService } from "../services/apiDataService";

export default {
  name: "DynamicExample",
  components: { DynamicForm },
  data: () => ({
    metadata: [],
    formModel: {}
  }),
  mounted() {
    this.getMetadata();
  },
  methods: {
    getMetadata() {
      apiDataService.getStaticExampleEasyMetaData().then(response => {
        this.metadata = response.data || [];
      });
    }
  }
};
</script>
