import Api from '@/services/Api'

export default{
    saveResume (request) {
        return Api().post('/saveResume', request)
    },
    getResumes (userID){
        return Api().get('/resumes/' + userID)
    },
    getAllResumes (){
        return Api().get('/allResumes')
    },
    saveResumeVersion (request){
        return Api().put('/saveResumeVersion', request)
    },
    saveResumeComments (resumeID, request){
        return Api().put('/saveResumeComments/' + resumeID, request)
    },
    deleteResumeVersion (id){
        return Api().delete('/resume/' + id)
    }
}

