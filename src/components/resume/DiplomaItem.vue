<template>
    <UiCard class="diploma-card" :show-footer="false"> 
        <template #header  >

            <p v-if="!props.loaded" class="placeholder-glow w-50  mb-0">
                <span class="placeholder col-6"></span>
            </p>
            <img 
                v-else 
                class="diploma-icon"
                :src="setIcon" 
            />

            <p 
                v-if="!props.loaded" 
                class="graduated-year placeholder-glow w-50 mb-0 text-end"
            >
                <span class="placeholder col-4 mb-0"></span>
            </p>
            <div class="header-right" v-else>
                <p v-if="isGraduated"  class="graduated-year mb-0">{{ getDateOfGraduation }}</p>
                <p v-else class="mb-0"><span class="badge bg-warning text-dark" >En cours</span></p>
            
            </div>

            
        </template>

        <h3 v-if="!props.loaded"  class="title placeholder-glow">
            <span class="placeholder col-10"></span>
        </h3>        
        <h3 v-else class="title">
            {{props.diploma.name}}
        </h3>

        <p v-if="!props.loaded"  
            class="organism placeholder-glow"
        >
            <span class="placeholder col-8"></span>
        </p>
        <p v-else class="organism">{{props.diploma.organism}}</p>
        
    </UiCard>
    

</template>

<script setup >
import { defineProps, computed } from 'vue';
import certificateImg from "@/assets/img/certificate.png"
import diplomaImg from "@/assets/img/graduated.png"
import UiCard from '../ui/UiCard.vue';

const props = defineProps({
    diploma : {
        type: Object,
        required: true
    },
    loaded :{
        type: Boolean,
        default: false,    
    }
})


const getDateOfGraduation = computed(()=>{

    const localeOptions = { year: 'numeric', month: 'short'};
    const date = new Date(props.diploma.dateOfGraduation)  
    
    return date.toLocaleString('FR-fr', localeOptions)
})

const setIcon = computed(()=>{
    return props.diploma.type === "certificate" ? certificateImg : diplomaImg
})

const isGraduated = computed(()=>{
    return props.diploma.graduated
})


</script>

<style lang="scss">
@import 'src/assets/styles/theming';

.diploma-card{
    .card-header{
        display: flex;
        align-items: center;
        .diploma-icon {
            max-width: 40px;
            // flex-grow : 1;
        }

        .header-right{
            margin-left: auto;

            .graduated-year{
            
                margin-bottom: 0;
                color: $gray-500;
            }

        }

    }

    .card-body{

        .title{
            font-size: 1.2rem;
            font-weight: 400;
        }

        .organism {
            color: $gray-600;
        }
    }
}
</style>