export default {
    namespaced : true,  
    state: {
        resumeContext : "",
        ctxLoaded : false,
    },
    getters: {
        getContext : state => {
            return state.resumeContext
        },
        isContextLoaded : state => {
            return state.ctxLoaded
        }
              
    },
    mutations: {    
        // Alimente resumeContext ainsi que le localStorage
        SET_CONTEXT(state, ctx){     
            state.resumeContext = ctx
            state.ctxLoaded = true
        },   
    },

    actions: {
      setContext({commit}, ctx){
        commit('SET_CONTEXT', ctx)
      }     
  
    },
  }