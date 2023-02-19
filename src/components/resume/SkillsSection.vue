<template>
    <UiSection>
        <UiContainer size="sm">
            <SectionTitle :title="`Mes compétences `" align="center" />
        </UiContainer>
        <UiContainer size="md">
            <SoftskillsList />
        </UiContainer>        
        <UiContainer size="xl">
            <HardskillsGrid />
        </UiContainer>
        
    </UiSection>
    

</template>

<script setup >

import UiSection from '../ui/UiSection.vue';
import UiContainer from '../ui/UiContainer.vue';
import SoftskillsList from './SoftskillsList.vue';
import HardskillsGrid from '@/components/resume/HardskillsGrid.vue'
import SectionTitle from './SectionTitle.vue';

</script>