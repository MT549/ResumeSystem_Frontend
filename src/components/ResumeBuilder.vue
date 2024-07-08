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
                  v-model="location"
                  class="mb-2"
                  label="Location"
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
          <v-card title="Professional Summary" >
            <br/>
            <v-row class="ml-3">
              <v-textarea
                  label="Professional Summary"
                  v-model="professionalSummary"
                  variant="filled"
                  rows="15"
                  auto-grow
                ></v-textarea>
            </v-row> 
            <br/>
          </v-card>
        </template>

        <template v-slot:item.3>
          <v-card title="Education" >
            <br/>
            <v-row class="ml-3">
              <v-col cols="4"  class="border border-md">

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
                      v-model="degree"
                      class="mb-2"
                      label="Degree"
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="gpa"
                      class="mb-2"
                      label="GPA"
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="eduStartDate"
                      class="mb-2"
                      label="Start Date (MMM,YYYY)"
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="eduEndDate"
                      class="mb-2"
                      label="End Date (MMM,YYYY)"
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="eduLocation"
                      class="mb-2"
                      label="Location"
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3">
                    <v-btn
                    color="#711429"
                    variant="elevated"
                    rounded="xl"
                    @click="this.awardsOverlay = !this.awardsOverlay"
                    block
                    >
                      Awards
                    </v-btn>
                  </v-col>
                  <v-col cols="3">
                    <v-btn
                    color="#711429"
                    variant="elevated"
                    rounded="xl"
                    @click="this.coursesOverlay = !this.coursesOverlay"
                    block
                    >
                      Courses
                    </v-btn>
                  </v-col>
                  <v-col cols="3">
                    <v-spacer></v-spacer>
                    <v-btn
                    color="#711429"
                    variant="elevated"
                    rounded="xl"
                    @click="clearEducationFeilds"
                    block
                    >
                      Clear
                    </v-btn>
                  </v-col>
                  <v-col cols="3">
                    <v-spacer></v-spacer>
                    <v-btn
                    color="#711429"
                    variant="elevated"
                    rounded="xl"
                    @click="addEducation"
                    block
                    >
                      Add
                    </v-btn>
                  </v-col>
                </v-row>

              </v-col>

              <v-col cols="8">
                <p>Added Educations: </p>
                <br/>
                <v-row v-for="(edu,index) in selectedEducationDetails">
                  <v-col cols="1"><v-icon color="#fff" > mdi-arrow-right  </v-icon></v-col>
                  <v-col cols="9">
                    <div>
                      <h3>{{edu.institution}}</h3>
                      <p>Major: {{ edu.major }} || Institution: {{ edu.institution }} || Location: {{ edu.location }} || {{ edu.eduStartDate }} - {{ edu.eduEndDate }} || GPA: {{ edu.gpa }}</p>
                      <h4>Awards</h4>
                      <p v-for="award in edu.awards">&nbsp;&nbsp;- {{ award }}</p>
                      <h4>Courses</h4>
                      <p v-for="course in edu.courses">&nbsp;&nbsp;- {{ course }}</p>
                    </div>
                  </v-col>
                  <v-col cols="2">
                    <v-btn size="small" variant="tonal" @click="removeEducation(index)">
                      <v-icon color="#711429" > mdi-book-open  </v-icon>&nbsp;
                      Remove
                    </v-btn>
                  </v-col>
                  <v-divider></v-divider>
                </v-row>
              </v-col>
            </v-row> 
            <br/>
          </v-card>
        </template>

        <template v-slot:item.4>
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
                      label="Job Title"
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="jobLocation"
                      class="mb-2"
                      label="Location"
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="jobStartDate"
                      class="mb-2"
                      label="Start Date (MMM,YYYY)"
                      hide-details
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="jobEndDate"
                      class="mb-2"
                      label="End Date (MMM,YYYY)"
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="4">
                    <v-btn
                      color="#711429"
                      variant="elevated"
                      rounded="xl"
                      @click="this.notesOverlay = !this.notesOverlay"
                      block
                    >
                      Notes
                    </v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn
                    color="#711429"
                    variant="elevated"
                    rounded="xl"
                    @click="clearExperienceFeilds"
                    block
                    >
                      Clear
                    </v-btn>
                  </v-col>
                  <v-col cols="4">
                    <v-btn
                    color="#711429"
                    variant="elevated"
                    rounded="xl"
                    @click="addExperience"
                    block
                    >
                      Add
                    </v-btn>
                  </v-col>
                </v-row>
                
              </v-col>

              <v-col cols="8">
                <p>Added Experiences: </p>
                <br/>
                <v-row v-for="(exp,index) in selectedExperienceDetails">
                  <v-col cols="1"><v-icon color="#fff" > mdi-arrow-right  </v-icon></v-col>
                  <v-col cols="9">
                    <div>
                      <h3>{{exp.employer}}</h3>
                      <p>{{ exp.jobTitle }} || Location: {{ exp.jobLocation }} || {{ exp.jobStartDate }} - {{ exp.jobEndDate }}</p>
                      <p v-for="note in exp.experienceNote">&nbsp;&nbsp;- {{ note }}</p>
                    </div>
                  </v-col>
                  <v-col cols="2">
                    <v-btn size="small" variant="tonal" @click="removeExperience(index)">
                      <v-icon color="#711429" > mdi-book-open  </v-icon>&nbsp;
                      Remove
                    </v-btn>
                  </v-col>
                  <v-divider></v-divider>
                </v-row>
              </v-col>
            </v-row> 
          </v-card>
        </template>
      
        <template v-slot:item.5>
          <v-card title="Skills" flat>
            <br/>
            <v-row class="ml-3 mb-3">
              <v-col cols="4"  class="border border-md">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="skillName"
                      class="mb-2"
                      label="Skill Name"
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="skillLevel"
                      class="mb-2"
                      label="Skill Level"
                      hide-details
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="3"></v-col>
                  <v-col cols="6">
                    <v-btn
                    color="#711429"
                    size="large"
                    variant="elevated"
                    rounded="xl"
                    @click="addSkill"
                    block
                  >
                    Add
                  </v-btn>
                  </v-col>
                  <v-col cols="3"></v-col>
                </v-row>
                
              </v-col>
              <v-col cols="8">
                <p>Added Skills: </p>
                <br/>
                <v-row v-for="(skill,index) in selectedSkills">
                  <v-col cols="1"><v-icon color="#fff" > mdi-arrow-right  </v-icon></v-col>
                  <v-col cols="9">
                    <div>
                      <h3>{{skill.skillName}}</h3>
                      <p>{{ skill.skillLevel }}</p>
                    </div>
                  </v-col>
                  <v-col cols="2">
                    <v-btn size="small" variant="tonal" @click="removeSkill(index)">
                      <v-icon color="#711429" > mdi-book-open  </v-icon>&nbsp;
                      Remove
                    </v-btn>
                  </v-col>
                  <v-divider></v-divider>
                </v-row>
              </v-col>
            </v-row> 
          </v-card>
        </template>

        <template v-slot:item.6>
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
                  @click="preview"
                  block
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
                  block
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
                  block
                  @click="exportToPDF"
                >
                  Download
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
          <v-card flat v-if="tempalte == 'Template 1' && showTemplate" width="70%" color="#fff">
            
                  <section class="pdf-item">
                    <v-card class="mx-auto px-10 py-8 overflow-y-auto" color="#fff">
                      <div style="text-align:center;">
                        <h2>{{ resumeDetails.fullName }}</h2>
                        <p>{{ resumeDetails.location }} | {{ resumeDetails.phoneNumber }} | {{ resumeDetails.email }} | {{ resumeDetails.email }}</p>
                        <hr/>
                      </div>

                      <div>
                        <br/>
                        <h3>Professional Summary</h3>
                        <hr/>
                        <p>
                          {{ resumeDetails.professionalSummary }}
                        </p>
                      </div>

                      <div>
                        <br/>
                        <h3>Education</h3>
                        <hr/>
                        <div v-for="edu in resumeDetails.educationDetails">
                          <br/>
                          <v-row class="px-3">
                            <p style="font-size:16px;">
                              <b>{{ edu.institution }}, {{ edu.location }} </b>
                            </p>
                            <v-spacer></v-spacer>
                            <p style="font-size:14px;">
                              {{ edu.eduStartDate }} - {{ edu.eduEndDate }}
                            </p>
                          </v-row>
                          <br style="line-height:0px;margin: 6px 0;display: block;"/>
                          <div style="font-size:14px;">
                            <p>{{ edu.degree }}</p>
                            <p>GPA: {{ edu.gpa }}</p>
                            <p>Awards: {{ edu.awards.toString() }}</p>
                            <p>Courses: {{ edu.courses.toString() }}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <br/>
                        <h3>Experience</h3>
                        <hr/>
                        <div v-for="experience in resumeDetails.experienceDetails">
                          <br/>
                          <v-row class="px-3">
                            <p  style="font-size:16px;">
                              <b>{{ experience.employer }}, {{ experience.jobTitle }}, {{ experience.jobLocation }} </b>
                            </p>
                            <v-spacer></v-spacer>
                            <p>
                              Date ({{ experience.jobStartDate }} - {{ experience.jobEndDate }})
                            </p>
                          </v-row>
                          <br style="line-height:0px;margin: 6px 0;display: block;"/>
                          <div style="font-size:14px;">
                            <p v-for="note in experience.experienceNote">●	{{ note }}</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <br/>
                        <h3>Skills</h3>
                        <hr/>
                        <p v-for="skill in resumeDetails.skills">●	{{ skill.skillName }} : {{ skill.skillLevel }}</p>

                      </div>
                    </v-card>
            </section>
          </vue-html2pdf>
          </v-card>
        </template>
      </v-stepper>
    </v-container>
    <br/>

    <v-overlay
      :model-value="awardsOverlay"
      class="align-center justify-center"
      persistent
    >
      <v-card class="mx-auto px-10 py-3" width="850px" height="80px" color="#711429">
        <v-row >
          <v-col cols="8"> 
            <v-text-field
                v-model="currentAward"
                class="mb-1"
                clearable
                label="Enter Award"
              ></v-text-field>
          </v-col>
          <v-col cols="2" class="py-5">
            <v-btn
              @click="addAward"
              color="#121212"
              block
            >
              Add
            </v-btn>
          </v-col>
          <v-col cols="2" class="py-5">
            <v-btn
              @click="this.awardsOverlay = !this.awardsOverlay"
              color="#121212"
              block
            >
              Done
            </v-btn>
          </v-col>
        </v-row>
      <br/>
      </v-card>
      <v-card class="mx-auto px-10 py-5" width="850px" height="500px">
        <v-row>
          <v-list>
            <v-list-item
              v-for="award in awards"
              :key="award"
              :title= "award"
              prepend-icon="mdi-arrow-right"
            >
              <v-spacer></v-spacer>
              <template v-slot:append>
                <v-btn size="small" variant="tonal" @click="removeAward(award)">
                  <v-icon color="#711429" > mdi-book-open  </v-icon>&nbsp;
                  Remove
                </v-btn>
                &nbsp;
              </template>
              <v-divider color="#fff"></v-divider>
            </v-list-item>
        </v-list>
        </v-row>
      </v-card>
    </v-overlay>

    <v-overlay
      :model-value="coursesOverlay"
      class="align-center justify-center"
      persistent
    >
      <v-card class="mx-auto px-10 py-3" width="850px" height="80px" color="#711429">
        <v-row >
          <v-col cols="8"> 
            <v-text-field
                v-model="currentCourse"
                class="mb-1"
                clearable
                label="Enter Course"
              ></v-text-field>
          </v-col>
          <v-col cols="2" class="py-5">
            <v-btn
              @click="addCourse"
              color="#121212"
              block
            >
              Add
            </v-btn>
          </v-col>
          <v-col cols="2" class="py-5">
            <v-btn
              @click="this.coursesOverlay = !this.coursesOverlay"
              color="#121212"
              block
            >
              Done
            </v-btn>
          </v-col>
        </v-row>
      <br/>
      </v-card>
      <v-card class="mx-auto px-10 py-5" width="850px" height="500px">
        <v-row>
          <v-list>
            <v-list-item
              v-for="course in courses"
              :key="course"
              :title= "course"
              prepend-icon="mdi-arrow-right"
            >
              <v-spacer></v-spacer>
              <template v-slot:append>
                <v-btn size="small" variant="tonal" @click="removeCourse(course)">
                  <v-icon color="#711429" > mdi-book-open  </v-icon>&nbsp;
                  Remove
                </v-btn>
                &nbsp;
              </template>
              <v-divider color="#fff"></v-divider>
            </v-list-item>
        </v-list>
        </v-row>
      </v-card>
    </v-overlay>

    <v-overlay
      :model-value="notesOverlay"
      class="align-center justify-center"
      persistent
    >
      <v-card class="mx-auto px-10 py-3" width="850px" height="80px" color="#711429">
        <v-row >
          <v-col cols="8"> 
            <v-text-field
                v-model="currentNote"
                class="mb-1"
                clearable
                label="Enter Note"
              ></v-text-field>
          </v-col>
          <v-col cols="2" class="py-5">
            <v-btn
              @click="addNote"
              color="#121212"
              block
            >
              Add
            </v-btn>
          </v-col>
          <v-col cols="2" class="py-5">
            <v-btn
              @click="this.notesOverlay = !this.notesOverlay"
              color="#121212"
              block
            >
              Done
            </v-btn>
          </v-col>
        </v-row>
      <br/>
      </v-card>
      <v-card class="mx-auto px-10 py-5" width="850px" height="500px">
        <v-row>
          <v-list>
            <v-list-item
              v-for="note in experienceNote"
              :key="note"
              :title= "note"
              prepend-icon="mdi-arrow-right"
            >
              <v-spacer></v-spacer>
              <template v-slot:append>
                <v-btn size="small" variant="tonal" @click="removeNote(note)">
                  <v-icon color="#711429" > mdi-book-open  </v-icon>&nbsp;
                  Remove
                </v-btn>
                &nbsp;
              </template>
              <v-divider color="#fff"></v-divider>
            </v-list-item>
          </v-list>
        </v-row>
      </v-card>
    </v-overlay>

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
  import html2pdf from "html2pdf.js";
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
        jobItmes: ['Job and Personal details', "Professional Summary", 'Education', 'Experience', 'Skills', 'Preview'],

        jobdescription: "",
        jobtitle: "",

        fullName: "",
        email: "",
        phoneNumber: "",
        websiteURL: "",
        location: "",

        professionalSummary:"",
        
        degree: "",
        major: "",
        institution: "",
        eduLocation: "",
        eduStartDate: "",
        eduEndDate: "",
        gpa: "",
        awards: [],
        courses: [],
        educationDetails: [],
        selectedEducationDetails: [],
        educationGenText: "",

        employer: "",
        jobTitle: "",
        jobLocation: "",
        jobStartDate: "",
        jobEndDate: "",
        experienceNote: [],
        experienceDetails: [],
        selectedExperienceDetails: [],

        skillName: "",
        skillLevel: "",
        skillGenerated: "",
        selectedSkills:[],
        skills: [],

        tempalteItems: ['Template 1'],
        tempalte: "",
        opt: {
            margin: 0,
            filename: 'myResume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        },

        awardsOverlay: false,
        currentAward: "",
        coursesOverlay: false,
        currentCourse: "",
        notesOverlay: false,
        currentNote: "",
        resumeDetails: null,
        showTemplate: false
      }),
  
      methods: {
        onLoad(){
          this.resumeDetails = {
            fullName: this.fullName,
            location: this.location,
            phoneNumber: this.phoneNumber,
            email: this.email,
            websiteURL: this.websiteURL,
            professionalSummary: this.professionalSummary,
            educationDetails: this.selectedEducationDetails,
            experienceDetails: this.selectedExperienceDetails,
            skills: this.selectedSkills,
            jobdescription: this.jobdescription,
            jobtitle: this.jobtitle
          }
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
        },

        addEducation(){
          var educationDetail = {
            degree: this.degree,
            major: this.major,
            institution: this.institution,
            location: this.location,
            eduStartDate: this.eduStartDate,
            eduEndDate: this.eduEndDate,
            gpa: this.gpa,
            awards: this.awards,
            courses: this.courses
          }
          this.selectedEducationDetails.push(educationDetail)
          this.clearEducationFeilds()
        },
        removeEducation(index){
            if(this.selectedEducationDetails.length > 1){
              console.log(index)
              this.selectedEducationDetails.splice(index, 1);
            }
            else{
              this.selectedEducationDetails = []
            }
        },
        addAward(){
          if(this.currentAward != ""){
            this.awards.push(this.currentAward)
            this.currentAward = ""
          }
        },
        removeAward(award){
          if(award != ""){
            if(this.awards.length > 1){
              var index = this.awards.indexOf(award);
              console.log(award)
              console.log(index)
              this.awards.splice(index, 1);
            }
            else{
              this.awards = []
            }
          }
        },
        addCourse(){
          if(this.currentCourse != ""){
            this.courses.push(this.currentCourse)
            this.currentCourse = ""
          }
        },
        removeCourse(course){
          if(course != ""){
            if(this.courses.length > 1){
              var index = this.courses.indexOf(course);
              console.log(course)
              console.log(index)
              this.courses.splice(index, 1);
            }
            else{
              this.courses = []
            }
          }
        },
        clearEducationFeilds(){
          this.degree = ""
          this.major = ""
          this.institution = ""
          this.location = ""
          this.eduStartDate = ""
          this.eduEndDate = ""
          this.gpa = ""
          this.awards = []
          this.courses = []
        },
        
        addExperience(){
          var experienceDetail = {
            employer: this.employer,
            jobTitle: this.jobTitle,
            jobLocation: this.jobLocation,
            jobStartDate: this.jobStartDate,
            jobEndDate: this.jobEndDate,
            experienceNote: this.experienceNote
          }
          this.selectedExperienceDetails.push(experienceDetail)
          this.clearExperienceFeilds()
        },
        removeExperience(index){
            if(this.selectedExperienceDetails.length > 1){
              console.log(index)
              this.selectedExperienceDetails.splice(index, 1);
            }
            else{
              this.selectedExperienceDetails = []
            }
        },
        addNote(){
          if(this.currentNote != ""){
            this.experienceNote.push(this.currentNote)
            this.currentNote = ""
          }
        },
        removeNote(note){
          if(note != ""){
            if(this.experienceNote.length > 1){
              var index = this.experienceNote.indexOf(note);
              console.log(note)
              console.log(index)
              this.experienceNote.splice(index, 1);
            }
            else{
              this.experienceNote = []
            }
          }
        },
        clearExperienceFeilds(){
          this.employer = ""
          this.jobTitle = ""
          this.jobLocation = ""
          this.jobStartDate = ""
          this.jobEndDate = ""
          this.experienceNote = []
        },

        addSkill(){
          var skill = {
            skillName: this.skillName,
            skillLevel: this.skillLevel
          }
          this.selectedSkills.push(skill)
          this.clearSkillFeilds()
        },
        removeSkill(index){
            if(this.selectedSkills.length > 1){
              console.log(index)
              this.selectedSkills.splice(index, 1);
            }
            else{
              this.selectedSkills = []
            }
        },
        clearSkillFeilds(){
          this.skillName = ""
          this.skillLevel = ""
        },

        
        
      watch: {
      
      },
      beforeMount(){
        this.onLoad()
      }
    }
  </script>