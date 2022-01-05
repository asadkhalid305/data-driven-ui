<template>
  <v-app id="root">
    <default-app-bar />
    <default-main-content />
  </v-app>
</template>

<script>
import DefaultAppBar from "./components/platofrm/DefaultAppBar.vue";
import DefaultMainContent from "./components/platofrm/DefaultMainContent.vue";

export default {
  components: {
    DefaultAppBar,
    DefaultMainContent
  }
};
</script>