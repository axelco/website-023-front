import localStorageService from "@/services/localStorage.service"
import ResumePO from "@/assets/pdf/CV_Alexandre-Rozec_Product-Owner.pdf";
import ResumeBA from "@/assets/pdf/CV_Alexandre-Rozec_Business Analyst.pdf";

export default {
    namespaced : true,  
    state: {
        resumeContext : "",
        ctxLoaded : false,
        showAvailability : true,
    },
    getters: {
        getContext : state => {
            return state.resumeContext
        },
        isContextLoaded : state => {
            return state.ctxLoaded
        },
        showAvailability : state => {
            return state.showAvailability
        },
        getResume : state => {
            switch(state.resumeContext){
                case '63ee5393276882fa9c0b658d' :
                    return ResumeBA

                default :
                    return ResumePO 
            }
        }
              
    },
    mutations: {    
        // Alimente resumeContext ainsi que le localStorage
        SET_CONTEXT(state, ctx){     
            state.resumeContext = ctx
            state.ctxLoaded = true
            localStorageService.setResumeContext(ctx)
        },   

        TOGGLE_IGNORE_AVAILABILITY(state){
            state.showAvailability = !state.showAvailability
        }
    },

    actions: {
      setContext({commit}, ctx){
        commit('SET_CONTEXT', ctx)
      },   
      
      toggleAvailabilityBanner({commit}){
        commit('TOGGLE_IGNORE_AVAILABILITY')
      }

  
    },
  }