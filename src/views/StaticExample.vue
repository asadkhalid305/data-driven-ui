<template>
  <div class="static-example">
    <static-form />
  </div>
</template>

<script>
import StaticForm from "../components/StaticForm.vue";

import { constantService } from "../services/constantService";

export default {
  name: "StaticExample",
  components: { StaticForm },
  data: () => ({
    examples: [...constantService.examplesData]
  })
};
</script>
