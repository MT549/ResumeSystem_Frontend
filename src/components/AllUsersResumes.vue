<template>
    <div>
        <v-row class="text-right"> 
            <v-col col="12" mb="2">
                <v-btn
                prepend-icon="mdi-account-circle"
                @click="refreshResumes = !refreshResumes"
                >
                <template v-slot:prepend>
                    <v-icon color="#711429">mdi-refresh</v-icon>
                </template>
                    Refresh
                </v-btn>
            </v-col>
        </v-row>

        <v-list v-show="this.users.length > 0">
            <v-list-group no-action v-for='user in users' :key="user.id">
                <template v-slot:activator="{ props }">
                    <v-list-item slot='activator' v-bind="props">
                        <v-list-item-title>{{ user.firstName + " " + user.lastName}} </v-list-item-title>
                    </v-list-item>
                </template>

                    <v-divider color="#fff"></v-divider>

                    <v-list-group no-action v-for='resume in user.Resumes' :key="resume.id">
                    <template v-slot:activator="{ props }">
                        <v-list-item slot='activator' v-bind="props">
                            <v-list-item-title>{{ resume.resumeTitle }}</v-list-item-title>
                        </v-list-item>
                    </template>

                    <v-list-item
                        v-for="ver in resume.ResumeVersionControls"
                        :key="ver.version"
                        :title= setVersion(ver.version)
                        prepend-icon="mdi-arrow-right"
                    >
                        <template v-slot:append>
                        <v-btn size="small" variant="tonal" @click="openResumeOverlay(ver, user.linkedinURL, user.websiteURL)">
                            <v-icon color="#711429" > mdi-book-open  </v-icon>&nbsp;
                            Open
                        </v-btn>
                        &nbsp;
                        </template>
                        <v-divider color="#fff"></v-divider>
                    </v-list-item>
                </v-list-group>
            </v-list-group>
        </v-list>
        <h1 v-show="this.users.length < 1">No Users to show.</h1>
    </div>
    
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

    <v-overlay
      :model-value="resumeOverlay"
      class="align-center justify-center"
      persistent
    >
    <v-container fluid fill-height class='d-flex flex-column'>
      <v-row width="1200px" class='flex-grow-0'>
        <v-card class="mx-auto px-10 py-5" width="1100px" height="50px" color="#711429">
        <v-row>
                <v-btn
                    @click="exportToPDF"
                    color="#121212"
                >
                    Download
                </v-btn>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn
                    @click="deleteResumeVersion(resumeDetails.id)"
                    color="#121212"
                >
                    Delete
                </v-btn>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn
                    @click="this.resumeOverlay = !this.resumeOverlay"
                    color="#121212"
                >
                    close
                </v-btn>
        </v-row>
      <br/>
      </v-card>
    </v-row>
</template>
  
methods: {
    onLoad(){
        this.linkedinURL = sessionStorage.getItem('UserLinkedinURL')
        this.websiteURL = sessionStorage.getItem('UserWebsiteURL')

        this.loadingOverlay = true
        this.getResumes()
    },
    setVersion(version){
        return "Version: " + version
    },
    openResumeOverlay(resume,linkedinurl, websiteurl){
        console.log(resume)
        this.linkedinURL = linkedinurl
        this.websiteURL = websiteurl
        this.comments = resume.comments
        this.resumeDetails = resume
        this.resumeOverlay = !this.resumeOverlay
        this.showTemplate = true
        this.tempalte = resume.templaterType
    },
    closeResumeOverlay(){

    },

    async getResumes() {
        //this.$store.state.isUserLoggedIn
        try{
            this.setLoadingOverLay(true, "Please wait. While fetching your resumes...")
            console.log(sessionStorage.getItem("UserId"))
            await ResumeService.getAllResumes().then((response)=> {
                console.log(response)
                if(response.statusText == "OK"){
                    this.users = response.data
                    console.log("user all resume length: " + response.data.length)
                }
                this.setLoadingOverLay(false, "")
            })
        }
        catch(err){
            console.log(err)
            this.setLoadingOverLay(false, "")
        }
    },
     
    exportToPDF() {
        this.opt.filename = this.resumeDetails.resumeTitle != "" ? this.resumeDetails.resumeTitle + "_V" + this.resumeDetails.version + ".pdf" : "myresume.pdf"
        var currentTemplate = ""
        switch(this.tempalte){
            case "Template 1": currentTemplate = "template1ResumePDF" 
            break;
            case "Template 2": currentTemplate = "template2ResumePDF" 
            break;
            case "Template 3": currentTemplate = "template3ResumePDF" 
            break;
            case "Template 4": currentTemplate = "template4ResumePDF" 
            break;
            default: currentTemplate = "template1ResumePDF" 
            break; 
        }
        html2pdf().set(this.opt).from(document.getElementById(currentTemplate)).save()
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

    async deleteResumeVersion(resumeID) {
        try{
            this.setLoadingOverLay(true, "Please wait. While Deleting...")
            await ResumeService.deleteResumeVersion(resumeID).then((response)=> {
                console.log(response)
                if(response.statusText == "OK"){
                    this.resumeOverlay = !this.resumeOverlay
                    this.refreshResumes = !this.refreshResumes
                }
                this.setLoadingOverLay(false, "")
            })
        }
        catch(err){
            console.log(err)
            this.setLoadingOverLay(false, "")
        }
    },

    async saveComments(resumeID) {
        try{
            this.setLoadingOverLay(true, "Please wait. While Deleting...")
            await ResumeService.saveResumeComments(resumeID,{
              comments: this.comments
            }).then((response)=> {
                console.log(response)
                if(response.statusText == "OK"){
                  this.showSnackBar("Comments saved successfully.")
                }
                this.setLoadingOverLay(false, "")
            })
        }
        catch(err){
            console.log(err)
            this.setLoadingOverLay(false, "")
        }
    },
    
    formatSkills(skills){
    var formattedSkills = ""
    skills.forEach(element => {
        if(formattedSkills != ""){
        formattedSkills = formattedSkills + " | " + element.Name
        }
        else{
        formattedSkills = element.Name
        }
    });
    return formattedSkills
    },
    showSnackBar(msg){
        this.snackbar = true
        this.snackbarMSG = msg
    },
    formatcomma(val){
        var formattedVal = ""
        val.forEach(element => {
            if(formattedVal != ""){
                formattedVal = formattedVal + " , " + element.description
            }
            else{
                formattedVal = element.description
            }
        });
        return formattedVal
    }
},
beforeMount() {
    this.onLoad()
},
watch: {
    refreshResumes: function(){
        this.loadingOverlay = true
        this.users = []
        this.getResumes() 
    }
}
}
</script>