<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"

import Header from "./components/header/Header.vue"
import HeroBanner from "./components/hero/HeroBanner.vue"
import WelcomeSection from "./components/home/WelcomeSection.vue"
import Rooms from "./components/Rooms/Rooms.vue"
import Restaurant from "./components/restaurant/Restaurant.vue"

import MyAccount from "./views/MyAccount.vue"

const route = useRoute()

const isPanel = computed(() => {
  return route.path.startsWith("/admin") || route.path.startsWith("/staff")
})
</script>

<template>

  <!-- PUBLIC WEBSITE -->
  <template v-if="!isPanel">

    <Header />

    <main>

      <!-- HOME -->
      <template v-if="route.path === '/'">

        <section id="home">
          <HeroBanner />
          <WelcomeSection />
        </section>

        <section id="rooms">
          <Rooms />
        </section>

        <section id="restaurant">
          <Restaurant />
        </section>

        <section id="blogs" class="page-section">
          <h2>Our Blogs</h2>
        </section>

        <section id="gallery" class="page-section">
          <h2>Our Gallery</h2>
        </section>

        <section id="contact" class="page-section">
          <h2>Contact Us</h2>
        </section>

      </template>

      <!-- OTHER PUBLIC ROUTES -->
      <router-view v-else />

    </main>

  </template>


  <!-- ADMIN / STAFF -->
  <template v-else>

    <router-view />

  </template>

</template>


<style scoped>

#home,
#rooms,
#restaurant,
#blogs,
#gallery,
#contact,
#account,
#book-now {
  scroll-margin-top: 140px;
}

.page-section {
  min-height: 500px;
  padding: 100px 30px;
  text-align: center;
}

.account-section {
  background: #f8f9fa;
}

.booking-section {
  background: #f8f9fa;
}

</style>