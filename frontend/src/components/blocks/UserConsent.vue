<template>
  <div class="c-user-consent">
    <v-row>
      <v-col v-for="field in fields" :key="field.key" :cols="getColumnNumber(field)">
        <cFormField
          :field="field"
          v-bind:value="value[field.key]"
          v-on:input="input($event, field.key)"
        ></cFormField>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// Mixins
import blockBaseMixin from "../../mixins/block.base.mixin";

export default {
  name: "cUserConsent",
  mixins: [blockBaseMixin],
};
</script>

<style>
</style>
