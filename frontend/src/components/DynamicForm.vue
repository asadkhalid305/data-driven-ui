<template>
  <div class="dynamic-form">
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row v-if="title">
          <v-col class="text-center">
            <h1>{{ title }}</h1>
          </v-col>
        </v-row>

        <div v-for="(blockFields, blockKey) in blocks" :key="blockKey">
          <component
            :is="componentMap[blockKey]"
            :meta="blockFields"
            v-model="formModel[blockKey]"
          ></component>

          <div class="my-8">
            <v-divider></v-divider>
          </div>
        </div>

        <!--
          added `v-if="title"` here to fix the submit button show up on init for a split second
          proper solution will be to render the form after API data has been fetched
         -->
        <v-btn
          v-if="title"
          :disabled="isSubmitDisabled"
          color="success"
          class="mr-4 mt-2"
          :class="{ 'mt-2': !valid }"
          @click="submit"
        >
          {{ submitConfig.label || "Submit" }}
        </v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
// Components
import cUserDetails from "../components/blocks/UserDetails.vue";
import cPatientDetails from "../components/blocks/PatientDetails.vue";
import cInsurancePlan from "../components/blocks/InsurancePlan.vue";
import cUserConsent from "../components/blocks/UserConsent.vue";

// Constants
import { blockIdToComponentMap } from "../constants/enums";

export default {
  name: "DynamicForm",
  components: { cUserDetails, cPatientDetails, cInsurancePlan, cUserConsent },
  props: {
    metadata: {
      type: Object,
      default: () => ({}),
    },
    config: {
      type: Object,
      default: () => ({}),
    },
    formModel: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    valid: false,

    // component mapping enum
    componentMap: blockIdToComponentMap,
  }),
  computed: {
    title() {
      return this.config.title; // || "Place Generic Title Here";
    },
    submitConfig() {
      return this.config?.submit || {};
    },
    isSubmitDisabled() {
      if (!this.valid) {
        return true;
      }

      const enableConfig = this.submitConfig?.allow;
      if (!enableConfig) {
        return false;
      }

      const { block, field, value } = enableConfig;
      const fieldValue = this.formModel[block]?.[field];

      return fieldValue === undefined || fieldValue !== value;
    },
    blocks() {
      return this.metadata;
    },
  },
  methods: {
    submit() {
      const payload = this.transformPayload();

      // after 2000 ms remove toast
      setTimeout(() => {
        console.log("submitted with payload (find table below)");
        console.table(payload);
      }, 3000);
    },
    transformPayload() {
      let payload = this.formModel;

      payload = this.orderPayload();
      // add more transformation if you want

      return payload;
    },
    orderPayload() {
      const { blocks: blocksConfig } = this.config;

      // check if payload key should be flattened or it should be inside it's block key
      return Object.entries(this.formModel).reduce(
        (accumulator, [key, value]) => {
          const { [key]: blockConfig = {} } = blocksConfig;

          if (blockConfig.flat) {
            // if payload for this block needs to be flat then, merge the key/value into the main payload
            Object.assign(accumulator, value);
          } else {
            // else values will be inside there own block key
            accumulator[key] = value;
          }

          return accumulator;
        },
        {}
      );
    },
  },
};
</script>

<style>
</style>