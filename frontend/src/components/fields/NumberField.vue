<template>
  <div class="c-number-field">
    <v-text-field
      type="number"
      :max="getRange('max')"
      :min="getRange('min')"
      :label="fieldMeta.label"
      :hint="fieldMeta.placeholder"
      :value="value"
      @input="$emit('input', $event)"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "cNumberField",
  props: {
    value: String,
    fieldMeta: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getRange(type) {
      let limit = undefined;
      switch (type) {
        case "max":
          limit =
            (this.fieldMeta &&
              this.fieldMeta.validation &&
              this.fieldMeta.validation.max) ||
            undefined;
          break;
        case "min":
          limit =
            (this.fieldMeta &&
              this.fieldMeta.validation &&
              this.fieldMeta.validation.min) ||
            undefined;
          break;
        default:
          break;
      }
      return limit;
    }
  }
};
</script>

<style>
</style>
