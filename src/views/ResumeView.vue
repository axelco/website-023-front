<template>
    <div  v-if="ctxLoaded" >
        <AvailablityBanner />
        <TopNav />
        <ResumeIntro />
        <SkillsSection />    
        <ExperiencesSection />
    </div>

</template>
  

<script setup>
import { onMounted, computed } from 'vue';
import { useRouter, useRoute} from 'vue-router';
import { useStore } from 'vuex';
import localStorageService from '@/services/localStorage.service';
import resumeService from '@/services/resume.service';

import ResumeIntro from '@/components/resume/ResumeIntro.vue';
import SkillsSection from '@/components/resume/SkillsSection.vue';
import ExperiencesSection from '@/components/resume/ExperiencesSection.vue';
import AvailablityBanner from '@/components/common/AvailablityBanner.vue';
import TopNav from '@/components/resume/TopNav.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()

const ctxLoaded = computed(()=> {
    return store.getters['resume/isContextLoaded']
})

onMounted(()=>{
    // On vérifie si la query resumeContext est envoyée et valide
        // Si oui, on lance un check de la query
        // Sinon, on lance un check du storage 
    if(isQueryCtxSent()){
        checkCtxQuery()
    }else{
        checkCtxStorage()
    }
    
})

const isQueryCtxSent = () =>{
    const resumeCtxQuery = route.query.resumeContext
    const queryValid = resumeCtxQuery !== undefined && resumeCtxQuery !== ""
    
    return queryValid
}

const checkCtxQuery = () =>{
    const resumeCtxQuery = route.query.resumeContext
    resumeService.getSingleResumeContext(resumeCtxQuery)
        .then(
            (res)=>{
                if(res.data === null){
                    router.push({name: 'chooseJobContext'})
                }else{
                    setResumeContext(resumeCtxQuery)
                    router.push({name: 'resume'})                    
                }
            }
        ).catch(
            ()=>{
                router.push({name: 'chooseJobContext'})
            }
        )
}

const checkCtxStorage = () => {
    const storeResumeCtx = store.getters['resume/getContext']
    if(storeResumeCtx === ""){
        const localStorageContext = localStorageService.getResumeContext()
        if(localStorageContext !== "" && localStorageContext !== null){
            resumeService.getSingleResumeContext(localStorageContext)
            .then(
                (res)=>{
                    if(res.data === null){
                        localStorageService.destroyResumeContext()
                        router.push({name: 'chooseJobContext'})
                    }else{
                        setResumeContext(localStorageContext)                
                    }
                }
            ).catch(
                ()=>{
                    localStorageService.destroyResumeContext()
                    router.push({name: 'chooseJobContext'})
                }
            )

        }else{
            router.push({name: 'chooseJobContext'})
        }

    }
}

const setResumeContext = (ctx) => {
    store.dispatch('resume/setContext', ctx)
}
 
</script>

<style lang="scss">


</style>
