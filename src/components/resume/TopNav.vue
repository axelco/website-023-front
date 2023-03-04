<template>
    <nav id="resumeNav" :class="{fixed : state.fixNav}">
        <UiContainer >
            <ul class="nav-menu">
                <li>
                    <RouterLink 
                        :to="{name: 'chooseJobContext'}" 
                        class="nav-link"
                    >
                        <i class="icon bi bi-arrow-left"></i>
                        <span class="text">Modifier le job recherché</span>
                    </RouterLink>
                </li>
            </ul>
            <ul class="nav-menu">
                
                <li>
                    <RouterLink 
                        :to="{name: 'contact'}"
                        class="nav-link"
                    >
                        <i class="icon bi bi-envelope-check"></i>
                        <span class="text">Contact</span>
                    </RouterLink>
                </li>         
                <li v-if="resumePdf !== null">
                    <a 
                        :href="resumePdf" 
                        target="_blank" 
                        class="nav-link primary"
                    >
                        <i class="icon bi bi-file-earmark-arrow-down"></i>
                        <span class="text">CV PDF</span>
                    </a>
                </li>                   
                <li>
                    <a 
                        :href="linkedinUrl" 
                        target="_blank" 
                        class="nav-link"
                    >
                        <i class="icon bi bi-linkedin"></i>
                        <span class="text">Linkedin</span>
                    </a>
                </li>

            </ul>  
        </UiContainer>
    </nav>

</template>

<script setup >
import { onMounted, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import UiContainer from '../ui/UiContainer.vue';

const state =reactive({
    fixNav : false
})

const store = useStore()

onMounted(()=> {
    setFixNav()
    window.addEventListener('scroll', setFixNav)
})

const linkedinUrl = computed(()=>{

    return store.getters['infos/getLinkedinUrl']
})

const resumePdf = computed(()=>{
    return store.getters['resume/getResume']
})

// onUnmounted(()=> {

//     window.removeEventListener('scroll', setFixNav)
// })

const setFixNav = () => {
    state.fixNav = window.scrollY > 200 ? true : false

}

</script>

<style lang="scss">
    @import '@/assets/styles/theming';
    #resumeNav{
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