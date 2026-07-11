
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

/* HEADER */
.header {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100px;

  display: flex;
  align-items: center;

  padding: 0 35px;
  box-sizing: border-box;

  z-index: 1000;
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
  font-size: 13px;
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

@media (max-width: 768px) {

/* toggle menu */
.nav.mobile-open {
  display: flex;

  position: absolute;

  top: 80px;
  right: 15px;
  left: auto;

  width: 220px;

  flex-direction: column;
  align-items: flex-start;

  gap: 12px;

  padding: 18px;

  background: white;

  border-radius: 10px;

  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
}


.nav.mobile-open a {
  font-size: 15px;
  font-weight: 600;
  width: 100%;
}

  .header {
    padding: 0 15px;
  }


  /* Hide desktop menu */
  .nav {
    display: none;
  }


  /* Hamburger CENTER */
  .hamburger {
    display: block;

    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    background: transparent;
    border: none;

    font-size: 28px;
    color: #0066cc;

    cursor: pointer;
  }


  /* Right side */
  .right-actions {
    margin-left: auto;

    display: flex;
    align-items: center;
    gap: 8px;
  }


  /* Phone area */
  .contact-info {
    display: flex;
    align-items: center;
    gap: 8px;
  }


  .contact-text {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
  }


  .contact-text span {
    font-size: 13px;
  }


  .contact-text a {
    font-size: 13px;
    color: black;
  }


  /* Hide user */
  .account-link {
    display: none;
  }


  /* Hide booking */
  .book-btn {
    display: none;
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

