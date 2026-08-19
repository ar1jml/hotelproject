<script setup>
import { computed, ref } from "vue"

const checkIn = ref("")
const checkOut = ref("")
const adults = ref(1)
const children = ref(0)

/*
 * Prevent selecting dates in the past.
 */
const today = computed(() => {
  const date = new Date()

  return date.toISOString().split("T")[0]
})

/*
 * Maximum booking date = one month from today.
 */
const maxDate = computed(() => {
  const date = new Date()

  date.setMonth(date.getMonth() + 1)

  return date.toISOString().split("T")[0]
})

const searchRooms = () => {
  console.log({
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    adults: adults.value,
    children: children.value
  })
}
</script>


<template>

  <section class="booking-wrapper">

    <div class="booking-header">

      <p class="booking-eyebrow">
        FIND YOUR PERFECT STAY
      </p>

      <h2>
        Book Your Stay
      </h2>

      <p class="booking-description">
        Choose your dates and number of guests to find the perfect room.
      </p>

    </div>


    <div class="booking-box">

      <!-- CHECK IN -->

      <div class="field">

        <label for="check-in">
          Check-in
        </label>

        <input
          id="check-in"
          type="date"
          v-model="checkIn"
          :min="today"
          :max="maxDate"
        />

      </div>


      <!-- CHECK OUT -->

      <div class="field">

        <label for="check-out">
          Check-out
        </label>

        <input
          id="check-out"
          type="date"
          v-model="checkOut"
          :min="checkIn || today"
          :max="maxDate"
        />

      </div>


      <!-- ADULTS -->

      <div class="field">

        <label for="adults">
          Adults
        </label>

        <select
          id="adults"
          v-model="adults"
        >

          <option
            v-for="i in 10"
            :key="i"
            :value="i"
          >
            {{ i }}
          </option>

        </select>

      </div>


      <!-- CHILDREN -->

      <div class="field">

        <label for="children">
          Children
        </label>

        <select
          id="children"
          v-model="children"
        >

          <option
            v-for="i in 6"
            :key="i"
            :value="i - 1"
          >
            {{ i - 1 }}
          </option>

        </select>

      </div>


      <!-- SEARCH -->

      <button
        class="search-btn"
        @click="searchRooms"
      >
        Check Availability
      </button>

    </div>

  </section>

</template>


<style scoped>

/* ========================================
   BOOKING WRAPPER
======================================== */

.booking-wrapper {
  position: relative;

  width: 100%;

  box-sizing: border-box;

  padding: 65px 20px 70px;

  background: #f7f7f7;
}


/* ========================================
   HEADER
======================================== */

.booking-header {
  text-align: center;

  max-width: 700px;

  margin: 0 auto 30px;
}

.booking-eyebrow {
  margin: 0 0 8px;

  color: #c49b63;

  font-size: 13px;

  font-weight: 700;

  letter-spacing: 3px;

  text-transform: uppercase;
}

.booking-header h2 {
  margin: 0;

  color: #222;

  font-size: 38px;

  line-height: 1.2;

  font-weight: 700;

  text-transform: uppercase;
}

.booking-description {
  margin: 12px 0 0;

  color: #666;

  font-size: 16px;

  line-height: 1.6;
}


/* ========================================
   BOOKING BOX
======================================== */

.booking-box {
  width: min(1200px, 100%);

  margin: 0 auto;

  padding: 28px;

  box-sizing: border-box;

  display: grid;

  grid-template-columns:
    1fr
    1fr
    0.7fr
    0.7fr
    auto;

  gap: 18px;

  align-items: end;

  background: white;

  border-radius: 6px;

  box-shadow:
    0 10px 35px rgba(0, 0, 0, 0.10);
}


/* ========================================
   FIELD
======================================== */

.field {
  min-width: 0;
}

.field label {
  display: block;

  margin-bottom: 8px;

  color: #333;

  font-size: 14px;

  font-weight: 600;

  text-align: left;
}


/* ========================================
   INPUTS
======================================== */

.field input,
.field select {
  width: 100%;

  height: 54px;

  box-sizing: border-box;

  padding: 0 14px;

  border: 1px solid #ddd;

  border-radius: 3px;

  background: white;

  color: #333;

  font-size: 15px;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.field input:focus,
.field select:focus {
  border-color: #1f4ca3;

  box-shadow:
    0 0 0 3px rgba(31, 76, 163, 0.10);
}


/* ========================================
   SEARCH BUTTON
======================================== */

.search-btn {
  height: 54px;

  padding: 0 28px;

  border: none;

  border-radius: 3px;

  background: #1f4ca3;

  color: white;

  font-size: 14px;

  font-weight: 700;

  text-transform: uppercase;

  white-space: nowrap;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.search-btn:hover {
  background: #173d84;

  transform: translateY(-1px);
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 1000px) {

  .booking-box {
    grid-template-columns: 1fr 1fr;
  }

  .search-btn {
    width: 100%;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .booking-wrapper {
    padding: 45px 15px 50px;
  }

  .booking-header {
    margin-bottom: 25px;
  }

  .booking-header h2 {
    font-size: 30px;
  }

  .booking-description {
    font-size: 14px;
  }

  .booking-box {
    grid-template-columns: 1fr;

    padding: 20px;

    gap: 16px;

    border-radius: 5px;
  }

  .field input,
  .field select,
  .search-btn {
    height: 52px;
  }

}

</style>