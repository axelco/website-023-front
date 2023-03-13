<template>
  <ul class="nav-menu">
    <li>
      <RouterLink :to="{ name: 'contact' }" class="nav-link">
        <i class="icon bi bi-envelope-check"></i>
        <span class="text">Contact</span>
      </RouterLink>
    </li>
    <li v-if="state.resumePdf !== ''">
      <a :href="state.resumePdf" target="_blank" class="nav-link primary">
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
import { computed, reactive, onMounted } from "vue";
import { useStore } from "vuex";

import resumeService from "@/services/resume.service";

const store = useStore();
const state = reactive({
  resumePdfLoaded: false,
  resumePdf: "",
});

onMounted(() => {
  fetchResumePdf();
});

const fetchResumePdf = () => {
  state.resumePdfLoaded = false;
  resumeService
    .getResumePdfByContext()
    .then((res) => {
      state.resumePdfLoaded = true;
      state.resumePdf = res.data.url;
    })
    .catch((error) => {
      state.resumePdfLoaded = true;
      console.error(error);
    });
};

const linkedinUrl = computed(() => {
  return store.getters["infos/getLinkedinUrl"];
});
</script>
