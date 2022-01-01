<template>
  <div class="dynamic-example">
    <v-expansion-panels inset focusable>
      <v-expansion-panel v-for="example in examples" :key="example.id">
        <v-expansion-panel-header>{{ example.title }}</v-expansion-panel-header>
        <v-expansion-panel-content v-if="example.id === 1">
          <dynamic-example-easy :metadata="metadata" />
        </v-expansion-panel-content>
        <v-expansion-panel-content v-else-if="example.id === 2">
          <dynamic-example-medium />
        </v-expansion-panel-content>
        <v-expansion-panel-content v-else-if="example.id === 3">
          <dynamic-example-hard />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import DynamicExampleEasy from "../components/DynamicExampleEasy.vue";
import DynamicExampleMedium from "../components/DynamicExampleMedium.vue";
import DynamicExampleHard from "../components/DynamicExampleHard.vue";

import { apiDataService } from "../services/apiDataService";
import { constantService } from "../services/constantService";
import { utilService } from "../services/utilService";

export default {
  name: "DynamicExample",
  components: { DynamicExampleEasy, DynamicExampleMedium, DynamicExampleHard },
  data: () => ({
    examples: [...constantService.examplesData],
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
        this.setFormModel();
      });
    },
    setFormModel() {
      this.formModel = utilService.getInitialFormModel(this.metadata);
      console.log(this.formModel);
    }
  }
};
</script>
