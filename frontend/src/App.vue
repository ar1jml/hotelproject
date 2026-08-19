<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Header from './components/header/Header.vue'
import HeroBanner from './components/hero/HeroBanner.vue'
import Rooms from './components/Rooms/Rooms.vue'

const route = useRoute()

const isPublicPage = computed(() => {
  return !route.path.startsWith('/admin') &&
         !route.path.startsWith('/staff')
})
</script>

<template>

  <!-- PUBLIC WEBSITE -->

  <template v-if="isPublicPage">

    <Header />

    <HeroBanner />

    <main>
      <Rooms />

      <router-view />
    </main>

  </template>


  <!-- ADMIN / STAFF -->

  <template v-else>

    <main>
      <router-view />
    </main>

  </template>

</template>