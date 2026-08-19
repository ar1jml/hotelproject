<script setup>
import TopHeader from './TopHeader.vue'
import MiddleHeader from './MiddleHeader.vue'
</script>

<template>
  <header class="header-wrapper">
    <TopHeader />
    <MiddleHeader />
  </header>
</template>

<style scoped>
.header-wrapper {
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100%;
}
</style>