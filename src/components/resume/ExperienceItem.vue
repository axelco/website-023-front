<template>

    <article class="experience-item">
        <header class="left">
            <div class="experience-company">
                <div v-if="props.dataLoaded">
                    <h3 class="h4 company-title">{{props.company.name}}</h3>
                    <p v-if="hasCompanyDescription" class="company-description">
                        {{props.company.description}}
                    </p>                
                </div>
                <div v-else>
                    <h3 class="h4 placeholder-glow">
                        <span class="placeholder col-12"></span>
                    </h3>
                    <p class="placeholder-glow">
                        <span class="placeholder col-10"></span>
                        <span class="placeholder col-9"></span>
                        <span class=" placeholder col-6"></span>
                    </p>
                </div>

            </div>        
        </header>
        <div class="right">
            <div class="experience-jobs">
                <JobItem 
                    v-for="item in props.jobs" 
                    :key="item._id"
                    :job="item"
                    :dataLoaded="props.dataLoaded" />          
            </div>        
        </div>

    </article>

</template>

<script setup >
    import { defineProps, computed } from 'vue'; 
    import JobItem from './JobItem.vue';

    const props = defineProps({
        company : {
            type : Object,
            required: true
        },
        jobs : {
            type : Array,
            required: true
        },        
        dataLoaded : {
            type : Boolean,
            required: true
        },        
    })


    const hasCompanyDescription = computed(()=>{
        if(props.company.description){
            if(props.company.description !== ""){
                return true
            }
        }

        return false
    })


</script>

<style lang="scss">
@import 'src/assets/styles/theming';

.experience-item {

    background-color: $black;
    display: flex;
    flex-direction: column;
    border-radius: $border-radius;
    margin-bottom: 1.5rem;

    .left{
        width: 100%;
        max-width: 100%;
        

        .experience-company {

            height: 100%;
            padding: 1.5rem;
            border-color: $dark;
            border-width: 0 0 1px 0;
            border-style: solid;

            .company-title{
                color: $gray-500;
                font-weight: 400;       
                
            }

            .company-description{
                color: $gray-600;
                font-size: .95rem;
            }
        }

    }


    .right {
        width: 100%;
        max-width: 100%;
        flex-grow: 1;
        
        .experience-jobs{
            height: 100%;

        }
        
    }

    @include media-breakpoint-up(lg){
        flex-direction: row;
        .left{
            width: 25%;
            flex: 0 0 auto;

            .experience-company{
                border-width: 0 1px 0  0;
            }
        }
    }


}

</style>