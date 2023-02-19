<template>
    <div 
        class="row">
        <div 
            class="col-12 mb-2 col-lg-4 "
            v-for="item in state.hardSkills" :key="item._id"
            >
            <UiCard 
                :show-footer="false"
                :show-header="false"
                class="h-100">
                <p v-if="state.hardSkillsLoaded" class="fs-1" >
                    {{ item.emoji ? item.emoji : `⚙️` }}
                </p>
                <p v-else class="fs-1 placeholder-glow">
                    <span class="placeholder col-2"></span>  
                </p>

                <p v-if="state.hardSkillsLoaded"
                class="fs-4 fw-bold mb-0"
                >{{item.name}}</p>    
                <p v-else class="fs-4 placeholder-glow">
                    <span class="placeholder col-8"></span>  
                    <span class="placeholder col-10"></span>  
                    <span class="placeholder col-6"></span>  
                </p>

            </UiCard>
        </div>
    </div>
</template>

<script setup >

import { onMounted, reactive } from 'vue';
import resumeService from '@/services/resume.service';
import UiCard from '../ui/UiCard.vue';

const state = reactive({ 
    // On ajoute des objets vides dans hardskills pour le chargement initial
    // Via des placeholders, dont leur nb dépend du nb d'objet dans la boucle for
    // Dans le template
    hardSkills : [
        {},{},{},{}, {}
    ],
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