<template>
  <div class="static-example-easy">
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        :class="{'mt-2': !valid}"
        @click="submit"
      >Submit</v-btn>

      <v-alert
        transition="fade-transition"
        :value="successState"
        dense
        text
        type="success"
        class="mt-4"
      >{{ successMessage }}</v-alert>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "StaticExampleEasy",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    successMessage: "",
    successState: false
  }),
  methods: {
    submit() {
      // validate form
      this.valid = this.$refs.form.validate();

      // if form is invalid do nothing
      if (!this.valid) {
        return;
      }

      // if form is valid, show success toast
      this.successMessage = "Success";
      this.successState = true;

      // after 2000 ms remove toast
      setTimeout(() => {
        this.successState = false;
      }, 2000);
    }
  }
};
</script>

<style>
</style>