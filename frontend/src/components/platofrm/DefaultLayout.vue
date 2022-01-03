<template>
  <div class="default-layout">
    <v-row class="justify-center">
      <v-col cols="12" sm="8">
        <v-sheet min-height="80vh" rounded="lg">
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "DefaultLayout"
};
</script>

<style>
</style>