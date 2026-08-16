<script setup>
import Header from './components/header/Header.vue'
import HeroBanner from './components/hero/HeroBanner.vue'
</script>

<template>

  <!-- Public Website -->
  <template v-if="!$route.path.startsWith('/admin')">
    <Header />
    <HeroBanner />
  </template>

  <!-- Page Content -->
  <main>
    <router-view />
  </main>

</template>