<template>
  <div class="booking-form">

    <h2>Complete Your Reservation</h2>

    <form @submit.prevent="submitBooking">

      <div class="form-group">
        <label for="checkIn">Check-in</label>

        <input
          id="checkIn"
          v-model="form.checkIn"
          type="date"
          :min="minDate"
          required
        />
      </div>


      <div class="form-group">
        <label for="checkOut">Check-out</label>

        <input
          id="checkOut"
          v-model="form.checkOut"
          type="date"
          :min="form.checkIn || minDate"
          required
        />
      </div>


      <div class="form-group">
        <label for="guests">Guests</label>

        <input
          id="guests"
          v-model.number="form.guests"
          type="number"
          min="1"
          max="10"
          required
        />
      </div>


      <button type="submit">
        Book Now
      </button>

    </form>

  </div>
</template>


<script setup>

import { reactive, computed } from "vue"


const form = reactive({

  checkIn: "",

  checkOut: "",

  guests: 1

})


const minDate = computed(() => {

  const today = new Date()

  return today.toISOString().split("T")[0]

})


function submitBooking() {

  console.log("Booking submitted:", form)

}

</script>


<style scoped>

.booking-form {

  max-width: 700px;

  margin: 40px auto;

  padding: 30px;

  background: white;

  border-radius: 10px;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

}


h2 {

  margin-bottom: 25px;

}


.form-group {

  margin-bottom: 20px;

}


label {

  display: block;

  margin-bottom: 8px;

  font-weight: 600;

}


input {

  width: 100%;

  padding: 12px;

  border: 1px solid #ddd;

  border-radius: 6px;

  box-sizing: border-box;

}


button {

  width: 100%;

  padding: 13px;

  border: none;

  border-radius: 6px;

  background: #222;

  color: white;

  font-size: 16px;

  cursor: pointer;

}


button:hover {

  opacity: 0.9;

}

</style>