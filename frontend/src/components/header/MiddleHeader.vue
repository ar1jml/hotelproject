
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
.top-header {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  background: #fff;
  border-top: 1px solid #eee;
}


/* Hidden on desktop */
.account-btn,
.book-btn {
  display: none;
}


/* Social Icons */
.social-links {
  display: flex;
  gap: 25px;
}

.social-links a {
  color: #1f4ca3;
  font-size: 22px;
}


/* Desktop Links */
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



@media (max-width:768px){

.top-header{
    height:60px;
    padding:0 15px;

    display:flex;
    align-items:center;
    justify-content:space-between;
}


/* Show mobile buttons */
.account-btn,
.book-btn{
    display:flex;
    align-items:center;
    justify-content:center;
}


/* User left */
.account-btn{
    width:40px;
    height:40px;

    border:none;
    border-radius:50%;

    background:#1f4ca3;
    color:white;

    font-size:18px;

    order:1;
}


/* Social center */
.social-links{
    display:flex;
    gap:15px;

    order:2;
}

.social-links a{
    font-size:18px;
}


/* Book right */
.book-btn{

    order:3;

    border:none;
    background:#1f4ca3;
    color:white;

    padding:8px 18px;

    border-radius:20px;

    font-weight:600;
}


/* Hide desktop */
.quick-links{
    display:none;
}

}
</style>
