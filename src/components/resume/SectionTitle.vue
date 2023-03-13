<template>
  <h2 :class="`ar-section-title ${props.align} `">
    <span v-if="ShowEmoji" class="display-4">{{ props.emoji }}</span>
    <span class="display-5">{{ props.title }}</span>
  </h2>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  emoji: {
    type: String,
    default: "",
  },
  align: {
    type: String,
    default: "center",
  },
});

const ShowEmoji = computed(() => {
  return props.emoji !== "";
});
</script>

<style lang="scss">
@import "@/assets/styles/theming";

.ar-section-title {
  position: relative;
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;

  & > * {
    display: block;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 4px;
    border-radius: $border-radius-pill;
    background-color: $gray-400;
  }

  &.center {
    text-align: center;
    &:after {
      left: 50%;
      margin-left: -50px;
    }
  }

  &.left {
    text-align: left;
    &:after {
      left: 0%;
      margin-left: 0;
    }
  }
}

@include color-mode(dark) {
  .ar-section-title {
    &:after {
      background-color: $gray-800;
    }
  }
}
</style>
