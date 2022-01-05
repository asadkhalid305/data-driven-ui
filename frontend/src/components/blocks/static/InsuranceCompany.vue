<template>
  <div class="c-insurance-company">
    <v-row>
      <v-col>
        {{ fieldMeta.misc.remove_me }}

        <v-text-field
          :label="fieldOne.label"
          :hint="fieldOne.placeholder"
          :value="value[fieldOne.key]"
          @input="input($event, fieldOne.key)"
        ></v-text-field>

        <v-textarea
          :label="fieldTwo.label"
          :hint="fieldTwo.placeholder"
          :value="value[fieldTwo.key]"
          @change="input($event, fieldTwo.key)"
        ></v-textarea>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "cInsuranceCompany",
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    fieldMeta: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    fieldOne: { key: "abc_key", label: "Abc" },
    fieldTwo: { key: "xyz_key", label: "Xyz" },
  }),
  methods: {
    input(event, key) {
      const obj = { [key]: event };
      this.$emit("input", { ...this.value, ...obj });
    },
  },
};
</script>

<style>
</style>
