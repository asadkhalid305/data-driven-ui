<template>
  <div class="c-static-block">
    <InsuranceCompany
      v-if="fieldMeta.key === 'insurance_company'"
      :fieldMeta="fieldMeta"
      :value="value"
      @input="$emit('input', $event)"
    ></InsuranceCompany>
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
      default: () => ({}),
    },
  },
};
</script>

<style>
</style>
