<template>
  <div class="c-checkbox">
    <v-checkbox
      :label="fieldMeta.label"
      :hint="fieldMeta.placeholder"
      :value="value"
      @change="$emit('input', $event)"
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  name: "cCheckbox",
  props: {
    value: Boolean,
    fieldMeta: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
</style>
