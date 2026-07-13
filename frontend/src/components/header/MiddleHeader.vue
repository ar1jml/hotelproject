
<template>
  <div class="top-header">

    <!-- User (Mobile Only) -->
    <button class="account-btn">
      <i class="fa-regular fa-user"></i>
    </button>

    <!-- Social Media -->
    <div class="social-links">
      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="#"><i class="fa-brands fa-telegram"></i></a>
      <a href="#"><i class="fa-brands fa-tiktok"></i></a>
      <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
    </div>

    <!-- Desktop Links -->
    <div class="quick-links">
      <a href="#">Get Help</a>
      <a href="#">Reservations</a>
      <a href="#">Customer Service</a>
    </div>

    <!-- Mobile Button -->
    <button class="book-btn">
      Book
    </button>

  </div>
</template>
<style scoped>


.middle-header {
  height: 80px;
  display: flex;
  align-items: center;
}
/* Hidden on desktop */
.account-btn,
.book-btn {
  display: none;
}
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

.mobile-top-header{
    display:none;
}

@media (max-width:768px){

.top-header{
    height:60px;
    padding:0 15px;

    display:flex;
    justify-content:space-between;
    align-items:center;
}

.account-btn,
.book-btn{
    display:block;
}

.account-btn{
    width:42px;
    height:42px;

    border:none;
    border-radius:50%;
    background:#1f4ca3;
    color:#fff;
    font-size:18px;
}

.book-btn{
    border:none;
    background:#1f4ca3;
    color:#fff;

    padding:10px 16px;
    border-radius:20px;
    font-weight:600;
}

/* Center social icons */
.social-links{
    display:flex;
    gap:18px;
}

/* Hide desktop links */
.quick-links{
    display:none;
}
}
</style>
