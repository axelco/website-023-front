// import infosService from "@/services/infos.service";

export default {
    namespaced : true,  
    state: {
        infos : {},
    },
    getters: {
        getInfos : state => {
            return state.infos
        },
        
        getFirstName : state => {
            return state.infos.firstName
        },
        getLastName : state => {
            return state.infos.lastName
        },        
        getEmail : state  => {
            return state.infos.email
        },

        getAvailability : state => {
            return state.infos.availability
        },        
        
        getLinkedinUrl : state => {
            return state.infos.linkedin

        },        

        getBirthdate : state => {
            const birth = new Date(state.infos.birthdate);
            return birth.toLocaleDateString();            
        },        

        getBirthYear : state => {
            const birthDate = new Date(state.infos.birthdate)
            return `Né en ${birthDate.getFullYear()}`
        },
        
        getAge : state => {
            const age = new Date(state.infos.birthdate);
            let diff_ms = Date.now() - age.getTime();
            let age_dt = new Date(diff_ms); 
            return Math.abs(age_dt.getUTCFullYear() - 1970) + ' ans'
        },   
        getLocation : state => {
            return `${state.infos.location.city} (${state.infos.location.region} - ${state.infos.location.country})`
        },
        getNationality : state => {
            return state.infos.nationality
        },
        getHobbies : state => {
            return state.infos.hobbies
        }
              
    },
    mutations: {    
        SET_INFOS(state, data){     
            state.infos = data
        },            
    },

    actions: {
      storeInfos({commit}, data){
        commit('SET_INFOS', data)
      },     
  
    },
  }