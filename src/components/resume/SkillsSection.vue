<template>
    <UiSection>
        <UiContainer size="sm">
            <SectionTitle :title="`Mes compétences `" />
        </UiContainer>
        <UiContainer size="xl">
            <HardskillsGrid />
        </UiContainer>
        
    </UiSection>
    

</template>

<script setup >

import UiSection from '../ui/UiSection.vue';
import UiContainer from '../ui/UiContainer.vue';
import HardskillsGrid from '@/components/resume/HardskillsGrid.vue'
import SectionTitle from './SectionTitle.vue';

</script>