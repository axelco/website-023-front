<template>
    <h2 :class="`ar-section-title ${props.align} `">
        <span class="display-4">☄️</span>
        <span class="display-5">{{ props.title }}</span>
        
    </h2>
</template>

<script setup >
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required : true,
  },
  align : {
    type: String,
    default : 'center',
  },  
})

</script>

<style lang="scss" >
    @import '@/assets/styles/theming';

    .ar-section-title {
        
        position: relative;
        padding-bottom: 1.5rem;
        margin-bottom: 3rem;

        & > * {
            display: block;
        }

        &:after{
            content: '';
            position: absolute;
            bottom: 0;
            width: 100px;
            height: 4px;
            border-radius: $border-radius-pill;
            background-color: $gray-800;

        }

        &.center{
            text-align: center;
            &:after{
                left: 50%;
                margin-left: -50px;
            }

        }

        &.left{
            text-align: left;
            &:after{
                left: 0%;
                margin-left: 0;
            }

        }

    }

</style>