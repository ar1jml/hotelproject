<template>
  <header>
    <!-- Logo Area -->

    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </div>


     <!-- Main Navigation -->

     <nav>
      <a>Home</a>
      <a>Rooms</a>
      <a>Restaurants</a>
      <a>Blogs</a>
      <a>Our Gallery</a>
      <a>Contact Us</a>
    </nav>
 <!-- Right Actions -->
  </header>
</template>

<style scoped>
.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
}
.logo-container {
  position: fixed;
  left: 20px;
  top: 20px;
  z-index: 1000;
}
</style>

<script setup>

</script>