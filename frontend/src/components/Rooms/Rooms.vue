<script setup>
import { ref, computed } from 'vue'

/*
|--------------------------------------------------------------------------
| Booking Form State
|--------------------------------------------------------------------------
*/

const checkIn = ref('')
const checkOut = ref('')
const adults = ref(1)
const children = ref(0)

const errorMessage = ref('')
const successMessage = ref('')

/*
|--------------------------------------------------------------------------
| Date Helpers
|--------------------------------------------------------------------------
*/

const formatDate = (date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

/*
|--------------------------------------------------------------------------
| Today's Date
|--------------------------------------------------------------------------
*/

const today = computed(() => {
  return formatDate(new Date())
})

/*
|--------------------------------------------------------------------------
| Maximum Booking Date
|--------------------------------------------------------------------------
|
| User can book from TODAY up to ONE MONTH from today.
|
| Example:
|
| Today:       2026-08-17
| Maximum:     2026-09-17
|
|--------------------------------------------------------------------------
*/

const maxDate = computed(() => {
  const date = new Date()

  date.setMonth(date.getMonth() + 1)

  return formatDate(date)
})

/*
|--------------------------------------------------------------------------
| Minimum Check-out Date
|--------------------------------------------------------------------------
|
| Check-out must be at least one day after check-in.
|--------------------------------------------------------------------------
*/

const minCheckOutDate = computed(() => {
  if (!checkIn.value) {
    return today.value
  }

  const date = new Date(`${checkIn.value}T00:00:00`)

  date.setDate(date.getDate() + 1)

  return formatDate(date)
})

/*
|--------------------------------------------------------------------------
| Check-in Changed
|--------------------------------------------------------------------------
*/

const handleCheckInChange = () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!checkIn.value) {
    checkOut.value = ''
    return
  }

  /*
   * Cannot select a date before today.
   */

  if (checkIn.value < today.value) {
    errorMessage.value =
      'Check-in cannot be before today.'

    checkIn.value = ''
    checkOut.value = ''

    return
  }

  /*
   * Cannot select more than one month ahead.
   */

  if (checkIn.value > maxDate.value) {
    errorMessage.value =
      'Check-in cannot be more than one month from today.'

    checkIn.value = ''
    checkOut.value = ''

    return
  }

  /*
   * If checkout is no longer valid,
   * clear it.
   */

  if (
    checkOut.value &&
    checkOut.value <= checkIn.value
  ) {
    checkOut.value = ''
  }

  /*
   * If checkout is beyond the allowed period,
   * clear it.
   */

  if (
    checkOut.value &&
    checkOut.value > maxDate.value
  ) {
    checkOut.value = ''
  }
}

/*
|--------------------------------------------------------------------------
| Check-out Changed
|--------------------------------------------------------------------------
*/

const handleCheckOutChange = () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!checkOut.value) {
    return
  }

  /*
   * Check-in must be selected first.
   */

  if (!checkIn.value) {
    errorMessage.value =
      'Please select your check-in date first.'

    checkOut.value = ''

    return
  }

  /*
   * Check-out must be AFTER check-in.
   */

  if (checkOut.value <= checkIn.value) {
    errorMessage.value =
      'Check-out must be after check-in.'

    checkOut.value = ''

    return
  }

  /*
   * Check-out cannot be more than
   * one month from today.
   */

  if (checkOut.value > maxDate.value) {
    errorMessage.value =
      'Check-out cannot be more than one month from today.'

    checkOut.value = ''

    return
  }
}

/*
|--------------------------------------------------------------------------
| Search Available Rooms
|--------------------------------------------------------------------------
*/

const searchRooms = () => {
  errorMessage.value = ''
  successMessage.value = ''

  /*
   * Check-in required
   */

  if (!checkIn.value) {
    errorMessage.value =
      'Please select your check-in date.'

    return
  }

  /*
   * Check-out required
   */

  if (!checkOut.value) {
    errorMessage.value =
      'Please select your check-out date.'

    return
  }

  /*
   * Check-in cannot be before today.
   */

  if (checkIn.value < today.value) {
    errorMessage.value =
      'Check-in cannot be before today.'

    return
  }

  /*
   * Check-in cannot be more than one month away.
   */

  if (checkIn.value > maxDate.value) {
    errorMessage.value =
      'Check-in cannot be more than one month from today.'

    return
  }

  /*
   * Check-out must be after check-in.
   */

  if (checkOut.value <= checkIn.value) {
    errorMessage.value =
      'Check-out must be after check-in.'

    return
  }

  /*
   * Check-out cannot be more than one month away.
   */

  if (checkOut.value > maxDate.value) {
    errorMessage.value =
      'Check-out cannot be more than one month from today.'

    return
  }

  /*
   * Everything is valid.
   *
   * Later we will send this data to FastAPI.
   */

  const bookingData = {
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    adults: adults.value,
    children: children.value,
  }

  console.log('Booking search:', bookingData)

  successMessage.value =
    'Searching for available rooms...'
}
</script>

<template>
  <section class="rooms-section">
    


    <div id="rooms" class="booking-container">

      <!-- Header -->

      <div class="booking-header">

    
        <h2>
          Book Now
        </h2>

        <p class="booking-description">
          Find the perfect room for your stay.
        </p>

      </div>


      <!--
      ======================================================================
      BOOKING FORM
      ======================================================================
      -->

      <form
        class="booking-form"
        @submit.prevent="searchRooms"
      >

        <div class="booking-grid">

          <!--
          ==================================================================
          CHECK-IN
          ==================================================================
          -->

          <div class="form-group">

            <label for="checkIn">
              Check-in
              <span>*</span>
            </label>

            <input
              id="checkIn"
              v-model="checkIn"
              type="date"
              :min="today"
              :max="maxDate"
              @change="handleCheckInChange"
              required
            />

            <small>
              From today up to one month ahead
            </small>

          </div>


          <!--
          ==================================================================
          CHECK-OUT
          ==================================================================
          -->

          <div class="form-group">

            <label for="checkOut">
              Check-out
              <span>*</span>
            </label>

            <input
              id="checkOut"
              v-model="checkOut"
              type="date"
              :min="minCheckOutDate"
              :max="maxDate"
              @change="handleCheckOutChange"
              required
            />

            <small>
              Must be after check-in
            </small>

          </div>


          <!--
          ==================================================================
          ADULTS
          ==================================================================
          -->

          <div class="form-group">

            <label for="adults">
              Adults
            </label>

            <select
              id="adults"
              v-model.number="adults"
            >

              <option
                v-for="number in 10"
                :key="number"
                :value="number"
              >
                {{ number }}
              </option>

            </select>

          </div>


          <!--
          ==================================================================
          CHILDREN
          ==================================================================
          -->

          <div class="form-group">

            <label for="children">
              Children
            </label>

            <select
              id="children"
              v-model.number="children"
            >

              <option
                v-for="number in 11"
                :key="number - 1"
                :value="number - 1"
              >
                {{ number - 1 }}
              </option>

            </select>

          </div>

        </div>


        <!--
        ====================================================================
        ERROR MESSAGE
        ====================================================================
        -->

        <div
          v-if="errorMessage"
          class="message error-message"
        >
          {{ errorMessage }}
        </div>


        <!--
        ====================================================================
        SUCCESS MESSAGE
        ====================================================================
        -->

        <div
          v-if="successMessage"
          class="message success-message"
        >
          {{ successMessage }}
        </div>


        <!--
        ====================================================================
        CHECK AVAILABILITY
        ====================================================================
        -->

        <button
          type="submit"
          class="book-button"
        >
          Check Availability
        </button>

      </form>

    </div>

  </section>
</template>


<style scoped>

/*
|--------------------------------------------------------------------------
| Main Rooms Section
|--------------------------------------------------------------------------
*/

.rooms-section {
  width: 100%;
  padding-bottom: 70px;
  background: #ffffff;
}


/*
|--------------------------------------------------------------------------
| Contact Bar
|--------------------------------------------------------------------------
*/

.room-contact-bar {
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 45px;

  padding: 18px 20px;

  background: #f7f7f7;

  border-bottom: 1px solid #e5e5e5;
}

.room-contact-bar a {
  color: #333333;

  text-decoration: none;

  font-size: 14px;

  transition: color 0.2s ease;
}

.room-contact-bar a:hover {
  color: #b08d57;
}


/*
|--------------------------------------------------------------------------
| Booking Container
|--------------------------------------------------------------------------
*/

.booking-container {
  width: calc(100% - 30px);

  max-width: 1100px;

  margin: 50px auto 0;

  padding: 45px;

  background: #fafafa;

  border-radius: 8px;

  box-shadow:
    0 5px 25px rgba(0, 0, 0, 0.08);

  box-sizing: border-box;
}


/*
|--------------------------------------------------------------------------
| Booking Header
|--------------------------------------------------------------------------
*/

.booking-header {
  margin-bottom: 35px;

  text-align: center;
}

.booking-subtitle {
  margin: 0 0 8px;

  color: #b08d57;

  font-size: 13px;

  font-weight: 700;

  letter-spacing: 2px;
}

.booking-header h2 {
  margin: 0;

  color: #222222;

  font-size: 34px;

  font-weight: 700;

  text-transform: uppercase;

  letter-spacing: 1px;
}

.booking-description {
  margin-top: 10px;

  color: #777777;

  font-size: 15px;
}


/*
|--------------------------------------------------------------------------
| Booking Grid
|--------------------------------------------------------------------------
*/

.booking-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 20px;
}


/*
|--------------------------------------------------------------------------
| Form Group
|--------------------------------------------------------------------------
*/

.form-group {
  display: flex;

  flex-direction: column;
}

.form-group label {
  margin-bottom: 9px;

  color: #333333;

  font-size: 14px;

  font-weight: 600;
}

.form-group label span {
  color: #d33;
}


/*
|--------------------------------------------------------------------------
| Inputs & Select
|--------------------------------------------------------------------------
*/

.form-group input,
.form-group select {
  width: 100%;

  min-height: 48px;

  padding: 12px 14px;

  border: 1px solid #dddddd;

  border-radius: 4px;

  background: #ffffff;

  color: #333333;

  font-size: 15px;

  box-sizing: border-box;

  cursor: pointer;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;

  border-color: #b08d57;

  box-shadow:
    0 0 0 2px rgba(176, 141, 87, 0.1);
}

.form-group small {
  margin-top: 6px;

  color: #888888;

  font-size: 11px;
}


/*
|--------------------------------------------------------------------------
| Messages
|--------------------------------------------------------------------------
*/

.message {
  margin-top: 20px;

  padding: 12px 15px;

  border-radius: 4px;

  text-align: center;

  font-size: 14px;
}

.error-message {
  background: #fff1f1;

  color: #c62828;

  border: 1px solid #f0b7b7;
}

.success-message {
  background: #f0faf3;

  color: #267a42;

  border: 1px solid #b7dfc3;
}


/*
|--------------------------------------------------------------------------
| Book Button
|--------------------------------------------------------------------------
*/

.book-button {
  display: block;

  margin: 30px auto 0;

  padding: 15px 38px;

  border: none;

  border-radius: 4px;

  background: #b08d57;

  color: #ffffff;

  font-size: 14px;

  font-weight: 700;

  letter-spacing: 0.5px;

  text-transform: uppercase;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.book-button:hover {
  background: #967445;

  transform: translateY(-1px);
}

.book-button:active {
  transform: translateY(0);
}


/*
|--------------------------------------------------------------------------
| Tablet
|--------------------------------------------------------------------------
*/

@media (max-width: 900px) {

  .booking-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

}


/*
|--------------------------------------------------------------------------
| Mobile
|--------------------------------------------------------------------------
*/

@media (max-width: 600px) {

  .room-contact-bar {
    flex-direction: column;

    gap: 12px;

    text-align: center;
  }

  .booking-container {
    margin-top: 30px;

    padding: 30px 20px;
  }

  .booking-grid {
    grid-template-columns: 1fr;

    gap: 18px;
  }

  .booking-header h2 {
    font-size: 27px;
  }

  .booking-description {
    font-size: 14px;
  }

  .book-button {
    width: 100%;
  }

}
</style>