<template>
    <div  v-if="ctxLoaded" >
        <ResumeIntro />
        <SkillsSection />    
    </div>

</template>
  

<script setup>
import { onMounted, computed } from 'vue';
import { useRouter} from 'vue-router';
import { useStore } from 'vuex';
import ResumeIntro from '@/components/resume/ResumeIntro.vue';
import SkillsSection from '@/components/resume/SkillsSection.vue';

const router = useRouter()
const store = useStore()

const ctxLoaded = computed(()=> {
    return store.getters['resume/isContextLoaded']
})

onMounted(()=>{
    const storeResumeCtx = store.getters['resume/getContext']
    console.log(storeResumeCtx)
    if(storeResumeCtx === ""){
        router.push({name: 'chooseJobContext'})

    }

})

</script>

<style lang="scss">


</style>
