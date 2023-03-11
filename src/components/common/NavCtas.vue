<template>
  <ul class="nav-menu">
    <li>
      <RouterLink :to="{ name: 'contact' }" class="nav-link">
        <i class="icon bi bi-envelope-check"></i>
        <span class="text">Contact</span>
      </RouterLink>
    </li>
    <li v-if="resumePdf !== null">
      <a :href="resumePdf" target="_blank" class="nav-link primary">
        <i class="icon bi bi-file-earmark-arrow-down"></i>
        <span class="text">CV PDF</span>
      </a>
    </li>
    <li>
      <a :href="linkedinUrl" target="_blank" class="nav-link">
        <i class="icon bi bi-linkedin"></i>
        <span class="text">Linkedin</span>
      </a>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const linkedinUrl = computed(() => {
  return store.getters["infos/getLinkedinUrl"];
});

const resumePdf = computed(() => {
  return store.getters["resume/getResumePDF"];
});
</script>
