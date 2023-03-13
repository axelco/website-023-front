<template>
  <footer id="appFooter">
    <UiContainer>
      <button class="btn btn-link" @click="toggleTheme">
        <i :class="`bi bi-${state.currentTheme === 'light' ? 'moon' : 'sun'}`"></i>
        {{ setThemeSentence }}
      </button>
    </UiContainer>
  </footer>
</template>

<script setup>
import { computed, reactive, onMounted } from "vue";

import themingService from "@/services/theming.service";
import UiContainer from "../ui/UiContainer.vue";

const state = reactive({
  currentTheme: "",
});

onMounted(() => {
  state.currentTheme = themingService.getPreferredTheme();
});

const setThemeSentence = computed(() => {
  if (state.currentTheme === "light") {
    return "passer en thème sombre";
  }

  return "passer en thème clair";
});

const toggleTheme = () => {
  if (state.currentTheme === "dark") {
    state.currentTheme = "light";
    themingService.setTheme("light");
  } else {
    state.currentTheme = "dark";
    themingService.setTheme("dark");
  }
};
</script>

<style lang="scss">
@import "src/assets/styles/theming";

#appFooter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  .container,
  .container-fluid {
    text-align: center;
  }
}
</style>
