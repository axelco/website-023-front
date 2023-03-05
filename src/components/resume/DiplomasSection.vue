<template>
    <UiSection>
        <UiContainer size="sm">
            <SectionTitle 
                :title="`Mes diplômes et certificats`" 
                emoji="🌠" 
                align="center" />
        </UiContainer>
        <UiContainer size="lg" >
            <div 
                v-if="state.diplomasApiError !== null && state.diplomasLoaded">
                <div class="alert alert-warning">
                    <p class="fs-5">Une erreur est survenue</p>
                    <p>{{ state.diplomasApiError }}</p>
                    <button 
                        class="btn btn-warning"
                        @click="fetchDiplomas"
                    >Réessayer</button>
                </div>
            </div>
            <div 
                v-else
                class="row mt-2 mt-lg-5"
            >
                <div 
                    class="col-12 mb-2 col-md-6  col-lg-4"
                    v-for="item in state.graduatedDiplomas"
                    :key="item._id"                    
                >
                    <DiplomaItem 
                        class="h-100"
                        :diploma="item" 
                        :loaded="state.diplomasLoaded"
                        :showHeaderBorder="false"
                    />
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
import DiplomaItem from './DiplomaItem.vue';


const state = reactive({
    diplomasLoaded : false,
    diplomasApiError : null,
    graduatedDiplomas : [{},{}, {}, {},{}, {}],
})

onMounted(()=>{
    fetchDiplomas()
})

const fetchDiplomas = () => {
    
    state.diplomasLoaded = false
    resumeService.getDiplomas()
    .then(
        (res)=>{
            state.diplomasLoaded = true
            state.diplomasApiError = null
            state.graduatedDiplomas = res.data.graduated
        }
    )
    .catch(
        (err)=>{
            state.diplomasLoaded = true
            state.diplomasApiError = err.toString()
            console.error(err)
        }
    )    
}

</script>