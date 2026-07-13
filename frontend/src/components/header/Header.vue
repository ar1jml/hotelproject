<script setup>
import TopHeader from './TopHeader.vue'
import MiddleHeader from './MiddleHeader.vue'
import HeroBanner from './HeroBanner.vue'
</script>


<template>

  <header class="header-wrapper">

    <TopHeader />

    <MiddleHeader />

    <HeroBanner />

  </header>

</template>


<style scoped>

.header-wrapper {

  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  z-index: 1000;

}

</style>