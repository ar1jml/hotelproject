<template>
  <div class="middle-header">

    <!-- Mobile User -->
    <button class="account-btn">
      <i class="fa-regular fa-user"></i>
    </button>


    <!-- Social Media -->
    <div class="social-links">
      <a href="#">
        <i class="fa-brands fa-facebook-f"></i>
      </a>

      <a href="#">
        <i class="fa-brands fa-telegram"></i>
      </a>

      <a href="#">
        <i class="fa-brands fa-tiktok"></i>
      </a>

      <a href="#">
        <i class="fa-brands fa-whatsapp"></i>
      </a>
    </div>


    <!-- Desktop Links -->
    <div class="quick-links">
      <a href="#">Get Help</a>
      <a href="#">Reservations</a>
      <a href="#">Customer Service</a>
    </div>


    <!-- Mobile Book -->
    <button class="book-btn">
      Book Your Stay
    </button>

  </div>
</template>


<style scoped>
@media(max-width:768px){

.middle-header{

  height:60px;

  display:grid;

  grid-template-columns:40px 1fr auto;

  align-items:center;

  padding:0 15px;

}


/* user left */
.account-btn{

  display:flex;

  width:40px;

  height:40px;

  border:none;

  border-radius:50%;

  background:#1f4ca3;

  color:white;

  align-items:center;

  justify-content:center;

}


/* social exactly center */
.social-links{

  justify-self:center;

  display:flex;

  gap:14px;

}


/* hide desktop links */
.quick-links{

  display:none;

}


/* book right */
.book-btn{

  display:block;

  justify-self:end;

  border:none;

  background:#1f4ca3;

  color:white;

  padding:9px 14px;

  border-radius:20px;

  font-size:13px;

}

}
</style>