<template>
    <div  v-if="ctxLoaded" >
        <AvailablityBanner />
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
import ResumeIntro from '@/components/resume/ResumeIntro.vue';
import SkillsSection from '@/components/resume/SkillsSection.vue';
import ExperiencesSection from '@/components/resume/ExperiencesSection.vue';
import AvailablityBanner from '@/components/common/AvailablityBanner.vue';

const router = useRouter()
const route = useRoute()
const store = useStore()

const ctxLoaded = computed(()=> {
    return store.getters['resume/isContextLoaded']
})

onMounted(()=>{
    const resumeCtxQuery = route.query.resumeContext
    const queryValid = resumeCtxQuery !== undefined && resumeCtxQuery !== ""
    if(queryValid){
        setResumeContext(resumeCtxQuery)
        router.push({name: 'resume'})
    }else{
        checkResumeContext()
    }
})

const checkResumeContext = () => {
    const storeResumeCtx = store.getters['resume/getContext']
    if(storeResumeCtx === ""){
        const localStorageContext = localStorageService.getResumeContext()
        if(localStorageContext !== "" && localStorageContext !== null){
            setResumeContext(localStorageContext)
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
