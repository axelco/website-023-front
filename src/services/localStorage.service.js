
const JOB_KEY = 'job_chosen'
class LocalStorageService{

    

    getJobChosen(){
        return localStorage.getItem(JOB_KEY);
    }

    setJobChosen(value){
        localStorage.setItem(JOB_KEY, value)
    }
    
}

export default new LocalStorageService();