<template>

<div class="mb-3 mb-lg-4">
    <ul v-if="state.softSkillsLoaded" id="soft-skills"  >
        <li 
            v-for="item in state.softSkills" 
            :key="item._id">
                <p  class="mb-0">
                    {{ item.name }}
                </p>
        </li>
    </ul>
    <p v-else class="fs-3 placeholder-glow">
        <span class="placeholder col-12"></span>
    
    </p>    
</div>

</template>

<script setup >
import { onMounted, reactive } from 'vue';
import resumeService from '@/services/resume.service';

const state = reactive({
    softSkills : [],
    softSkillsLoaded : false,
    softSkillsApiError: null,
})

onMounted(()=>{
    fetchSoftSkills()
})

const fetchSoftSkills = () => {
    state.softSkillsLoaded = false
    resumeService.getSoftSkills()
    .then(
        (res)=>{
            state.softSkillsLoaded = true
            state.softSkills = res.data
        }
    )
}

</script>

<style lang="scss">
@import 'src/assets/styles/theming';

#soft-skills{
    list-style: none;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    li {

        &:before{
            content: '#';
            margin-right: .5rem;
            color: #F9B068;
        }
        display: flex;
        font-size: 1.1rem;
        margin-right: .8rem;
        margin-bottom: .8rem;
        padding: .5rem 1.5rem;
        background-color: $black;
        border-radius: $border-radius-pill;
    }
}

</style>