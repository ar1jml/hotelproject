
<template>
  <header class="header">


    <!-- Logo LEFT -->
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
    </div>


    <!-- Navigation DESKTOP -->
   <nav class="nav" :class="{ 'mobile-open': menuOpen }">
      <a href="#">Home</a>
      <a href="#">Rooms</a>
      <a href="#">Restaurants</a>
      <a href="#">Blogs</a>
      <a href="#">Our Gallery</a>
      <a href="#">Contact Us</a>
    </nav>


    <!-- Hamburger MOBILE -->
  <button class="hamburger" @click="toggleMenu">
  <font-awesome-icon 
    :icon="menuOpen ? faXmark : faBars" 
  />
</button>

    <!-- RIGHT SIDE -->
    <div class="right-actions">


     <!-- Phone -->
<div class="contact-info">

  <a href="tel:+251909555556" class="phone-icon">
    <font-awesome-icon :icon="faPhone" />
  </a>

  <div class="contact-text">
    <span>Have Question?</span>

    <a href="tel:+251909555556">
      +(251) 909-55-5556
    </a>
  </div>

</div>


      <!-- My Account -->
      <a href="/login" class="account-link" title="My Account">
        <font-awesome-icon :icon="faUser" />
      </a>


      <!-- Book Your Stay -->
      <button class="book-btn">
        Book Your Stay
      </button>


    </div>


  </header>
</template>


<style scoped>
.top-header {
  height: 40px;
  display: flex;
  align-items: center;
}
/* HEADER */
.header {

  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;

  padding: 0 35px;
  box-sizing: border-box;

}


/* HAMBURGER ICON */
.hamburger {
  color: #6ea1d4;
}


/* LOGO */
.logo-container {
  flex-shrink: 0;
}

.logo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}


/* NAVIGATION */
.nav {
  display: flex;
  gap: 12px;

  position: absolute;
  left: 35%;
  transform: translateX(-50%);
}


.nav a {
  text-decoration: none;
  color: rgb(31, 28, 28);
  font-weight: 300;
}


/* RIGHT SIDE */
.right-actions {
  margin-left: auto;

  display: flex;
  align-items: center;
  gap: 20px;
}


/* CONTACT */
.contact-info,
.contact-text {
  display: flex;
  align-items: center;
  gap: 15px;
}


.contact-text {
  display: flex;
  flex-direction: column;
}


.contact-text span {
  font-size: 15px;
}


.contact-text a {
  text-decoration: none;
  color: black;
}


.account-link {
  color: black;
  font-size: 22px;
}


.book-btn {
  padding: 10px 18px;
}


/* HAMBURGER */
.menu-btn {
  display: none;

  background: rgb(113, 113, 216);
  border: none;

  font-size: 28px;
  cursor: pointer;
}

/* Desktop */
.hamburger {
  display: none;
}

/* RESPONSIVE */
.account-btn,
.book-btn{
    display:none;
}
@media (max-width:768px){

  .top-header{
    display:grid;
    grid-template-columns: 1fr auto 1fr;
    align-items:center;

    height:60px;
    padding:0 16px;
  }

  .account-btn{
    display:flex;
    justify-self:start;
    align-items:center;
    justify-content:center;

    width:42px;
    height:42px;

    border:none;
    border-radius:50%;
    background:#1f4ca3;
    color:#fff;
  }

  .social-links{
    justify-self:center;

    display:flex;
    gap:18px;
  }

  .quick-links{
    display:none;
  }

  .book-btn{
    display:block;
    justify-self:end;

    padding:10px 16px;

    border:none;
    border-radius:20px;
    background:#1f4ca3;
    color:#fff;
  }
}
</style>


<script setup>
import { 
  faPhone, 
  faUser, 
  faBars 
} from '@fortawesome/free-solid-svg-icons'
import { ref } from "vue";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

