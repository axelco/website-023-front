<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <UiSection>
    <UiContainer size="md" >
      <router-view/>
    </UiContainer>  
  </UiSection>

  
</template>

<script setup>
  import UiSection from './components/ui/UiSection.vue'
  import UiContainer from './components/ui/UiContainer.vue';

</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;1,700&display=swap);
  @import 'src/assets/styles/global.scss';
</style>
