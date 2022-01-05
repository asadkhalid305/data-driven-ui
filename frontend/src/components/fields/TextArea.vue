<template>
  <div class="c-text-area">
    <v-textarea
      :label="fieldMeta.label"
      :hint="fieldMeta.placeholder"
      :rows="fieldMeta.rows || 1"
      :value="value"
      @change="$emit('input', $event)"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: "cTextArea",
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
