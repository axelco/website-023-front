import { api } from "./api.service";
import localStorageService from "./localStorage.service";

class ResumeService{

    // Récupère la liste des jobs possibles dans l'API
    // Afin d'afficher cette liste dans la page de choix du job de CV
    getJobTypes(){

        return api.get(`/resume/job-types`)
    }

    // On vérifie que le localStorage jobChosen est bien rempli
    // Et que la valeur correspond à l'attendu en fonction des possibilités
    // Côté backend
    checkJobChosen(){
        const jobChosen = localStorageService.getJobChosen()
        if(jobChosen === null){
            return false
        }
        // TODO : vérifier si la valeur de jobChosen est valide
        
        return true
    }
    
}

export default new ResumeService();