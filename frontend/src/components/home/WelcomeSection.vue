<template>
  <section class="welcome-section">

    <div class="welcome-container">

      <!-- IMAGE -->
      <div class="welcome-image">
        <img
          src="@/assets/hotel.jpg"
          alt="Soljam Hotel"
        />
      </div>


      <!-- CONTENT -->
      <div class="welcome-content">

        <span class="eyebrow">
          WELCOME TO SOLJAM
        </span>

        <h2>
          Experience Comfort,
          <br />
          Experience Soljam
        </h2>

        <p>
          Welcome to Soljam Hotel, where comfort, quality,
          and warm hospitality come together. Our hotel is
          designed to give every guest a relaxing and memorable
          stay.
        </p>

        <p>
          From comfortable rooms to attentive service, we are
          committed to making your stay enjoyable from the
          moment you arrive.
        </p>

        <button class="discover-btn">
          Discover More
        </button>

      </div>

    </div>

  </section>
</template>


<style scoped>

.welcome-section {
  width: 100%;

  box-sizing: border-box;

  padding: 90px 30px;

  background: #ffffff;
}


.welcome-container {
  width: min(1200px, 100%);

  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 70px;

  align-items: center;
}


/* ========================================
   IMAGE
======================================== */

.welcome-image {
  width: 100%;

  height: 500px;

  overflow: hidden;
}


.welcome-image img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition: transform 0.5s ease;
}


.welcome-image:hover img {
  transform: scale(1.03);
}


/* ========================================
   CONTENT
======================================== */

.welcome-content {
  max-width: 550px;
}


.eyebrow {
  display: block;

  margin-bottom: 15px;

  color: #c49b63;

  font-size: 13px;

  font-weight: 700;

  letter-spacing: 3px;
}


.welcome-content h2 {
  margin: 0 0 25px;

  color: #222;

  font-size: 42px;

  line-height: 1.2;

  font-weight: 700;
}


.welcome-content p {
  margin: 0 0 18px;

  color: #666;

  font-size: 16px;

  line-height: 1.8;
}


/* ========================================
   BUTTON
======================================== */

.discover-btn {
  margin-top: 12px;

  padding: 14px 30px;

  border: none;

  border-radius: 2px;

  background: #1f4ca3;

  color: white;

  font-size: 14px;

  font-weight: 600;

  text-transform: uppercase;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}


.discover-btn:hover {
  background: #173d84;

  transform: translateY(-2px);
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {

  .welcome-container {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .welcome-image {
    height: 420px;
  }

  .welcome-content {
    max-width: 700px;

    margin: 0 auto;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .welcome-section {
    padding: 60px 20px;
  }

  .welcome-container {
    gap: 35px;
  }

  .welcome-image {
    height: 300px;
  }

  .welcome-content h2 {
    font-size: 32px;
  }

  .welcome-content p {
    font-size: 15px;

    line-height: 1.7;
  }

}

</style>