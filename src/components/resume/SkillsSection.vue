<template>
    <UiSection>
        <UiContainer size="sm">
            <SectionTitle :title="`Mes compétences `" />
        </UiContainer>
        <UiContainer size="xl">
            <div class="row">
                <div 
                    class="col-12 mb-2 col-lg-4 "
                    v-for="item in state.hardSkills" :key="item._id"
                    >
                    <HardskillCard 
                        class="h-100"
                        :hard-skill="item" />
                </div>
            </div>
        </UiContainer>        
    </UiSection>
    

</template>

<script setup >

import { onMounted, reactive } from 'vue';
import resumeService from '@/services/resume.service';

import UiSection from '../ui/UiSection.vue';
import UiContainer from '../ui/UiContainer.vue';
import SectionTitle from './SectionTitle.vue';
import HardskillCard from './HardskillCard.vue';

const state = reactive({ 
    hardSkills : [],
    hardSkillsLoaded : false,
    hardSkillsApiErrors : null,
})

onMounted(()=>{
    fetchHardSkills()
})

const fetchHardSkills = () => {
    state.hardSkillsLoaded = false
    resumeService.getHardSkillsByContext()
    .then(
        (res) => {
            state.hardSkills = res.data
            state.hardSkillsLoaded = true
            state.hardSkillsApiErrors = null
        }
    ).catch(
        (error)=> {
            state.intro = {}
            state.hardSkillsLoaded = true;
            state.hardSkillsApiErrors = error.toString()
        }
    )
}

</script>