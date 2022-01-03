<template>
  <div class="static-form">
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col class="text-center">
            <h1>Insurance Claim Form</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field v-model="model.name" label="Name"></v-text-field>
          </v-col>
          <v-col>
            <v-select v-model="model.gender" :items="options_data.gender" label="Gender"></v-select>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field v-model="model.ssn" label="Social security number"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field v-model="model.telephone" label="Telephone number"></v-text-field>
          </v-col>
        </v-row>

        <div class="my-10">
          <v-divider></v-divider>
        </div>

        <v-row>
          <v-col>
            <v-select
              v-model="model.patient.relationship"
              :items="options_data.relationships"
              label="What is your relationship with patient?"
              @change="onChangeRelationship"
            ></v-select>
          </v-col>
        </v-row>

        <template v-if="isShowPatientDetails">
          <v-row>
            <v-col>
              <v-text-field v-model="model.patient.name" :label="`${relationshipText} name`"></v-text-field>
            </v-col>
            <v-col>
              <v-select
                v-model="model.patient.gender"
                :items="options_data.gender"
                :label="`${relationshipText} gender`"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model="model.patient.ssn"
                :label="`${relationshipText} social security number`"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="model.patient.telephone"
                :label="`${relationshipText} telephone number`"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-radio-group v-model="options_data.is_HICN">
                <template v-slot:label>
                  <div>Does patient have a HICN number?</div>
                </template>
                <v-radio :value="false">
                  <template v-slot:label>
                    <div>No</div>
                  </template>
                </v-radio>
                <v-radio :value="true">
                  <template v-slot:label>
                    <div>Yes</div>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col v-show="model.patient.is_HICN">
              <v-text-field v-model="model.patient.HICN" label="HICN number"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-textarea
                label="Describe injury or sickness"
                :value="model.patient.diagnosis"
                clearable
                rows="2"
              ></v-textarea>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field
                v-model="model.patient.physician"
                label="What is the name of physician who treated it first?"
              ></v-text-field>
            </v-col>
          </v-row>
        </template>

        <div class="my-10">
          <v-divider></v-divider>
        </div>

        <v-row>
          <v-col>
            <v-radio-group v-model="options_data.is_other_insurance_plan">
              <template v-slot:label>
                <div>Are you or your dependant covered under any other insurane plan?</div>
              </template>
              <v-radio :value="false">
                <template v-slot:label>
                  <div>No</div>
                </template>
              </v-radio>
              <v-radio :value="true">
                <template v-slot:label>
                  <div>Yes</div>
                </template>
              </v-radio>
            </v-radio-group>
          </v-col>
        </v-row>

        <template v-if="options_data.is_other_insurance_plan">
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

          <div
            v-for="count in model.other_insurance_plan_companies.length"
            :key="count"
            class="company-details-block my-8 pa-4"
          >
            <v-row>
              <v-col class="text-center">
                <p class="font-weight-bold">Insurance Plan {{count}}</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="Company name" @input="addCompanyDetail('name', $event, count)"></v-text-field>
              </v-col>
              <v-col>
                <v-text-field label="Address" @input="addCompanyDetail('address', $event, count)"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  label="Coverage type"
                  @input="addCompanyDetail('coverage_type', $event, count)"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  label="Policy number"
                  @input="addCompanyDetail('policy_number', $event, count)"
                ></v-text-field>
              </v-col>
            </v-row>
          </div>
        </template>

        <v-row>
          <v-col>
            <v-checkbox v-model="model.consent" label="Have your read all terms and conditions?"></v-checkbox>
          </v-col>
        </v-row>

        <v-btn
          :disabled="!valid || !model.consent"
          color="success"
          class="mr-4 mt-2"
          :class="{'mt-2': !valid}"
          @click="submit"
        >Submit</v-btn>

        <v-alert
          transition="fade-transition"
          :value="submitionDetails.successState"
          dense
          text
          type="success"
          class="mt-4"
        >{{ submitionDetails.successMessage }}</v-alert>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "StaticForm",
  // state
  data: () => ({
    valid: true,
    submitionDetails: {
      successMessage: "",
      successState: false
    },
    model: {
      name: "",
      gender: "",
      ssn: "",
      telephone: "",
      patient: {
        relationship: "",
        name: "",
        gender: "",
        ssn: "",
        telephone: "",
        HICN: "",
        diagnosis: "",
        first_physician: ""
      },
      other_insurance_plan_companies: [],
      consent: false
    },
    options_data: {
      gender: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
        { text: "Other", value: "other" }
      ],
      relationships: [
        { text: "Self", value: "self" },
        { text: "Parent", value: "parent" },
        { text: "Child", value: "child" },
        { text: "Spouse", value: "spouse" }
      ],
      is_HICN: false,
      is_other_insurance_plan: false,
      insurance_plan_count: 0
    }
  }),
  // similar to handlers, only difference is that it caches result
  computed: {
    relationshipText() {
      const foundRelationship = this.options_data.relationships.find(
        item => item.value === this.model.patient.relationship
      );
      return foundRelationship.text || "";
    },
    isShowPatientDetails() {
      return (
        this.model.patient.relationship !== "" &&
        this.model.patient.relationship !== "self"
      );
    }
  },
  // handlers
  methods: {
    submit() {
      // if form is valid, show success toast
      this.submitionDetails.successMessage = "Submitted";
      this.submitionDetails.successState = true;

      // after 2000 ms remove toast
      setTimeout(() => {
        this.submitionDetails.successState = false;
      }, 3000);
    },
    addCompanyDetail(key, value, count) {
      const foundComapanyIndex = this.model.other_insurance_plan_companies.findIndex(
        (company, index) => index === count - 1
      );
      if (foundComapanyIndex <= -1) {
        return;
      }
      this.model.other_insurance_plan_companies[foundComapanyIndex][
        key
      ] = value;
    },
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
    onChangeRelationship() {
      if (this.isShowPatientDetails) {
        return;
      }
      const { name, gender, ssn, telephone } = this.model;
      this.model.patient = {
        ...this.model.patient,
        ...{ name, gender, ssn, telephone }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.static-form {
  .company-details-block {
    outline: 1px solid;
  }
}
</style>