
const CTX_KEY = 'resume_context'
const THEME_KEY = 'theme'

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

    getTheme(){
       return localStorage.getItem(THEME_KEY);
    }

    setTheme(theme){
        return localStorage.setItem(THEME_KEY, theme);
    }    

    removeTheme(){
        localStorage.removeItem(THEME_KEY)
    }
    
}

export default new LocalStorageService();