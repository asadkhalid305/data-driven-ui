<template>
  <div class="c-radio">
    <v-radio-group
      :label="fieldMeta.label"
      :hint="fieldMeta.placeholder"
      :value="value"
      @change="$emit('input', $event)"
      mandatory
    >
      <v-radio
        v-for="option in options"
        :key="option.value"
        :label="option.text"
        :value="option.value"
      >
      </v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: "cRadio",
  props: {
    value: [String, Boolean],
    fieldMeta: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    options: [],
    loading: false,
  }),
  async created() {
    if (this.fieldMeta.is_static_options) {
      this.options = this.fieldMeta.static_options;
    } else {
      // await this.getOptionsData(); // see `cDropdown` for implementation if needed (better created a common mixin)
    }
  },
};
</script>

<style>
</style>
