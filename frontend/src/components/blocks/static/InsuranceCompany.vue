<template>
  <div class="c-insurance-company">
    <div class="company-details-block my-8 pa-4">
      <v-row>
        <v-col class="text-center">
          <p class="font-weight-bold">Insurance Plan {{ count }}</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="Company name" @input="input('name', $event, count)"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field label="Address" @input="input('address', $event, count)"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="Coverage type" @input="input('coverage_type', $event, count)"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field label="Policy number" @input="input('policy_number', $event, count)"></v-text-field>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "cInsuranceCompany",
  props: {
    count: {
      type: Number,
      default: () => ({})
    }
  },
  data: () => ({}),
  methods: {
    input(key, value, count) {
      this.$emit("input", { key, value, count });
    }
  }
};
</script>

<style lang="scss" scoped>
.c-insurance-company {
  .company-details-block {
    outline: 1px solid;
  }
}
</style>
