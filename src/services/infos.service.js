import { api } from "./api.service";

class InfosService{

    // Récupère la liste des jobs possibles dans l'API
    // Afin d'afficher cette liste dans la page de choix du job de CV
    getPersonalInfos(){

        return api.get(`/personal-infos`)
    }

    
}

export default new InfosService();