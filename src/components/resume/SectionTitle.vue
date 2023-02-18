<template>
    <h2 class="ar-section-title display-5">
        {{ props.title }}
    </h2>
</template>

<script setup >
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required : true,
  },
})

</script>

<style lang="scss" >
    @import '@/assets/styles/theming';

    .ar-section-title {
        text-align: center;
        position: relative;
        padding-bottom: 1rem;
        margin-bottom: 3rem;

        &:after{
            content: '';
            position: absolute;
            bottom: 0;
            width: 80px;
            height: 4px;
            border-radius: $border-radius;
            background-color: $primary;
            left: 50%;
            margin-left: -40px;
        }
    }

</style>