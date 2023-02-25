<template>
    <nav id="nav">
        <UiContainer size="xl" >
            <div class="left">
                <RouterLink :to="{name: 'resume'}" class="nav-link">
                    <i class="bi bi-arrow-left"></i> Retour
                </RouterLink>
            
            </div>        
        </UiContainer>

    </nav>


    <div id="pageContent">
        <UiSection size="md" >
            <UiContainer size="md">
                <UiSpinner v-if="!state.job.loaded"  />
                <UiCard v-else :showFooter="false">
                    <template #header >
                        <span 
                            v-if="isCurrentJob" 
                            class="badge bg-primary fs-6 mb-1"
                        >Job actuel</span>
                        <h1 class="h3">{{state.job.item.name}}</h1>
                        <p class="mb-0">
                            <span class="text-uppercase">{{ state.job.item.contractType }}</span> - 
                            {{ datesSentence }}
                        </p>
                    </template>
                    <div>
                        <div v-if="hasShortDescription"
                            class="d-flex flex-column flex-lg-row mb-2 mb-lg-4"
                        >
                            <i class="bi bi-quote me-1 fs-1 text-primary"></i>
                            <p class="short-description flex-grow-1 ms-1 ms-lg-0">{{ state.job.item.shortDescription }}</p>
                        </div>
                        <div class="row gx-4">
                            <div v-if="hasSuccess" class="col-12 mb-2 ">
                                <div class="h-100">
                                    <h3 class="h4 mb-2"><span class="h3">🚀</span> Succès</h3>
                                    <div  v-html="state.job.item.successContent"></div>                                
                                </div>                            
                            </div>
                            <div v-if="hasMissions" class="col-12 mb-2 ">
                                <div class="h-100">
                                    <h3 class="h4 mb-2"><span class="h3">📐</span> Mon quotidien</h3>
                                    <div v-html="state.job.item.missionsContent"></div>                                
                                </div>

                            </div>                        
                        </div>
                    </div>                    
                </UiCard>

                
            </UiContainer>
        </UiSection>
        
    </div>
    

</template>

<script setup >

import { onMounted,reactive,computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import resumeService from '@/services/resume.service';

import UiSection from '@/components/ui/UiSection.vue';
import UiContainer from '@/components/ui/UiContainer.vue';
import UiCard from '@/components/ui/UiCard.vue';
import UiSpinner from '@/components/ui/UiSpinner.vue';

const route = useRoute()
const router = useRouter()
const state = reactive({ 
    job: {
        item : {},
        loaded: false,
        
    } 
})



onMounted(()=>{
    fetchJob()
})

const hasShortDescription = computed(()=>{
    return state.job.item.shortDescription !== undefined && state.job.item.shortDescription !== "" 
})


const isCurrentJob = computed(()=>{
    if(state.job.item.endDate === undefined || state.job.item.endDate === null ){
        return true
    }
    return false
})

const hasSuccess = computed(()=>{
    if(state.job.item.successContent !== undefined 
        && state.job.item.successContent !== "")
    {
            return true
    }
    return false
})


const hasMissions = computed(()=>{
    if(state.job.item.missionsContent !== undefined 
        && state.job.item.missionsContent !== "")
    {
            return true
    }
    return false
})

const datesSentence = computed(()=>{

    const localeOptions = { year: 'numeric', month: 'long'};
    const start = new Date(state.job.item.startDate)    

    if(isCurrentJob.value){
        return `depuis ${start.toLocaleString('FR-fr', localeOptions)}`
    }

    const end = new Date(state.job.item.endDate)
    return `entre ${start.toLocaleString('FR-fr', localeOptions)} et ${end.toLocaleString('FR-fr', localeOptions)}`
        
})

const fetchJob = () => {
    state.job.loaded = false
    resumeService.getSingleJob(route.params.id)
    .then(
        (res) => {
            state.job.loaded = true
            if(res.data === null){
                router.push({name: 'resume'})   
            }else{
                state.job.item = res.data
            }

        }
    )
}

</script>

<style lang="scss">

@import '@/assets/styles/theming';

#nav{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    position: fixed;
    width: 100%;
    top: 0;
    border-bottom: 1px solid $black;
}

#pageContent{
    margin-top: 50px;
    color: $gray-500;
}

.short-description{
    font-size: 1.3rem;
}

</style>