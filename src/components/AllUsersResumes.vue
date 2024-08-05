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
  
  