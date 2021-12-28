<template>
  <v-app-bar app color="white" flat class="default-app-bar">
    <v-avatar :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'" size="32">
      <span class="white--text text-h7">{{ imagePlaceHolder }}</span>
    </v-avatar>

    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab
        v-for="route in routes"
        :key="route.path"
        @click="changeRoute(route.path)"
      >{{ route.name }}</v-tab>
    </v-tabs>

    <v-avatar class="hidden-sm-and-down" color="grey darken-1 shrink" size="32">
      <span class="white--text text-h7">{{ imagePlaceHolder }}</span>
    </v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  name: "DefaultAppBar",
  data: () => ({
    routes: [
      {
        name: "Static Example",
        path: "/static"
      },
      {
        name: "Dynamic Example",
        path: "/dynamic"
      }
    ],
    imagePlaceHolder: "AK"
  }),
  methods: {
    changeRoute(path) {
      console.log(path);
      this.$router.push(path);
    }
  }
};
</script>