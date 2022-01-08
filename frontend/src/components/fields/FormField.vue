<template>
  <div class="c-form-field">
    <!-- I have implemented both way of rendering input fields (I recommend later) you can choose which one to keep -->
    <!-- 
        <cTextField
          v-if="field.type === 'text_field'"
          v-bind="field"
          v-bind:value="value[field.key]"
          v-on:input="input($event, field.key)"
        ></cTextField>
        <cDropdown
          v-else-if="field.type === 'dropdown'"
          v-bind="field"
          v-bind:value="value[field.key]"
          v-on:input="input($event, field.key)"
        ></cDropdown> 
        <cRadio
          v-if="field.type === 'radio'"
          v-bind="field"
          v-bind:value="value[field.key]"
          v-on:input="input($event, field.key)"
        ></cRadio>    
        <cTextArea
          v-if="field.type === 'text_area'"
          v-bind="field"
          v-bind:value="value[field.key]"
          v-on:input="input($event, field.key)"
        ></cTextArea>    
        <cCheckbox
          v-if="field.type === 'checkbox'"
          v-bind="field"
          v-bind:value="value[field.key]"
          v-on:input="input($event, field.key)"
        ></cCheckbox>   
        <cStaticBlock
          v-if="field.type === 'block'"
          v-bind="field"
          v-bind:value="value[field.key]"
          v-on:input="input($event, field.key)"
        ></cStaticBlock>    
    -->

    <component
      :is="fieldKeyMap[field.type]"
      :fieldMeta="field"
      :value="value"
      @input="$emit('input', $event)"
    ></component>
  </div>
</template>

<script>
// Components
import cTextField from "../fields/TextField.vue";
import cNumberField from "../fields/NumberField.vue";
import cDropdown from "../fields/Dropdown.vue";
import cRadio from "../fields/Radio.vue";
import cTextArea from "../fields/TextArea.vue";
import cCheckbox from "../fields/Checkbox.vue";
import cStaticBlock from "../fields/StaticBlock.vue";

// Constants
import { constantService } from "../../services/constantService";

export default {
  name: "cFormField",
  components: {
    cTextField,
    cNumberField,
    cDropdown,
    cRadio,
    cTextArea,
    cCheckbox,
    cStaticBlock
  },
  props: {
    value: [String, Boolean, Object, Array],
    field: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    // field to component mapping enum
    fieldKeyMap: constantService.fieldKeyToComponentMap
  })
};
</script>

<style>
</style>
