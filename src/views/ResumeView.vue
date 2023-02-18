<template>
    <ResumeIntro />
</template>
  

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import ResumeService from '@/services/resume.service';

import ResumeIntro from '@/components/resume/ResumeIntro.vue';

const router = useRouter()

onMounted(()=>{

    const jobContextValid = ResumeService.checkJobChosen()

    if(!jobContextValid){
        router.push({name: 'choseJob'})
    }

})

</script>

<style lang="scss">


</style>
