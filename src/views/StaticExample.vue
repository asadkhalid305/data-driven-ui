<template>
  <div class="static-example">
    <v-expansion-panels inset focusable>
      <v-expansion-panel v-for="example in examples" :key="example.id">
        <v-expansion-panel-header>{{ example.title }}</v-expansion-panel-header>
        <v-expansion-panel-content v-if="example.id === 1">
          <static-example-easy />
        </v-expansion-panel-content>
        <v-expansion-panel-content v-else-if="example.id === 2">
          <static-example-medium />
        </v-expansion-panel-content>
        <v-expansion-panel-content v-else-if="example.id === 3">
          <static-example-hard />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import StaticExampleEasy from "../components/StaticExampleEasy.vue";
import StaticExampleMedium from "../components/StaticExampleMedium.vue";
import StaticExampleHard from "../components/StaticExampleHard.vue";

import { constantService } from "../services/constantService";

export default {
  name: "StaticExample",
  components: { StaticExampleEasy, StaticExampleMedium, StaticExampleHard },
  data: () => ({
    examples: [...constantService.examplesData]
  })
};
</script>
