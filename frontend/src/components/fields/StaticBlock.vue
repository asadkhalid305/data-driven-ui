<template>
  <div class="c-static-block">
    <template v-if="fieldMeta.key === 'insurance_company'">
      <v-row>
        <v-col>
          <v-text-field
            label="How many insurance plans do you or your dependant currently have?"
            type="number"
            max="3"
            min="0"
            @input="onChangeInsurancePlanCount"
          ></v-text-field>
        </v-col>
      </v-row>

      <InsuranceCompany
        v-for="count in model.other_insurance_plan_companies.length"
        :key="count"
        :count="count"
        @input="addCompanyDetail"
      ></InsuranceCompany>
    </template>
  </div>
</template>

<script>
//Components
import InsuranceCompany from "../blocks/static/InsuranceCompany.vue";

export default {
  name: "cStaticBlock",
  components: { InsuranceCompany },
  props: {
    value: [String, Object],
    fieldMeta: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    options_data: {
      insurance_plan_count: 0
    },
    model: {
      other_insurance_plan_companies: []
    }
  }),
  methods: {
    onChangeInsurancePlanCount(count) {
      if (count > this.options_data.insurance_plan_count) {
        const newCompany = {
          name: "",
          address: "",
          coverage_type: "",
          policy_number: ""
        };
        this.model.other_insurance_plan_companies.push(newCompany);
      } else {
        this.model.other_insurance_plan_companies.pop();
      }
      this.options_data.insurance_plan_count = count;
    },
    addCompanyDetail({ key, value, count }) {
      const foundComapanyIndex = this.model.other_insurance_plan_companies.findIndex(
        (company, index) => index === count - 1
      );
      if (foundComapanyIndex <= -1) {
        return;
      }
      this.model.other_insurance_plan_companies[foundComapanyIndex][
        key
      ] = value;

      this.$emit("input", [...this.model.other_insurance_plan_companies]);
    }
  }
};
</script>