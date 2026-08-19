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

        <a href="#rooms" class="primary-btn">
          Book Your Stay
        </a>

        <a href="#rooms" class="secondary-btn">
          Explore Rooms
        </a>

      </div>

    </div>

    <!-- Scroll indicator -->
    <a href="#rooms" class="scroll-indicator" aria-label="Scroll to rooms">
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
  min-height: 680px;
  height: calc(100vh - 145px);

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('@/assets/hotel.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  overflow: hidden;
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
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.50)
    );

  z-index: 1;
}


/* ========================================
   CONTENT
======================================== */

.hero-content {
  position: relative;
  z-index: 2;

  width: min(900px, 90%);

  text-align: center;

  color: white;

  margin-top: -20px;
}


/* Small heading */

.eyebrow {
  margin: 0 0 18px;

  font-size: 16px;
  font-weight: 600;

  letter-spacing: 4px;

  text-transform: uppercase;
}


/* Main heading */

.hero-content h1 {
  margin: 0;

  font-size: clamp(42px, 6vw, 76px);

  line-height: 1.08;

  font-weight: 700;

  letter-spacing: -1px;

  text-shadow:
    0 3px 10px rgba(0, 0, 0, 0.35);
}


/* Description */

.hero-description {
  max-width: 680px;

  margin: 25px auto 35px;

  font-size: clamp(17px, 2vw, 21px);

  line-height: 1.7;

  color: rgba(255, 255, 255, 0.95);
}


/* ========================================
   BUTTONS
======================================== */

.hero-buttons {
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 16px;
}


.primary-btn,
.secondary-btn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  min-width: 170px;

  padding: 15px 28px;

  border-radius: 3px;

  font-size: 16px;
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

@media (max-width: 900px) {

  .hero {
    min-height: 600px;

    height: calc(100vh - 120px);
  }

  .hero-content {
    width: 90%;
  }

  .hero-content h1 {
    font-size: clamp(40px, 7vw, 60px);
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 768px) {

  .hero {
    min-height: 600px;

    height: calc(100vh - 80px);

    background-position: center;
  }


  .hero-content {
    width: 90%;

    margin-top: -10px;
  }


  .eyebrow {
    font-size: 12px;

    letter-spacing: 2.5px;

    margin-bottom: 15px;
  }


  .hero-content h1 {
    font-size: 42px;

    line-height: 1.12;
  }


  .hero-description {
    font-size: 16px;

    line-height: 1.6;

    margin: 20px auto 28px;
  }


  .hero-buttons {
    flex-direction: column;

    gap: 12px;
  }


  .primary-btn,
  .secondary-btn {
    width: 200px;

    min-width: 0;

    padding: 13px 20px;
  }


  .scroll-indicator {
    bottom: 18px;
  }

}


/* ========================================
   SMALL PHONES
======================================== */

@media (max-width: 450px) {

  .hero {
    min-height: 560px;
  }


  .hero-content h1 {
    font-size: 36px;
  }


  .hero-description {
    font-size: 15px;
  }


  .eyebrow {
    font-size: 11px;
  }

}

</style>