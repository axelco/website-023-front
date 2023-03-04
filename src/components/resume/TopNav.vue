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
            <NavCtas />
        </UiContainer>
    </nav>

</template>

<script setup >
import { onMounted, reactive } from 'vue';
import UiContainer from '../ui/UiContainer.vue';
import NavCtas from '../common/NavCtas.vue';

const state =reactive({
    fixNav : false
})


onMounted(()=> {
    setFixNav()
    window.addEventListener('scroll', setFixNav)
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