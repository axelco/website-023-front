
const CTX_KEY = 'resume_context'
class LocalStorageService{

    

    getResumeContext(){
        return localStorage.getItem(CTX_KEY);
    }

    setResumeContext(value){
        localStorage.setItem(CTX_KEY, value)
    }

    destroyResumeContext(){
        localStorage.removeItem(CTX_KEY)
    }
    
}

export default new LocalStorageService();