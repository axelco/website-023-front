<template>
    <UiSection>
        <UiContainer size="sm">
            <SectionTitle 
                :title="`Mon parcours professionnel`" 
                emoji="🚀" 
                align="center" />
        </UiContainer>
        <UiContainer size="md">
            <ExperienceItem 
                v-for="item in state.groupsOfJobs.items" 
                :key="`${item.company._id}_${item.company.startDate}`" 
                :company="item.company"
                :jobs="item.jobs"
                :dataLoaded = "state.groupsOfJobs.loaded"/>
        </UiContainer>        
        
    </UiSection>
    

</template>

<script setup >
import { onMounted, reactive } from 'vue';
import resumeService from '@/services/resume.service';

import UiSection from '../ui/UiSection.vue';
import UiContainer from '../ui/UiContainer.vue';
import SectionTitle from './SectionTitle.vue';
import ExperienceItem from './ExperienceItem.vue';

const state = reactive({
    groupsOfJobs : {
        // On ajoute des objets vides pour gérer les placeholders des composants enfants
        items : [
            {
                company: {
                    _id: 1,
                },
                jobs:[{},{}]
            }, 
            {
                company: {
                    _id: 1,
                },
                jobs:[{}]
            }, 
        ], 
        loaded : false,
        error : null,
    },
})

onMounted(()=>{
    fetchJobs()

})

const fetchJobs = () => {
    state.groupsOfJobs.loaded = false
    resumeService.getExperiences()
    .then(
        (res)=>{
            // console.log(res.data)
            state.groupsOfJobs.loaded = true
            state.groupsOfJobs.items = res.data
        }
    )
}


</script>