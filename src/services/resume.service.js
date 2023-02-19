import { api } from "./api.service";
import store from "@/store";

class ResumeService{
    // Récupère la liste des jobs possibles dans l'API
    // Afin d'afficher cette liste dans la page de choix du job de CV
    getJobTypes(){

        return api.get(`/resume/job-types`)
    }

    getIntroByContext(){
        return api.get(`/resume/intro/${store.getters['resume/getContext']}`)
  
    }

    getHardSkillsByContext(){
        return api.get(`/resume/hard-skills/${store.getters['resume/getContext']}`)    
    }

    getSoftSkills(){
        return api.get(`/resume/soft-skills`)
    }
    
}

export default new ResumeService();