<template>
  <section class="hero">
    
    <!-- Overlay -->
    <div class="overlay"></div>

    <!-- Content -->
    <div class="hero-content">
      <h1>
        Welcome to Soljam Hotel
      </h1>

      <p>
        Experience luxury, comfort, and unforgettable hospitality.
      </p>

      <div class="hero-buttons">
        <button class="primary-btn">
          Book Your Stay
        </button>

        <button class="secondary-btn">
          Explore Rooms
        </button>
      </div>
    </div>

  </section>
</template>


<style scoped>

.hero {
  height: 90vh;
  width: 100%;

  background-image: url('@/assets/hotel.jpg');
  background-size: cover;
  background-position: center;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

}


/* Dark layer over image */
.overlay {
  position: absolute;

  inset: 0;

  background: rgba(0,0,0,0.45);
}


/* Text area */
.hero-content {

  position: relative;

  z-index: 1;

  text-align: center;

  color: white;

  max-width: 800px;

}


.hero-content h1 {

  font-size: 55px;

  font-weight: 700;

  margin-bottom: 20px;

}


.hero-content p {

  font-size: 22px;

  margin-bottom: 35px;

}



/* Buttons */

.hero-buttons {

  display: flex;

  gap: 20px;

  justify-content: center;

}


.primary-btn,
.secondary-btn {

  padding: 14px 35px;

  border-radius: 5px;

  font-size: 16px;

  cursor: pointer;

}


.primary-btn {

  background: #c49b63;

  color:white;

  border:none;

}


.secondary-btn {

  background: transparent;

  border:2px solid white;

  color:white;

}



/* Mobile */

@media(max-width:768px){

.hero {

 height:80vh;

}


.hero-content h1{

 font-size:35px;

}


.hero-content p{

 font-size:18px;

}


.hero-buttons{

 flex-direction:column;

 align-items:center;

}

}

</style>