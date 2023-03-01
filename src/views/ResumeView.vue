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
import { useRouter} from 'vue-router';
import { useStore } from 'vuex';
import localStorageService from '@/services/localStorage.service';
import ResumeIntro from '@/components/resume/ResumeIntro.vue';
import SkillsSection from '@/components/resume/SkillsSection.vue';
import ExperiencesSection from '@/components/resume/ExperiencesSection.vue';
import AvailablityBanner from '@/components/common/AvailablityBanner.vue';

const router = useRouter()
const store = useStore()

const ctxLoaded = computed(()=> {
    return store.getters['resume/isContextLoaded']
})

onMounted(()=>{
    const localStorageContext = localStorageService.getResumeContext()
    console.log(localStorageContext)
    const storeResumeCtx = store.getters['resume/getContext']
    if(storeResumeCtx === ""){
        if(localStorageContext !== "" && localStorageContext !== null){

            store.dispatch('resume/setContext', localStorageContext)
        }else{
            router.push({name: 'chooseJobContext'})
        }
        

    }

})

</script>

<style lang="scss">


</style>
