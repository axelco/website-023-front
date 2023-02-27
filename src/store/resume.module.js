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
        }
              
    },
    mutations: {    
        // Alimente resumeContext ainsi que le localStorage
        SET_CONTEXT(state, ctx){     
            state.resumeContext = ctx
            state.ctxLoaded = true
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