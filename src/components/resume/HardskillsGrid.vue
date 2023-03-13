<template>
  <div class="row gx-3">
    <div
      class="col-12 mb-3 col-md-6 col-lg-4 col-xl-3 skill-item"
      v-for="item in state.hardSkills"
      :key="item._id"
    >
      <UiCard :show-footer="false" :show-header="false" class="h-100 skill-card">
        <p v-if="state.hardSkillsLoaded" class="fs-1">
          <!-- {{ item.emoji }} -->
          <i :class="`icon bi bi-${item.bsIcon ? item.bsIcon : `gear`}`"></i>
        </p>

        <p v-else class="fs-1 placeholder-glow">
          <span class="placeholder col-2"></span>
        </p>

        <p v-if="state.hardSkillsLoaded" class="fs-5 mb-0">{{ item.name }}</p>

        <p v-else class="fs-4 placeholder-glow">
          <span class="placeholder col-8"></span>
          <span class="placeholder col-10"></span>
          <span class="placeholder col-6"></span>
        </p>
      </UiCard>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import resumeService from "@/services/resume.service";
import UiCard from "../ui/UiCard.vue";

const state = reactive({
  // On ajoute des objets vides dans hardskills pour le chargement initial
  // Via des placeholders, dont leur nb dépend du nb d'objet dans la boucle for
  // Dans le template
  hardSkills: [{}, {}, {}, {}, {}],
  hardSkillsLoaded: false,
  hardSkillsApiErrors: null,
});

onMounted(() => {
  fetchHardSkills();
});

const fetchHardSkills = () => {
  state.hardSkillsLoaded = false;
  resumeService
    .getHardSkillsByContext()
    .then((res) => {
      state.hardSkills = res.data;
      state.hardSkillsLoaded = true;
      state.hardSkillsApiErrors = null;
    })
    .catch((error) => {
      state.intro = {};
      state.hardSkillsLoaded = true;
      state.hardSkillsApiErrors = error.toString();
    });
};
</script>

<style lang="scss">
@import "src/assets/styles/theming";
.skill-item {
  transition: $transition-base;

  .icon {
    color: lighten($primary, 35%);
  }

  // &:hover {
  //   .icon {
  //     color: $primary;
  //   }
  // }

  &:nth-child(odd) {
    .icon {
      color: lighten($primary, 20%);
    }
  }
}

@include color-mode(dark) {
  .skill-item {
    // .icon {
    //   color: $gray-600;
    // }

    // &:hover {
    //   .icon {
    //     color: $primary;
    //   }
    // }

    // &:nth-child(odd){
    //     .icon {
    //         color: #F578CA;
    //     }
    // }
  }
}
</style>
