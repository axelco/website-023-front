<template>

    <div  v-if="showBanner" 
        id="availabilityBanner" 
        :class="getAvailability.type"
    >
        <UiContainer >
            <div class="left">
                <i class="icon bi bi-info-square"></i>
                <p class="text">{{ getAvailability.name }}</p>
            </div>       
            <div class="right">
                <button @click="toggleIgnoreBanner()" class="btn btn-banner" >
                    Ignorer
                </button>
            </div> 
        </UiContainer>
    </div>


</template>

<script setup >
import {  computed } from 'vue';
import { useStore } from 'vuex';
import UiContainer from '../ui/UiContainer.vue';

const store = useStore();


const showBanner = computed(()=>{
    return store.getters['resume/showAvailability']
})

const getAvailability = computed(()=>{
    return store.getters['infos/getAvailability']
});

const toggleIgnoreBanner= () => {
    store.dispatch('resume/toggleAvailabilityBanner')
}

</script>

<style lang="scss">
@import 'src/assets/styles/theming';

#availabilityBanner{

    padding-top: .5rem;
    padding-bottom: .5rem;
    display: flex;
    flex-direction: column;
    justify-content : center;
    color: $gray-200;

    &.warning {
        background-color: rgba($warning, .6);
        color: lighten($warning, 30%);
    }

    &.primary {
        background-color: rgba($primary, .7);
        color: lighten($primary, 25%);
    }

    &.danger {
        background-color: rgba($danger, .6);
        color: lighten($danger, 30%);
        
    }

    &.success {
        background-color: rgba($success, .6);
        color: lighten($danger, 30%);
    }    
    
    .container-fluid, .container{
        display: flex;
        flex-direction: column;

        .left{
            flex-grow: 1;
            padding-right: .5rem;
            display: flex;
            flex-direction: column;   
            
            margin-bottom: 1rem;     
            
            .icon{
                margin-right: 1rem;
                font-size: 1.5rem;
            }

            .text{
                margin-bottom: 0;
                font-size: 1.1rem;
            }
        }

        .right{
            .btn-banner{
                background-color: rgba($white, .5);
                transition: $transition-base;

                &:hover{
                    background-color: rgba($white, .8);
                    color: $black;
                }
            }
        }


        @include media-breakpoint-up(lg){

            flex-direction: row;
            align-items: center;

            .left{
                margin-bottom: 0;
                flex-direction: row;                   
                align-items: center;
            }
        }        
    }

}

</style>