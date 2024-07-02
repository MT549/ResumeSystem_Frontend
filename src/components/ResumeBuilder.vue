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