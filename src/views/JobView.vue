<template>
    <AvailablityBanner />
    <nav id="jobNav" :class="{fixed : state.fixNav}">
        <UiContainer >
            <ul class="nav-menu">
                <li>
                    <button @click="handleGoBack()"  class="nav-link">
                        <i class="icon bi bi-arrow-left"></i>
                        <span class="text">Retour au CV</span>
                    </button>                
                </li>

            </ul>    
            <NavCtas />    
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
                            class=" mb-2 mb-lg-3 "
                        >
                            <h3 class="h4 mb-lg-2">
                                <span class="h3">✍️</span> Description</h3>
                            <p class="short-description ps-0 ps-lg-3">
                                
                                {{ state.job.item.shortDescription }}</p>
                        </div>
                        <div class="row gx-4">
                            <div v-if="hasSuccess" class="col-12 mb-2 mb-lg-3 ">
                                <div class="h-100">
                                    <h3 class="h4 mb-lg-2"><span class="h3">🚀</span> Succès</h3>
                                    <div  v-html="state.job.item.successContent" class="ps-0 ps-lg-3"></div>                                
                                </div>                            
                            </div>
                            <div v-if="hasMissions" class="col-12 mb-2 mb-lg-3 ">
                                <div class="h-100">
                                    <h3 class="h4 mb-lg-2"><span class="h3">📐</span> Mon quotidien</h3>
                                    <div v-html="state.job.item.missionsContent" class="ps-0 ps-lg-3"></div>                                
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
import NavCtas from '@/components/common/NavCtas.vue';
import AvailablityBanner from '@/components/common/AvailablityBanner.vue';

const route = useRoute()
const router = useRouter()
const state = reactive({ 
    job: {
        item : {},
        loaded: false,
        
    } ,
    fixNav : false,
})



onMounted(()=>{
    fetchJob()
    setFixNav()
    window.addEventListener('scroll', setFixNav)    
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

const setFixNav = () => {
    state.fixNav = window.scrollY > 200 ? true : false

}

const handleGoBack = () => {
    const prevPage = window.history.state.back
    console.log(prevPage)
    if(prevPage === null){
        router.push({name: 'resume'})
    }else{
        router.back()
    }
    
}

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
    
    #jobNav{
        background-color: $black;
        padding-top: .25rem;
        padding-bottom: .25rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 60px;

        &.fixed{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 550;
        }

        .container{
            display: flex;
            justify-content: space-between;
        }

        .nav-menu{
            padding-left: 0;
            list-style: none;
            margin-bottom: 0;
            display: flex;

            .nav-link {
                display: flex;
                align-items: center;
                padding: .5rem;
                background-color: transparent;
                border: none;

                &:hover{
                    color: $gray-500;
                }
                .icon{
                    margin-right: .5rem;
                    font-size: 1.4rem;
                }

                .text{
                    display: none;
                }

                &.primary{
                    color: $primary;
                    &:hover{
                        color: rgba($primary, .7);
                    }
                }
            }
        }

        @include media-breakpoint-up(md){
            .nav-menu {
                .nav-link {
                    .text {
                        display: inline;
                    }
                }

            }
        }
    }
</style>