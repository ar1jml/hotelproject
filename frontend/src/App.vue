<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Header from './components/header/Header.vue'
import HeroBanner from './components/hero/HeroBanner.vue'

const route = useRoute()

const isPublicPage = computed(() => {
  return !route.path.startsWith('/admin') &&
         !route.path.startsWith('/staff')
})
</script>

<template>
  <Header v-if="isPublicPage" />

  <HeroBanner v-if="isPublicPage" />

  <main>
    <router-view />
  </main>
</template>