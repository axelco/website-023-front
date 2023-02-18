<template>
    <UiSection size="lg">
        <UiContainer  >
            <div v-if="state.introLoaded && state.introApiErrors !==null" class="alert alert-warning">
                <p class="fs-4">Une erreur est survenue 💫. Détail de l'erreur</p>
                <p>{{ state.introApiErrors }}</p>
            </div>
            <UiCard 
                v-else
                id="introCard"
                :show-footer="false"
                :show-header="false">

                <div class="container-fluid">
                    <div class="row gx-4">
                        <div class="left col-12 col-lg-4 mb-2 mb-lg-0 ">
                            <div class="h-100">
                                <img 
                                    style="max-width: 100px; max-height: 100%; filter: grayscale(1)"
                                    class="mb-2 mb-lg-3"
                                    src="./../../assets/img/photo-alexandre-rozec-purple-300x300.png" />
                                <h1 class="h5">{{ getFullName }}</h1>
                                <h2 v-if="state.introLoaded" class="text-primary"
                                    >{{state.intro.jobContext?.name}}</h2>
                                <h2 v-else class="h5 placeholder-glow">
                                    <span class="placeholder col-10"></span>  
                                </h2>
                            </div>
                        </div>
                        <div class="right col-12 col-lg-8">
                            <div v-if="state.introLoaded" class="h-100">
                                <p class="fs-3 fw-bold">
                                    {{state.intro.description}}
                                </p>
                                <p v-if="state.intro.shortDescription">
                                {{state.intro.shortDescription}}
                                </p>
                            </div>  
                            <div v-else>
                                <p class="fs-3 fw-bold placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-10"></span>         
                                    <span class="placeholder col-6"></span>                            
                                </p>                            
                            </div>              
                        </div>
                    </div>                
                
                </div>            
            </UiCard>            
        </UiContainer>  
    </UiSection>
</template>

<script setup>
import resumeService from '@/services/resume.service';
import { reactive, computed, onMounted } from 'vue'
import { useStore } from 'vuex';

import UiSection from '@/components/ui/UiSection.vue';
import UiContainer from '@/components/ui/UiContainer.vue';
import UiCard from '../ui/UiCard.vue';


const state = reactive({ 
    intro: {} ,
    introLoaded : false,
    introApiErrors : null,
})
const store = useStore()

const getFullName = computed(()=>{
    return `${store.getters['infos/getFirstName']} ${store.getters['infos/getLastName']}`
})



onMounted(()=>{
    fetchIntro()
})

const fetchIntro = () => {
    state.introLoaded = false
    resumeService.getIntroByContext()
    .then(
        (res) => {
            state.intro = res.data
            state.introLoaded = true
            state.introApiErrors = null
        }
    ).catch(
        (error)=> {
            state.intro = {}
            state.introLoaded = true;
            state.introApiErrors = error.toString()
        }
    )
}

</script>


<style lang="scss" scoped>
@import 'src/assets/styles/theming';

#introCard{

    .left,.right {
        text-align: center;
    }

    @include media-breakpoint-up(lg){
        .left{
            text-align: right;
        }

        .right {
            text-align: left;
        }
    }
}

</style>