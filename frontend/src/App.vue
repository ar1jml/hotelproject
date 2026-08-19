<script setup>
import Header from "./components/header/Header.vue"
import HeroBanner from "./components/hero/HeroBanner.vue"
import WelcomeSection from "./components/home/WelcomeSection.vue"
import Rooms from "./components/Rooms/Rooms.vue"
import Restaurant from "./components/restaurant/Restaurant.vue"

import MyAccount from "./views/MyAccount.vue"
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
    <section id="rooms">
      <Rooms />
    </section>


    <!-- RESTAURANT -->
    <section id="restaurant">
      <Restaurant />
    </section>


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


    <!-- MY ACCOUNT -->
    <section
      id="account"
      class="page-section account-section"
    >
      <MyAccount />
    </section>


    <!-- BOOK YOUR STAY -->
    <!-- Same Rooms component -->
    <section
      id="book-now"
      class="page-section booking-section"
    >
      <Rooms />
    </section>

  </main>
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


/* ACCOUNT */

.account-section {
  background: #f8f9fa;
}


/* BOOKING */

.booking-section {
  background: #f8f9fa;
}

</style>