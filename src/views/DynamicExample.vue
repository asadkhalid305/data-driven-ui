<template>
  <div class="dynamic-example">
    <v-expansion-panels inset focusable>
      <v-expansion-panel v-for="example in examples" :key="example.id">
        <v-expansion-panel-header>{{ example.title }}</v-expansion-panel-header>
        <v-expansion-panel-content v-if="example.id === 1">
          <dynamic-example-easy />
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

export default {
  name: "DynamicExample",
  components: { DynamicExampleEasy, DynamicExampleMedium, DynamicExampleHard },
  data: () => ({
    examples: [
      {
        id: 1,
        title: "Easy"
      },
      {
        id: 2,
        title: "Medium"
      },
      {
        id: 3,
        title: "Hard"
      }
    ]
  })
};
</script>
