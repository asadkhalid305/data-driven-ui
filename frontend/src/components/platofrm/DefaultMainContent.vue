<template>
  <v-main class="default-main-content grey lighten-3">
    <v-container>
      <default-layout />
    </v-container>
  </v-main>
</template>

<script>
import DefaultLayout from "./DefaultLayout.vue";
export default {
  name: "DefaultMainContent",
  components: { DefaultLayout }
};
</script>
