<script setup>
import { ref, computed } from 'vue'

const search = ref('')

const guests = ref([
  {
    id: 1038,
    guest: 'David Brown',
    room: 'Deluxe Room',
    guests: 2,
    checkIn: '14 Aug 2026',
    checkOut: '17 Aug 2026',
    total: '$360.00',
    payment: 'Paid',
    status: 'Checked In'
  },
  {
    id: 1039,
    guest: 'Sarah Johnson',
    room: 'Suite',
    guests: 2,
    checkIn: '15 Aug 2026',
    checkOut: '17 Aug 2026',
    total: '$500.00',
    payment: 'Paid',
    status: 'Checked In'
  }
])

const filteredGuests = computed(() => {
  const value = search.value.toLowerCase()

  return guests.value.filter(guest =>
    guest.guest.toLowerCase().includes(value) ||
    guest.room.toLowerCase().includes(value) ||
    guest.id.toString().includes(value)
  )
})

const checkOut = (guest) => {
  guest.status = 'Checked Out'
}
</script>

<template>
  <div class="page">

    <div class="page-header">
      <div>
        <h1>Check-outs</h1>
        <p>Manage guests leaving the hotel today.</p>
      </div>
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
        <h2>Today's Departures</h2>

        <span>
          {{ filteredGuests.length }} departures
        </span>
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
              <th>Payment</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            <tr
              v-for="guest in filteredGuests"
              :key="guest.id"
            >

              <td>
                #{{ guest.id }}
              </td>

              <td>
                <strong>
                  {{ guest.guest }}
                </strong>
              </td>

              <td>
                {{ guest.room }}
              </td>

              <td>
                {{ guest.guests }}
              </td>

              <td>
                {{ guest.checkIn }}
              </td>

              <td>
                {{ guest.checkOut }}
              </td>

              <td>

                <span class="payment">
                  {{ guest.payment }}
                </span>

                <small>
                  {{ guest.total }}
                </small>

              </td>

              <td>

                <button
                  v-if="guest.status === 'Checked In'"
                  class="checkout-btn"
                  @click="checkOut(guest)"
                >
                  Check Out
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
  box-sizing: border-box;
  outline: none;
}

.search-box input:focus {
  border-color: #2563eb;
}

/* Card */

.table-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}

.table-header {
  display: flex;
  justify-content: space-between;
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

/* Table */

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
}

td {
  padding: 17px 18px;
  border-top: 1px solid #f1f5f9;
  font-size: 14px;
}

td small {
  display: block;
  margin-top: 4px;
  color: #6b7280;
}

/* Payment */

.payment {
  color: #15803d;
  font-size: 12px;
  font-weight: 600;
}

/* Button */

.checkout-btn {
  padding: 8px 13px;
  border: none;
  border-radius: 6px;
  background: #dc2626;
  color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
}

.checkout-btn:hover {
  background: #b91c1c;
}

.completed {
  color: #16a34a;
  font-size: 12px;
  font-weight: 600;
}

</style>