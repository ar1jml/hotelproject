<script setup>
import { ref } from "vue";

import {
  faBars,
  faXmark,
  faUser
} from "@fortawesome/free-solid-svg-icons";

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <header class="top-header">

    <!-- LOGO -->
    <div class="logo-container">
      <img
        src="@/assets/logo.png"
        alt="Soljam Hotel Logo"
        class="logo"
      />
    </div>


    <!-- NAVIGATION -->
    <nav
      class="nav"
      :class="{ open: menuOpen }"
    >

      <a
        href="/#home"
        @click="menuOpen = false"
      >
        Home
      </a>

      <a
        href="/#rooms"
        @click="menuOpen = false"
      >
        Rooms
      </a>

      <a
        href="/#restaurant"
        @click="menuOpen = false"
      >
        Restaurants
      </a>

      <a
        href="/#blogs"
        @click="menuOpen = false"
      >
        Blogs
      </a>

      <a
        href="/#gallery"
        @click="menuOpen = false"
      >
        Our Gallery
      </a>

      <a
        href="/#contact"
        @click="menuOpen = false"
      >
        Contact Us
      </a>

    </nav>


    <!-- MOBILE MENU -->
    <button
      class="hamburger"
      @click="toggleMenu"
      aria-label="Toggle navigation"
    >
      <font-awesome-icon
        :icon="menuOpen ? faXmark : faBars"
      />
    </button>


    <!-- RIGHT SIDE -->
    <div class="contact">

      <div class="contact-text">

        <span>
          Have Question?
        </span>

        <a href="tel:+251909555556">
          +(251) 966-90-1919
        </a>

      </div>


      <!-- ACCOUNT ICON -->
      <a
        href="/#account"
        class="account-link"
        title="My Account"
        aria-label="My Account"
      >
        <font-awesome-icon :icon="faUser" />
      </a>


      <!-- BOOK YOUR STAY -->
      <a
        href="/#book-now"
        class="book-stay-btn"
      >
        Book Your Stay
      </a>

    </div>

  </header>
</template>


<style scoped>

.top-header {
  width: 100%;
  min-height: 100px;

  box-sizing: border-box;

  display: grid;

  grid-template-columns:
    90px
    minmax(0, 1fr)
    auto;

  align-items: center;

  padding: 0 24px;

  background: rgb(215, 207, 207);

  position: relative;
}


/* LOGO */

.logo-container {
  display: flex;

  align-items: center;
  justify-content: flex-start;
}

.logo {
  width: 70px;
  height: 70px;

  border-radius: 50%;

  object-fit: cover;

  display: block;
}


/* NAVIGATION */

.nav {
  min-width: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: clamp(12px, 1.4vw, 24px);

  padding: 0 15px;
}

.nav a {
  text-decoration: none;

  color: #222;

  font-size: clamp(16px, 1.25vw, 19px);

  font-weight: 500;

  white-space: nowrap;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.nav a:hover {
  color: #1f4ca3;

  transform: translateY(-1px);
}


/* CONTACT */

.contact {
  display: flex;

  align-items: center;

  justify-content: flex-end;

  gap: 18px;

  min-width: 0;
}

.contact-text {
  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;

  white-space: nowrap;
}

.contact-text span {
  font-size: 16px;

  line-height: 1.25;
}

.contact-text a {
  text-decoration: none;

  color: #000;

  font-size: 18px;

  line-height: 1.3;
}


/* ACCOUNT ICON */

.account-link {
  width: 42px;
  height: 42px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  color: #222;

  text-decoration: none;

  font-size: 20px;

  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.account-link:hover {
  color: white;

  background: #1f4ca3;

  transform: translateY(-1px);
}


/* BOOK YOUR STAY */

.book-stay-btn {
  border: none;

  background: #1f4ca3;

  color: white;

  text-decoration: none;

  font-size: 17px;

  font-weight: 500;

  padding: 14px 25px;

  border-radius: 30px;

  white-space: nowrap;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.book-stay-btn:hover {
  background: #173d84;

  transform: translateY(-1px);
}


/* HAMBURGER */

.hamburger {
  display: none;

  border: none;

  background: transparent;

  font-size: 28px;

  color: #1f4ca3;

  cursor: pointer;
}


/* LARGE TABLET */

@media (max-width: 1250px) {

  .top-header {
    grid-template-columns:
      75px
      minmax(0, 1fr)
      auto;

    padding: 0 15px;
  }

  .logo {
    width: 60px;
    height: 60px;
  }

  .nav {
    gap: 12px;

    padding: 0 8px;
  }

  .nav a {
    font-size: 15px;
  }

  .contact {
    gap: 12px;
  }

  .contact-text span {
    font-size: 12px;
  }

  .contact-text a {
    font-size: 14px;
  }

  .book-stay-btn {
    font-size: 14px;

    padding: 12px 18px;
  }

  .account-link {
    width: 38px;
    height: 38px;

    font-size: 18px;
  }
}


/* TABLET */

@media (max-width: 1000px) {

  .top-header {
    grid-template-columns:
      70px
      minmax(0, 1fr)
      auto;
  }

  .nav {
    gap: 9px;
  }

  .nav a {
    font-size: 14px;
  }

  .contact-text {
    display: none;
  }

  .book-stay-btn {
    font-size: 14px;

    padding: 11px 17px;
  }
}


/* MOBILE */

@media (max-width: 768px) {

  .top-header {
    min-height: 80px;

    grid-template-columns:
      1fr
      auto
      1fr;

    padding: 0 15px;
  }


  /* LOGO */

  .logo-container {
    justify-self: start;
  }

  .logo {
    width: 58px;
    height: 58px;
  }


  /* HAMBURGER */

  .hamburger {
    display: block;

    justify-self: center;
  }


  /* CONTACT */

  .contact {
    justify-self: end;
    gap: 8px;
  }

  .contact-text {
    display: none;
  }


  /* ACCOUNT */

  .account-link {
    width: 38px;
    height: 38px;

    font-size: 18px;
  }


  /* BOOK BUTTON */

  .book-stay-btn {
    display: none;
  }


  /* MOBILE NAVIGATION */

  .nav {
    display: none;

    position: absolute;

    top: 80px;

    left: 0;
    right: 0;

    width: 100%;

    box-sizing: border-box;

    margin: 0;

    padding: 20px;

    background: white;

    flex-direction: column;

    align-items: flex-start;

    justify-content: flex-start;

    gap: 0;

    z-index: 9999;

    box-shadow:
      0 5px 15px rgba(0, 0, 0, 0.15);
  }

  .nav.open {
    display: flex;
  }

  .nav a {
    width: 100%;

    box-sizing: border-box;

    padding: 13px 5px;

    font-size: 18px;

    border-bottom: 1px solid #eee;

    white-space: normal;
  }
}


/* SMALL PHONES */

@media (max-width: 450px) {

  .top-header {
    padding: 0 10px;
  }

  .logo {
    width: 52px;
    height: 52px;
  }

  .hamburger {
    font-size: 25px;
  }

  .account-link {
    width: 34px;
    height: 34px;

    font-size: 17px;
  }

}

</style>