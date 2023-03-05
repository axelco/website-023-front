import { api } from "./api.service";
import store from "@/store";

class ResumeService{
    // Récupère la liste des jobs possibles dans l'API
    // Afin d'afficher cette liste dans la page de choix du job de CV
    getResumeContexts(){

        return api.get(`/resume/contexts`)
    }

    getSingleResumeContext(id){
        return api.get(`/resume/contexts/${id}`)
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

    getExperiences(){
        return api.get(`/resume/jobs-grouped`)
    }

    getSingleJob(id){
        return api.get(`/resume/jobs/${id}`)
    }    

    getDiplomas(){
        return api.get(`/resume/diplomas`)   
    }
    
}

export default new ResumeService();