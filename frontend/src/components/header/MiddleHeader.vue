<template>
  <div class="top-header">

    <!-- Social Media -->
    <div class="social-links">
      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="#"><i class="fa-brands fa-telegram"></i></a>
      <a href="#"><i class="fa-brands fa-tiktok"></i></a>
      <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
    </div>

    <!-- Right Links -->
    <div class="quick-links">
      <a href="#">Get Help</a>
      <a href="#">Reservations</a>
      <a href="#">Customer Service</a>
    </div>

  </div>
</template>

<style scoped>
.top-header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 40px;
  background: #fff;
  border-top: 1px solid #eee;
}

/* Social Icons */

.social-links {
  display: flex;
  gap: 25px;
}

.social-links a {
  color: #1f4ca3;
  font-size: 22px;
  transition: 0.3s;
}

.social-links a:hover {
  color: #0d6efd;
}

/* Right Links */

.quick-links {
  display: flex;
  gap: 40px;
}

.quick-links a {
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: 500;
}

.quick-links a:hover {
  color: #1f4ca3;
}
</style>