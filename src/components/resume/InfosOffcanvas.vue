<template>
    <div class="offcanvas offcanvas-end" 
        tabindex="-1" 
        id="aboutOffcanvas" 
        aria-labelledby="aboutOffcanvasLabel"
        >
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="aboutOffcanvasLabel">à propos de moi</h5>
            <button 
                type="button" 
                class="btn btn-link" 
                data-bs-dismiss="offcanvas" 
                aria-label="Fermer">
                 <i class="bi bi-x-lg"></i>
                </button>
        </div>
        <div class="offcanvas-body">
            <ul class="about-meta">
                <li>
                    <p class="title">Prénom</p>
                    <p class="text">{{getFirstName}}</p>
                </li>
                <li>
                    <p class="title">Nom de famille</p>
                    <p class="text">{{getLastName}}</p>
                </li>  
                <li>
                    <p class="title">Date de naissance</p>
                    <p class="text">{{getBirthdate}} ({{getAge}})</p>
                </li>            
                <li>
                    <p class="title">Nationalité</p>
                    <p class="text">{{getNationality}}</p>
                </li>       
                <li>
                    <p class="title">Habite à </p>
                    <p class="text">
                        {{ getLocation }}
                    
                    </p>            
                </li> 
                <!-- <li>
                    <p class="title">Disponibilité</p>
                    <p class="text">{{infos.availability}}</p>
                </li>      -->
                <li>
                    <p class="title">Hobbies</p>
                    <p class="text">
                    <span v-for="item in getHobbies" :key="item">{{item}} <br/> </span>
                    </p>
                </li>                                   
            </ul>
        </div>
    </div>    

</template>

<script setup >
import { computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore()

const getFirstName = computed(()=>{
    return store.getters['infos/getFirstName']
})

const getLastName = computed(()=>{
    return store.getters['infos/getLastName']
}) 

const getBirthdate = computed(()=>{
    return store.getters['infos/getBirthdate']
}) 

const getAge = computed(()=>{
    return store.getters['infos/getAge']
}) 

const getLocation = computed(()=>{
    return store.getters['infos/getLocation']
}) 

const getNationality = computed(()=>{
    return store.getters['infos/getNationality']
}) 

const getHobbies = computed(()=>{
    return store.getters['infos/getHobbies']
}) 

</script>

<style lang="scss">
@import 'src/assets/styles/theming';

.about-meta{
        list-style: none;
        padding-left: 0;
        
        li {
            padding-bottom: $spacer *.5;
            margin-bottom: $spacer *.5;
            border-bottom: 1px solid $dark;
            

            .title{
            padding-right: $spacer;
            color : $gray-600;
            margin-bottom : $spacer *.2;
            }

            .text {
            font-weight: $font-weight-normal;
            margin-bottom: 0;
            }
        }
    } 
</style>