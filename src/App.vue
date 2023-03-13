<template>
  <div v-if="!state.infosLoaded" class="py-3 py-lg-5">
    <ui-spinner />
  </div>
  <div v-else>
    <UiContainer v-if="hasError" size="md" class="py-3 py-lg-5">
      <div class="alert alert-warning">
        <p class="display-6">Une erreur est survenue ! Détail de l'erreur :</p>
        <p class="">{{ state.infosApiError }}</p>
      </div>
    </UiContainer>
    <div v-else>
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { onMounted } from "vue";

import infosService from "./services/infos.service";
import themingService from "./services/theming.service";

import AppFooter from "./components/common/AppFooter.vue";
import UiContainer from "./components/ui/UiContainer.vue";
import UiSpinner from "./components/ui/UiSpinner.vue";

const store = useStore();

const state = reactive({
  infosLoaded: false,
  infosApiError: null,
});

onMounted(() => {
  // On récupère les infos persos dès l'instanciation de l"app
  getPersonalInfos();

  // On gère le theme light / dark à l'instanciation de l'app
  themingService.setTheme(themingService.getPreferredTheme());
});

const hasError = computed(() => {
  return state.infosApiError !== null;
});

const getPersonalInfos = () => {
  state.infosLoaded = false;
  infosService
    .getPersonalInfos()
    .then((res) => {
      store.dispatch("infos/storeInfos", res.data);
      state.infosLoaded = true;
    })
    .catch((error) => {
      state.infosLoaded = true;
      state.infosApiError = error.toString();
    });
};
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,700&display=swap);
@import "src/assets/styles/global.scss";
</style>
