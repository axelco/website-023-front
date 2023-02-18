<template>
    <UiSection size="lg">
        <UiContainer  >
            <UiCard 
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
                                <h2 class="text-primary">{{state.intro.jobContext?.name}}</h2>
                            </div>
                        </div>
                        <div class="right col-12 col-lg-8">
                            <div class="h-100">
                                <p class="fs-3 fw-bold">
                                    {{state.intro.description}}
                                </p>
                                <p v-if="state.intro.shortDescription">
                                {{state.intro.shortDescription}}
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
            console.log(state.intro)
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