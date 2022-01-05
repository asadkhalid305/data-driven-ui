<template>
  <div class="c-dropdown">
    <v-select
      :label="fieldMeta.label"
      :hint="fieldMeta.placeholder"
      :items="options"
      :value="value"
      @input="$emit('input', $event)"
      :loading="loading"
    ></v-select>
  </div>
</template>

<script>
// Services
import { apiDataService } from "../../services/apiDataService";

export default {
  name: "cDropdown",
  props: {
    value: String,
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
      await this.getOptionsData();
    }
  },
  methods: {
    async getOptionsData() {
      const { input_data_api } = this.fieldMeta;
      const { url, method, body } = input_data_api || {};

      // XXX: @asad I have implemented both way of async js (I recommend async-await) you can choose which one to keep

      // this.loading = true;
      // apiDataService
      //   .callMetaSourceApi(url, method, body)
      //   .then((response) => {
      //     console.log(response);

      //     this.options = response.data || {};
      //   })
      //   .catch((error) => {
      //     console.error({ error });
      //   })
      //   .finally(() => {
      //     this.loading = false;
      //   });

      try {
        this.loading = true;
        const { data = [] } =
          (await apiDataService.callMetaSourceApi(url, method, body)) || {};
        this.options = data;
      } catch (err) {
        throw new Error(`API failed`, { err });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style>
</style>
