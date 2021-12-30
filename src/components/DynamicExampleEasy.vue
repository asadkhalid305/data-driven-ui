<template>
  <div class="dynamic-example-easy">
    <h1>Dynamic Example Easy</h1>
  </div>
</template>

<script>
export default {
  name: "DynamicExampleEasy",
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