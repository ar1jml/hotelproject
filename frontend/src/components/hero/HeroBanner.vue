<script setup>
import BookingSearch from "../Rooms/BookingSearch.vue"
</script>


<template>

  <section id="home" class="hero">

    <!-- Background overlay -->
    <div class="overlay"></div>


    <!-- Hero content -->
    <div class="hero-content">

      <p class="eyebrow">
        WELCOME TO SOLJAM HOTEL
      </p>

      <h1>
        Experience Comfort.<br />
        Experience Soljam.
      </h1>

      <p class="hero-description">
        Discover a place where modern comfort, warm hospitality,
        and unforgettable experiences come together.
      </p>


      <div class="hero-buttons">

        <a
          href="#rooms"
          class="primary-btn"
        >
          Book Your Stay
        </a>

        <a
          href="#rooms"
          class="secondary-btn"
        >
          Explore Rooms
        </a>

      </div>

    </div>


    <!-- BOOKING SEARCH -->
    <div class="booking-container">

      <BookingSearch />

    </div>


    <!-- Scroll indicator -->
    <a
      href="#rooms"
      class="scroll-indicator"
      aria-label="Scroll to rooms"
    >
      <span></span>
    </a>

  </section>

</template>


<style scoped>

/* ========================================
   HERO
======================================== */

.hero {
  position: relative;

  width: 100%;

  min-height: 760px;

  height: calc(100vh - 125px);

  box-sizing: border-box;

  display: flex;

  align-items: center;

  justify-content: center;

  background-image: url('@/assets/hotel.jpg');

  background-size: cover;

  background-position: center center;

  background-repeat: no-repeat;

  overflow: visible;
}


/* ========================================
   OVERLAY
======================================== */

.overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.32),
      rgba(0, 0, 0, 0.55)
    );

  z-index: 1;
}


/* ========================================
   HERO CONTENT
======================================== */

.hero-content {
  position: relative;

  z-index: 2;

  width: min(900px, 90%);

  text-align: center;

  color: white;

  margin-top: -100px;
}


/* ========================================
   EYEBROW
======================================== */

.eyebrow {
  margin: 0 0 18px;

  font-size: 15px;

  font-weight: 600;

  letter-spacing: 4px;

  text-transform: uppercase;
}


/* ========================================
   TITLE
======================================== */

.hero-content h1 {
  margin: 0;

  font-size: clamp(44px, 6vw, 76px);

  line-height: 1.08;

  font-weight: 700;

  letter-spacing: -1px;

  text-shadow:
    0 3px 10px rgba(0, 0, 0, 0.35);
}


/* ========================================
   DESCRIPTION
======================================== */

.hero-description {
  max-width: 680px;

  margin: 25px auto 30px;

  font-size: clamp(16px, 2vw, 20px);

  line-height: 1.6;

  color: rgba(255, 255, 255, 0.95);
}


/* ========================================
   HERO BUTTONS
======================================== */

.hero-buttons {
  display: flex;

  justify-content: center;

  align-items: center;

  gap: 15px;
}


.primary-btn,
.secondary-btn {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-width: 165px;

  padding: 14px 25px;

  border-radius: 3px;

  font-size: 15px;

  font-weight: 600;

  text-decoration: none;

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;
}


.primary-btn {
  background: #c49b63;

  color: white;

  border: 2px solid #c49b63;
}


.primary-btn:hover {
  background: #b18752;

  border-color: #b18752;

  transform: translateY(-2px);
}


.secondary-btn {
  background: transparent;

  color: white;

  border: 2px solid white;
}


.secondary-btn:hover {
  background: white;

  color: #222;

  transform: translateY(-2px);
}


/* ========================================
   BOOKING CONTAINER
======================================== */

.booking-container {
  position: absolute;

  z-index: 5;

  left: 50%;

  bottom: -55px;

  transform: translateX(-50%);

  width: min(1180px, calc(100% - 50px));
}


/* ========================================
   SCROLL INDICATOR
======================================== */

.scroll-indicator {
  position: absolute;

  z-index: 3;

  bottom: 25px;

  left: 50%;

  width: 28px;

  height: 45px;

  transform: translateX(-50%);

  border: 2px solid rgba(255, 255, 255, 0.8);

  border-radius: 20px;
}


.scroll-indicator span {
  position: absolute;

  top: 8px;

  left: 50%;

  width: 5px;

  height: 9px;

  background: white;

  border-radius: 5px;

  transform: translateX(-50%);

  animation: scrollDown 1.8s infinite;
}


@keyframes scrollDown {

  0% {
    opacity: 0;

    transform: translate(-50%, 0);
  }

  30% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    opacity: 0;

    transform: translate(-50%, 15px);
  }

}


/* ========================================
   TABLET
======================================== */

@media (max-width: 1000px) {

  .hero {
    min-height: 720px;
  }

  .hero-content {
    margin-top: -100px;
  }

  .booking-container {
    width: calc(100% - 30px);

    bottom: -90px;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 768px) {

  .hero {
    min-height: 720px;

    height: auto;

    padding:
      100px
      0
      150px;
  }


  .hero-content {
    width: 90%;

    margin-top: -80px;
  }


  .eyebrow {
    font-size: 11px;

    letter-spacing: 2.5px;
  }


  .hero-content h1 {
    font-size: 42px;

    line-height: 1.12;
  }


  .hero-description {
    font-size: 16px;

    margin: 20px auto 28px;
  }


  .hero-buttons {
    flex-direction: column;

    gap: 10px;
  }


  .primary-btn,
  .secondary-btn {
    width: 200px;

    min-width: 0;

    padding: 13px 20px;
  }


  .booking-container {
    width: calc(100% - 30px);

    bottom: -120px;
  }


  .scroll-indicator {
    display: none;
  }

}


/* ========================================
   SMALL PHONES
======================================== */

@media (max-width: 450px) {

  .hero {
    min-height: 700px;
  }


  .hero-content h1 {
    font-size: 36px;
  }


  .hero-description {
    font-size: 15px;
  }

}

</style>