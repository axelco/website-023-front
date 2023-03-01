
const JOB_KEY = 'resume_context'
class LocalStorageService{

    

    getResumeContext(){
        return localStorage.getItem(JOB_KEY);
    }

    setResumeContext(value){
        localStorage.setItem(JOB_KEY, value)
    }
    
}

export default new LocalStorageService();