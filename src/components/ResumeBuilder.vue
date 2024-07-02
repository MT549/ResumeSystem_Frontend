<template>
  <br/>
  <v-container fluid variant="outlined">
    <v-stepper :items="jobItmes">
      <template v-slot:item.1>
        <v-card title="Job details" flat>
          <v-textarea
            label="Job Description"
            v-model="jobdescription"
            variant="filled"
            auto-grow
          ></v-textarea>
          <v-text-field
            v-model="jobtitle"
            class="mb-2"
            label="Job Title"
            hide-details
          ></v-text-field>
        </v-card>

        <v-card title="Personal details" flat>
          <v-row>
            <v-col cols="12">
              <v-text-field
              v-model="fullName"
              class="mb-2"
              label="Full Name"
              hide-details
              ></v-text-field>
            </v-col>
          </v-row>  
          
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="email"
                class="mb-2"
                label="Email"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="phoneNumber"
                class="mb-2"
                label="Phone Number"
                hide-details
              ></v-text-field>
            </v-col>
          </v-row> 

          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="linkedinURL"
                class="mb-2"
                label="LinkedIn URL"
                hide-details
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="websiteURL"
                class="mb-2"
                label="Website URL"
                hide-details
              ></v-text-field>
            </v-col>
          </v-row> 

        </v-card>
      </template>


      <template v-slot:item.2>
        <v-card title="Education" >
          <br/>
          <v-row class="ml-3">
            <v-col cols="4"  class="border border-md">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="degree"
                    class="mb-2"
                    label="Degree"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="major"
                    class="mb-2"
                    label="Major"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="institution"
                    class="mb-2"
                    label="Institution"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="location"
                    class="mb-2"
                    label="Location"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="eduStartDate"
                    class="mb-2"
                    label="Start Date"
                    type="date"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="eduEndDate"
                    class="mb-2"
                    label="End Date"
                    type="date"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="gpa"
                    class="mb-2"
                    label="GPA"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="course"
                    class="mb-2"
                    label="Course"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="5"></v-col>
                <v-col cols="7">
                  <v-btn
                  color="#711429"
                  size="large"
                  variant="elevated"
                  rounded="xl"
                >
                  Add
                </v-btn>
                </v-col>
              </v-row>
              
            </v-col>
            <v-col cols="8">
              <v-textarea
                label="Education generated text"
                v-model="educationGenerated"
                variant="filled"
                rows="15"
                auto-grow
              ></v-textarea>
            </v-col>
          </v-row> 
        <br/>

        </v-card>
      </template>


      <template v-slot:item.3>
        <v-card title="Experience">
          <br/>
          <v-row class="ml-3 mb-3">
            <v-col cols="4"  class="border border-md">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="employer"
                    class="mb-2"
                    label="Employer"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="jobTitle"
                    class="mb-2"
                    label="Title"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="jobLocation"
                    class="mb-2"
                    label="Location"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="jobAccomplishments"
                    class="mb-2"
                    label="Accomplishments"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="jobStartDate"
                    class="mb-2"
                    label="Start Date"
                    type="date"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="jobEndDate"
                    class="mb-2"
                    label="End Date"
                    type="date"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="5"></v-col>
                <v-col cols="7">
                  <v-btn
                  color="#711429"
                  size="large"
                  variant="elevated"
                  rounded="xl"
                  >
                    Add
                  </v-btn>
                </v-col>
              </v-row>
              
            </v-col>
            <v-col cols="8">
              <v-textarea
                label="Experience generated text"
                v-model="educationGenerated"
                variant="filled"
                rows="15"
                auto-grow
              ></v-textarea>
            </v-col>
          </v-row> 
        </v-card>
      </template>
    
      <template v-slot:item.4>
        <v-card title="Skills" flat>
          <br/>
          <v-row class="ml-3 mb-3">
            <v-col cols="4"  class="border border-md">
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    v-model="skillName"
                    class="mb-2"
                    label="Skill Name"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    v-model="skillLevel"
                    class="mb-2"
                    label="Skill Level"
                    hide-details
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="5"></v-col>
                <v-col cols="7">
                  <v-btn
                  color="#711429"
                  size="large"
                  variant="elevated"
                  rounded="xl"
                >
                  Add
                </v-btn>
                </v-col>
              </v-row>
              
            </v-col>
            <v-col cols="8">
              <v-textarea
                label="Skills generated text"
                v-model="skillGenerated"
                variant="filled"
                rows="15"
                auto-grow
              ></v-textarea>
            </v-col>
          </v-row> 
        </v-card>
      </template>

      <template v-slot:item.5>
        <v-card flat>
          <v-row>
            <v-col cols="9">
              <v-select
                v-model="tempalte"
                :items="tempalteItems"
                label="Choose Template"
                required
              ></v-select>
            </v-col>
            <v-col cols="1">
              <v-btn
                color="#711429"
                size="large"
                variant="elevated"
                rounded="xl"
              >
                Preview
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn
                color="#711429"
                size="large"
                variant="elevated"
                rounded="xl"
              >
                Save
              </v-btn>
            </v-col>
            <v-col cols="1">
              <v-btn
                color="#711429"
                size="large"
                variant="elevated"
                rounded="xl"
              >
                Download
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
        <v-card title="Preview" flat>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </v-card>
      </template>
    </v-stepper>
  </v-container>
  <br/>
  <v-overlay
    :model-value="loadingOverlay"
    class="align-center justify-center"
    :persistent="diableOverlay"
  >
      <v-progress-circular
          color="#711429"
          indeterminate
          size="64"
          class="align-center"
      ></v-progress-circular>
      <h3>{{loadingMSG}}</h3>
  </v-overlay>

  <v-snackbar
    v-model="snackbar"
    :timeout="timeout"
  >
    {{ snackbarMSG }}
  </v-snackbar>
</template>

<script>
import { CohereClient } from "cohere-ai"

  export default {
    data: () => ({
      step: null,
      currentStep: null,
      loadingMSG: null,
      loadingOverlay: false,
      diableOverlay: false,
      timeout: 2000,
      snackbar: false,
      snackbarMSG: "",
      jobItmes: ['Job and Personal details', 'Education', 'Experience', 'Skills', 'Preview'],
      jobdescription: "",
      jobtitle: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      linkedinURL: "",
      websiteURL: "",
      degree: "",
      major: "",
      institution: "",
      location: "",
      eduStartDate: "",
      eduEndDate: "",
      websiteURL: "",
      employer: "",
      jobTitle: "",
      jobLocation: "",
      jobAccomplishments: "",
      jobStartDate: "",
      jobEndDate: "",
      skillName: "",
      skillLevel: "",
      skillGenerated: "",
      tempalteItems: ['Template 1', 'Template 2', 'Template 3', 'Template 4'],
      tempalte: "",
    }),

    methods: {
      onLoad(){

      },
      clearFields(){
           
      },
      setLoadingOverLay(isShow, message){
          if(isShow){
              this.loadingOverlay = true
              this.loadingMSG = message
          }
          else{
              this.loadingOverlay = false
              this.loadingMSG = null
          }
      },
      showSnackBar(msg){
          this.snackbar = true
          this.snackbarMSG = msg
      }
    },
    watch: {
    
    },
    beforeMount(){
      this.onLoad()
    }
  }
</script>