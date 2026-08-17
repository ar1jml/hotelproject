<script setup>
import { computed, ref } from 'vue'

const search = ref('')

const bookings = ref([
  {
    id: 1042,
    guest: 'John Smith',
    room: 'Deluxe Room',
    guests: 2,
    checkIn: '17 Aug 2026',
    checkOut: '20 Aug 2026',
    amount: '$360.00',
    status: 'Confirmed'
  },
  {
    id: 1043,
    guest: 'Michael Anderson',
    room: 'Suite',
    guests: 3,
    checkIn: '17 Aug 2026',
    checkOut: '21 Aug 2026',
    amount: '$500.00',
    status: 'Confirmed'
  },
  {
    id: 1044,
    guest: 'Emma Wilson',
    room: 'Family Room',
    guests: 4,
    checkIn: '18 Aug 2026',
    checkOut: '22 Aug 2026',
    amount: '$640.00',
    status: 'Pending'
  }
])

const filteredBookings = computed(() => {
  const value = search.value.toLowerCase()

  return bookings.value.filter(booking =>
    booking.guest.toLowerCase().includes(value) ||
    booking.room.toLowerCase().includes(value) ||
    booking.id.toString().includes(value)
  )
})

const cancelBooking = (booking) => {
  booking.status = 'Cancelled'
}
</script>

<template>
  <div class="page">

    <!-- Header -->
    <div class="page-header">

      <div>
        <h1>Bookings</h1>
        <p>Manage guest reservations and booking status.</p>
      </div>

      <button class="new-booking">
        + New Booking
      </button>

    </div>

    <!-- Search -->
    <div class="search-box">

      <input
        v-model="search"
        type="text"
        placeholder="Search guest, room or booking ID..."
      />

    </div>

    <!-- Table -->
    <div class="table-card">

      <div class="table-header">

        <div>
          <h2>Reservations</h2>
          <p>{{ filteredBookings.length }} bookings</p>
        </div>

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
              <th>Amount</th>
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
                <strong>#{{ booking.id }}</strong>
              </td>

              <td>
                {{ booking.guest }}
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
                <strong>{{ booking.amount }}</strong>
              </td>

              <td>

                <span
                  class="status"
                  :class="booking.status.toLowerCase()"
                >
                  {{ booking.status }}
                </span>

              </td>

              <td>

                <button
                  v-if="booking.status !== 'Cancelled'"
                  class="cancel-btn"
                  @click="cancelBooking(booking)"
                >
                  Cancel
                </button>

                <span
                  v-else
                  class="cancelled"
                >
                  Cancelled
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

/* Header */

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.new-booking {
  border: none;
  background: #111827;
  color: white;
  padding: 11px 18px;
  border-radius: 7px;
  font-weight: 600;
  cursor: pointer;
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
  box-sizing: border-box;
  outline: none;
}

.search-box input:focus {
  border-color: #2563eb;
}

/* Table */

.table-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}

.table-header {
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.table-header h2 {
  margin: 0 0 5px;
  font-size: 18px;
}

.table-header p {
  margin: 0;
  color: #6b7280;
  font-size: 13px;
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
  background: #f9fafb;
  color: #6b7280;
  font-size: 12px;
  white-space: nowrap;
}

td {
  padding: 17px 18px;
  border-top: 1px solid #f1f5f9;
  font-size: 14px;
  white-space: nowrap;
}

/* Status */

.status {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
}

.confirmed {
  background: #dcfce7;
  color: #15803d;
}

.pending {
  background: #fef3c7;
  color: #a16207;
}

.cancelled {
  color: #dc2626;
  font-size: 12px;
  font-weight: 600;
}

/* Button */

.cancel-btn {
  border: none;
  background: #fee2e2;
  color: #dc2626;
  padding: 7px 11px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 12px;
}

.cancel-btn:hover {
  background: #fecaca;
}

@media (max-width: 700px) {

  .page-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

}

</style>