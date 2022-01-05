<template>
  <div class="c-text-field">
    <v-text-field
      :label="fieldMeta.label"
      :hint="fieldMeta.placeholder"
      :value="value"
      @input="$emit('input', $event)"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "cTextField",
  props: {
    value: String,
    fieldMeta: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
</style>
