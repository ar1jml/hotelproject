<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const bookings = ref([
  {
    id: 1042,
    guest: 'John Smith',
    email: 'john@example.com',
    room: 'Deluxe Room',
    guests: 2,
    checkIn: '17 Aug 2026',
    checkOut: '20 Aug 2026',
    status: 'Confirmed'
  },
  {
    id: 1043,
    guest: 'Michael Anderson',
    email: 'michael@example.com',
    room: 'Suite',
    guests: 3,
    checkIn: '17 Aug 2026',
    checkOut: '21 Aug 2026',
    status: 'Confirmed'
  },
  {
    id: 1044,
    guest: 'Emma Wilson',
    email: 'emma@example.com',
    room: 'Family Room',
    guests: 4,
    checkIn: '17 Aug 2026',
    checkOut: '22 Aug 2026',
    status: 'Confirmed'
  }
])

const filteredBookings = computed(() => {
  const value = search.value.toLowerCase()

  return bookings.value.filter(booking =>
    booking.guest.toLowerCase().includes(value) ||
    booking.email.toLowerCase().includes(value) ||
    booking.id.toString().includes(value)
  )
})

const checkIn = (booking) => {
  booking.status = 'Checked In'
}
</script>

<template>
  <div class="page">

    <div class="page-header">
      <div>
        <h1>Check-ins</h1>
        <p>Manage guests arriving at the hotel today.</p>
      </div>
    </div>

    <!-- Search -->
    <div class="search-box">
      <input
        v-model="search"
        type="text"
        placeholder="Search guest name, email or booking ID..."
      />
    </div>

    <!-- Bookings -->
    <div class="table-card">

      <div class="table-header">
        <h2>Today's Arrivals</h2>
        <span>{{ filteredBookings.length }} arrivals</span>
      </div>

      <div class="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>Booking</th>
              <th>Guest</th>
              <th>Room</th>
              <th>Guests</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="booking in filteredBookings"
              :key="booking.id"
            >

              <td>
                #{{ booking.id }}
              </td>

              <td>
                <strong>{{ booking.guest }}</strong>
                <small>{{ booking.email }}</small>
              </td>

              <td>
                {{ booking.room }}
              </td>

              <td>
                {{ booking.guests }}
              </td>

              <td>
                {{ booking.checkIn }}
              </td>

              <td>
                {{ booking.checkOut }}
              </td>

              <td>
                <span
                  class="status"
                  :class="booking.status.toLowerCase().replace(' ', '-')"
                >
                  {{ booking.status }}
                </span>
              </td>

              <td>

                <button
                  v-if="booking.status === 'Confirmed'"
                  class="check-in-btn"
                  @click="checkIn(booking)"
                >
                  Check In
                </button>

                <span
                  v-else
                  class="completed"
                >
                  Completed
                </span>

              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>
</template>

<style scoped>

.page {
  width: 100%;
}

.page-header {
  margin-bottom: 25px;
}

.page-header h1 {
  margin: 0 0 6px;
  font-size: 28px;
}

.page-header p {
  margin: 0;
  color: #6b7280;
}

/* Search */

.search-box {
  margin-bottom: 20px;
}

.search-box input {
  width: 100%;
  max-width: 450px;
  padding: 12px 15px;
  border: 1px solid #d1d5db;
  border-radius: 7px;
  outline: none;
  box-sizing: border-box;
}

.search-box input:focus {
  border-color: #2563eb;
}

/* Table */

.table-card {
  background: white;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.table-header h2 {
  margin: 0;
  font-size: 18px;
}

.table-header span {
  color: #6b7280;
  font-size: 14px;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  padding: 14px 18px;
  text-align: left;
  font-size: 12px;
  color: #6b7280;
  background: #f9fafb;
  text-transform: uppercase;
}

td {
  padding: 17px 18px;
  border-top: 1px solid #f1f5f9;
  font-size: 14px;
}

td strong {
  display: block;
}

td small {
  color: #6b7280;
  font-size: 12px;
}

/* Status */

.status {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
}

.confirmed {
  background: #fef3c7;
  color: #a16207;
}

.checked-in {
  background: #dcfce7;
  color: #15803d;
}

/* Button */

.check-in-btn {
  padding: 8px 13px;
  border: none;
  border-radius: 6px;
  background: #16a34a;
  color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
}

.check-in-btn:hover {
  background: #15803d;
}

.completed {
  color: #16a34a;
  font-size: 12px;
  font-weight: 600;
}

</style>