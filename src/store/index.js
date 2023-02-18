import { createStore } from 'vuex'
import infosModule from './infos.module'
import resumeModule from './resume.module'

export default createStore({
  modules : {
    infos : infosModule,
    resume : resumeModule,
  }
})
