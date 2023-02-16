<template>
    <UiSection class="text-center">
        <UiContainer size="sm" >
            <img id="avatar" src="./../assets/img/photo-alexandre-rozec-purple-300x300.png" />
            <h1 class="display-5">Bienvenue sur mon CV web</h1>
            <p class="fs-2">Quel poste recherchez-vous ?</p>
        </UiContainer>  
        <UiContainer size="md" class="mt-4">
            <div class="row">
                <div 
                    class="col-12 mb-2 col-lg-6"
                    v-for="item in state.jobsPossible"
                    :key="item._id"
                    >
                    <UiCard 
                        :show-header="true" 
                        :show-footer="true"
                        class="h-100">

                        <template #header>
                            <h2 class="h3 mb-0">{{ item.name }}</h2>
                        </template>

                        <template #default>
                            <p class="fs-5">{{ item.description }}</p>
                        </template>

                        <template #footer>
                            <div class="d-grid gap-2">
                                <button 
                                    @click="handleJobChoosing" 
                                    :value="item.technicalName"
                                    class="btn btn-primary">
                                    Voir le CV {{ item.name }}
                                </button>
                            </div>                        

                        </template>
                        
                    </UiCard>
                
                </div>
            
            </div>        
        </UiContainer>
    </UiSection>    


</template>

<script setup >
import { reactive } from 'vue'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import ResumeService from '@/services/resume.service';
import LocalStorageService from '@/services/localStorage.service'
import UiSection from '@/components/ui/UiSection.vue';
import UiContainer from '@/components/ui/UiContainer.vue';
import UiCard from '@/components/ui/UiCard.vue'

const state = reactive({ jobsPossible: [] })
const router = useRouter()

const fetchJobsPossible = () => {
    ResumeService.getJobTypes()
    .then(
        (res) => {
            state.jobsPossible = res.data
            console.log(state.jobsPossible)
        }
    ).catch(error => console.error(error))
}

// Au clic du choix Utilisateur
// On va alimenter le localStorage pour permettre d'accéder au CV web
const handleJobChoosing = (e) => {
    LocalStorageService.setJobChosen(e.target.value)
    router.push({name: 'resume'})
}

onMounted(()=>{
    fetchJobsPossible()
})

</script>

<style lang="scss">
@import 'src/assets/styles/theming';

#avatar{
    max-width: 100px;
    height: auto;
}

</style>