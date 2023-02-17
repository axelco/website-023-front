import { createStore } from 'vuex'
import infosModule from './infos.module'

export default createStore({
  modules : {
    infos : infosModule,

  }
})
