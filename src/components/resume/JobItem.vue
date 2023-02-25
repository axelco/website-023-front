<template>
    <div class="job-item">
        <div v-if="!props.dataLoaded" class="placeholder-glow">
            <h5 class="h2 mb-0 job-title">
                <span class="placeholder col-10"></span>
            </h5>
            <p class="mb-2 placeholder-glow">
                <span class="placeholder col-12"></span>
            </p>

            <p class="mb-2 placeholder-glow">
                <span class="placeholder col-8"></span>
                <span class="placeholder col-10"></span>
                <span class="placeholder col-6"></span>
            </p>            
        </div>
        <div v-else>
            <p v-if="isCurrentJob">
                <span class="badge bg-success">Job actuel</span>
            </p>
            <h5 class="h2 mb-0 job-title">{{props.job.name}}</h5>
            <p class="job-metas mb-2">
                <span class="text-uppercase">{{ props.job.contractType }}</span> - {{datesSentence}}
            </p>
            <p 
                v-if="hasShortDescription" 
                class="job-description"
            >{{props.job.shortDescription}}</p>        
        </div>

    </div>

</template>

<script setup >
import { defineProps, computed } from 'vue'; 

const props = defineProps({
    job : {
        type : Object,
        required: true
    },        
    dataLoaded : {
        type : Boolean,
        required: true
    },        
})

const isCurrentJob = computed(()=>{
    return props.job.endDate !== undefined && props.job.endDate === null 
})

const hasShortDescription = computed(()=>{
    return props.job.shortDescription !== undefined && props.job.shortDescription !== "" 
})

const datesSentence = computed(()=>{

    const localeOptions = { year: 'numeric', month: 'long'};
    const start = new Date(props.job.startDate)    

    if(isCurrentJob.value){
        return `depuis ${start.toLocaleString('FR-fr', localeOptions)}`
    }

    const end = new Date(props.job.endDate)
    return `entre ${start.toLocaleString('FR-fr', localeOptions)} et ${end.toLocaleString('FR-fr', localeOptions)}`
        
})

</script>

<style lang="scss">
@import 'src/assets/styles/theming';

.job-item{
    padding: 1.5rem 2rem;
    border-bottom: 1px solid $dark;
    // height: 100%;

    &:last-child{
        border-bottom: none;
    }

    .job-metas{
        color: $gray-400;
        font-size: 1.1rem;
    }

    .job-description{
        color: $gray-500;
        font-size: 1.3rem;
        
    }

}


</style>