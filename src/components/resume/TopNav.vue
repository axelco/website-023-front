<template>
  <nav id="resumeNav" :class="{ fixed: state.fixNav }">
    <UiContainer size="xl">
      <ul class="nav-menu">
        <li>
          <RouterLink :to="{ name: 'chooseJobContext' }" class="nav-link">
            <i class="icon bi bi-briefcase"></i>
            <span class="text">Modifier job</span>
          </RouterLink>
        </li>
      </ul>
      <NavCtas />
    </UiContainer>
  </nav>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import UiContainer from "../ui/UiContainer.vue";
import NavCtas from "../common/NavCtas.vue";

const state = reactive({
  fixNav: false,
});

onMounted(() => {
  setFixNav();
  window.addEventListener("scroll", setFixNav);
});

// onUnmounted(()=> {

//     window.removeEventListener('scroll', setFixNav)
// })

const setFixNav = () => {
  state.fixNav = window.scrollY > 200 ? true : false;
};
</script>

<style lang="scss">
@import "@/assets/styles/theming";

#resumeNav {
  background-color: $body-secondary-bg;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;

  &.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 550;
  }

  .container,
  .container-fluid {
    display: flex;
    justify-content: space-between;
  }

  .nav-menu {
    padding-left: 0;
    list-style: none;
    margin-bottom: 0;
    display: flex;

    .nav-link {
      display: flex;
      align-items: center;
      padding: 0.5rem;

      &:hover {
        color: $gray-600;
      }
      .icon {
        margin-right: 0.5rem;
        font-size: 1.4rem;
      }

      .text {
        display: none;
      }

      &.primary {
        color: $primary;
        &:hover {
          color: rgba($primary, 0.7);
        }
      }
    }
  }

  @include media-breakpoint-up(md) {
    .nav-menu {
      .nav-link {
        .text {
          display: inline;
        }
      }
    }
  }
}

@include color-mode(dark) {
  #resumeNav {
    background-color: $black;

    .nav-menu {
      .nav-link {
        &:hover {
          color: $gray-300;
        }

        &.primary {
          color: $link-hover-color-dark;
          &:hover {
            color: $link-color-dark;
          }
        }
      }
    }
  }
}
</style>
