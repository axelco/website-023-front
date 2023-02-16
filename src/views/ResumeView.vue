<template>
    <UiSection>
        <UiContainer size="md" >
            Vous avez sélectionné le CV {{ localStorageService.getJobChosen() }}
        </UiContainer>  
    </UiSection>
</template>
  

<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ResumeService from '@/services/resume.service';
import localStorageService from '@/services/localStorage.service';
import UiSection from '@/components/ui/UiSection.vue';
import UiContainer from '@/components/ui/UiContainer.vue';

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
