<template>
  <section class="rooms-section">

    <div class="container">

      <div class="section-header">
        <h2>Our Rooms</h2>

        <p>
          Experience comfort and luxury with our beautifully designed rooms.
        </p>
      </div>


      <div class="rooms-grid">

        <!-- Temporary room cards -->
        <div class="room-card">

          <img 
            src="@/assets/room.jpg" 
            alt="Luxury Room"
          />

          <div class="room-content">

            <h3>
              Luxury Room
            </h3>

            <p>
              A comfortable room with modern facilities and beautiful views.
            </p>

            <button>
              View Details
            </button>

          </div>

        </div>


        <div class="room-card">

          <img 
            src="@/assets/room.jpg" 
            alt="Deluxe Room"
          />

          <div class="room-content">

            <h3>
              Deluxe Room
            </h3>

            <p>
              Spacious room designed for a relaxing stay.
            </p>

            <button>
              View Details
            </button>

          </div>

        </div>


      </div>

    </div>

  </section>
</template>



<style scoped>

.rooms-section {

  padding: 80px 20px;

  background: #ffffff;

}


.container {

  max-width: 1200px;

  margin: auto;

}



.section-header {

  text-align: center;

  margin-bottom: 50px;

}


.section-header h2 {

  font-size: 40px;

  margin-bottom: 15px;

}



.section-header p {

  color: #666;

  font-size: 18px;

}



.rooms-grid {

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 30px;

}



.room-card {

  background: white;

  border-radius: 12px;

  overflow: hidden;

  box-shadow: 0 5px 20px rgba(0,0,0,0.1);

}



.room-card img {

  width: 100%;

  height: 250px;

  object-fit: cover;

}



.room-content {

  padding: 25px;

}



.room-content h3 {

  font-size: 25px;

  margin-bottom: 10px;

}



.room-content p {

  color: #666;

  margin-bottom: 20px;

}



button {

  background: #c49b63;

  color: white;

  border: none;

  padding: 12px 25px;

  border-radius: 5px;

  cursor: pointer;

}



@media(max-width:768px){

  .rooms-grid {

    grid-template-columns: 1fr;

  }


  .section-header h2 {

    font-size: 32px;

  }

}

</style>