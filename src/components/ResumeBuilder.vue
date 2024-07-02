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
  