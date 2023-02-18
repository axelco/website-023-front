<template>
    <UiCard 
        class="h-100"
        :show-footer="false" 
        :show-header="false">
        <p class="fs-1">{{ setEmoji }}</p>
        <p class="fs-4 fw-bold mb-0">{{props.hardSkill.name}}</p>
    </UiCard>

</template>

<script setup >

import { defineProps, computed } from 'vue';

import UiCard from '../ui/UiCard.vue';

const props = defineProps({
  hardSkill: {
    type: Object,
    required : true,
  },
})

const setEmoji = computed(()=>{
    const emoji = props.hardSkill.emoji
    if(emoji){
        return emoji
    }

    return `⚙️`
})
</script>