<script setup>
import Header from './components/header/Header.vue'
import HeroBanner from './components/hero/HeroBanner.vue'
import WelcomeSection from './components/home/WelcomeSection.vue'
import Rooms from './components/Rooms/Rooms.vue'
import Restaurant from './components/restaurant/Restaurant.vue'
</script>

<template>
  <Header />

  <main>

    <!-- HOME -->
    <section id="home">
      <HeroBanner />
      <WelcomeSection />
    </section>

    <!-- ROOMS -->
    <Rooms />

    <!-- RESTAURANT -->
    <Restaurant />

    <!-- BLOGS -->
    <section id="blogs" class="page-section">
      <h2>Our Blogs</h2>
    </section>

    <!-- GALLERY -->
    <section id="gallery" class="page-section">
      <h2>Our Gallery</h2>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="page-section">
      <h2>Contact Us</h2>
    </section>

  </main>
</template>

<style scoped>
#home {
  scroll-margin-top: 140px;
}

.page-section {
  min-height: 500px;
  padding: 100px 30px;
  text-align: center;
  scroll-margin-top: 140px;
}
</style>