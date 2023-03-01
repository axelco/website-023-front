<template>
    <UiSection>
        <UiContainer size="md">
            <button 
                @click="router.back()"
                class="btn btn-link mb-1 mb-lg-2"
            >
                <i class="bi bi-arrow-left"></i> Retour
            </button>
            <UiCard :show-footer="false">
                <template #header >
                    <h1>Me contacter</h1>
                </template>
                <ul class="contact-list">
                    <li>
                        <p class="title">Par e-mail</p>
                        <p class="text">
                            <a :href="`mailto:${getEmail}`" >{{ getEmail }}</a>
                        </p>
                    </li>
                    <li>
                        <p class="title">Via Linkedin</p>
                        <p class="text">
                            <a :href="getLinkedinUrl" target="_blank">{{getLinkedinUrl}}</a>                    
                        </p>
                    </li>                    
                </ul>
            
            </UiCard>
            
        </UiContainer>
    </UiSection>
    
</template>

<script setup >

import { useRouter } from 'vue-router';
import { computed } from 'vue';
import { useStore } from 'vuex';

import UiContainer from '@/components/ui/UiContainer.vue';
import UiSection from '@/components/ui/UiSection.vue';
import UiCard from '@/components/ui/UiCard.vue';

const router = useRouter()
const store = useStore()

const getEmail = computed(()=>{
    return store.getters['infos/getEmail']
})

const getLinkedinUrl = computed(()=>{
    return store.getters['infos/getLinkedinUrl']
})

</script>

<style lang="scss" scoped>
    @import '@/assets/styles/theming';

    .contact-list{
        list-style: none;
        padding-left: 0;
        margin-bottom: 0;
        li {
            display: flex;
            flex-direction: column;
            margin-bottom: 1rem;

            .title {
                text-transform: uppercase;
                color: $gray-500;
                font-size: 1rem;
                margin-bottom: .25rem;
            }

            .text{
                font-size: 2em;
            }
        }
    }
</style>