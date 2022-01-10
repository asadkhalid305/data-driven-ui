<template>
  <div class="static-form">
    <v-container>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="user-details">
          <v-row>
            <v-col class="text-center">
              <h1>Insurance Claim Form</h1>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field v-model="formModel.name" label="Name"></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="formModel.gender" :items="options_data.gender" label="Gender"></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-text-field v-model="formModel.ssn" label="Social security number"></v-text-field>
            </v-col>
            <v-col>
              <v-select v-model="formModel.country" :items="options_data.countries" label="Country"></v-select>
            </v-col>
          </v-row>
        </div>

        <div class="my-8">
          <v-divider></v-divider>
        </div>

        <div class="patient-details">
          <v-row>
            <v-col>
              <v-select
                v-model="formModel.patient.relationship"
                :items="options_data.relationships"
                label="What is your relationship with patient?"
              ></v-select>
            </v-col>
          </v-row>

          <template v-if="this.formModel.patient.relationship">
            <template v-if="isShowPatientSpecificBlock">
              <v-row>
                <v-col>
                  <v-text-field v-model="formModel.patient.name" :label="`Patient name`"></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                    v-model="formModel.patient.gender"
                    :items="options_data.gender"
                    :label="`Patient gender`"
                  ></v-select>
                </v-col>
              </v-row>

              <v-row>
                <v-col>
                  <v-text-field
                    v-model="formModel.patient.ssn"
                    :label="`Patient social security number`"
                  ></v-text-field>
                </v-col>
                <v-col>
                  <v-select
                    v-model="formModel.country"
                    :items="options_data.countries"
                    label="Patient Country"
                  ></v-select>
                </v-col>
              </v-row>
            </template>

            <v-row>
              <v-col>
                <v-textarea
                  label="Describe injury or sickness"
                  :value="formModel.patient.diagnosis"
                  clearable
                  rows="2"
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text-field
                  v-model="formModel.patient.physician"
                  label="What is the name of physician who treated it first?"
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
              <v-col v-if="options_data.is_HICN">
                <v-text-field v-model="formModel.patient.HICN" label="HICN number"></v-text-field>
              </v-col>
            </v-row>
          </template>
        </div>

        <div class="my-8">
          <v-divider></v-divider>
        </div>

        <div class="insurance-plan">
          <v-row>
            <v-col>
              <v-radio-group v-model="formModel.check_insurance_plan">
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

          <template v-if="formModel.check_insurance_plan">
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
              v-for="count in formModel.insurance_company.length"
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
                  <v-text-field
                    label="Company name"
                    @input="addCompanyDetail('name', $event, count)"
                  ></v-text-field>
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
        </div>

        <div class="my-8">
          <v-divider></v-divider>
        </div>

        <div class="user-consent">
          <v-row>
            <v-col>
              <v-checkbox
                v-model="formModel.consent"
                label="Have your read all terms and conditions?"
              ></v-checkbox>
            </v-col>
          </v-row>
        </div>

        <v-btn
          class="mr-4 mt-2"
          color="success"
          :disabled="!valid || !formModel.consent"
          :loading="submitionDetails.loading"
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
import { apiDataService } from "../services/apiDataService";
export default {
  name: "StaticForm",
  data: () => ({
    valid: true,
    submitionDetails: {
      successMessage: "",
      successState: false,
      loading: false
    },
    formModel: {
      name: "",
      gender: "",
      ssn: "",
      country: "",
      patient: {
        relationship: "",
        name: "",
        gender: "",
        ssn: "",
        country: "",
        HICN: "",
        diagnosis: "",
        first_physician: ""
      },
      check_insurance_plan: false,
      insurance_company: [],
      consent: false
    },
    options_data: {
      countries: [],
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
      insurance_plan_count: 0
    }
  }),
  computed: {
    isShowPatientSpecificBlock() {
      return this.formModel.patient.relationship !== "self";
    }
  },
  created() {
    apiDataService.getCountries().then(res => {
      this.options_data.countries = res.data || [];
    });
  },
  methods: {
    submit() {
      // set loader on submit button
      this.submitionDetails.loading = true;

      // after 1000 ms remove loader and show toast
      setTimeout(() => {
        this.submitionDetails.loading = false;
        this.submitionDetails.successMessage = "Submitted";
        this.submitionDetails.successState = true;
        console.log("submitted with payload");
        console.log(this.formModel);
      }, 1000);

      // after 3000 ms remove toast
      setTimeout(() => {
        this.submitionDetails.successState = false;
      }, 3000);
    },
    addCompanyDetail(key, value, count) {
      const foundComapanyIndex = this.formModel.insurance_company.findIndex(
        (company, index) => index === count - 1
      );
      if (foundComapanyIndex <= -1) {
        return;
      }
      this.formModel.insurance_company[foundComapanyIndex][key] = value;
    },
    onChangeInsurancePlanCount(count) {
      if (count > this.options_data.insurance_plan_count) {
        const newCompany = {
          name: "",
          address: "",
          coverage_type: "",
          policy_number: ""
        };
        this.formModel.insurance_company.push(newCompany);
      } else {
        this.formModel.insurance_company.pop();
      }
      this.options_data.insurance_plan_count = count;
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