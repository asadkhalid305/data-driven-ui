<template>
  <div class="dynamic-example-easy">
    <p v-for="item in metadata" :key="item.key">{{item.display_name}}</p>
  </div>
</template>

<script>
export default {
  name: "DynamicExampleEasy",
  props: {
    metadata: Array,
    formModel: Object
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style>
</style>