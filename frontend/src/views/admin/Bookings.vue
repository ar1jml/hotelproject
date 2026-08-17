<script setup>
import { computed, ref } from 'vue'

const search = ref('')
const selectedStatus = ref('all')

const bookings = ref([
  {
    id: 1,
    guestName: 'John Smith',
    email: 'john.smith@email.com',
    roomNumber: '102',
    roomType: 'Deluxe',
    checkIn: 'Sep 04, 2025',
    checkOut: 'Sep 06, 2025',
    amount: 240,
    status: 'checked-in'
  },
  {
    id: 2,
    guestName: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    roomNumber: '101',
    roomType: 'Standard',
    checkIn: 'Sep 05, 2025',
    checkOut: 'Sep 06, 2025',
    amount: 240,
    status: 'confirmed'
  },
  {
    id: 3,
    guestName: 'Michael Brown',
    email: 'michael.brown@email.com',
    roomNumber: '202',
    roomType: 'Presidential',
    checkIn: 'Sep 03, 2025',
    checkOut: 'Sep 06, 2025',
    amount: 500,
    status: 'checked-out'
  },
  {
    id: 4,
    guestName: 'Emily Davis',
    email: 'emily.davis@email.com',
    roomNumber: '301',
    roomType: 'Standard',
    checkIn: 'Sep 06, 2025',
    checkOut: 'Sep 11, 2025',
    amount: 240,
    status: 'pending'
  }
])

const filteredBookings = computed(() => {
  return bookings.value.filter((booking) => {
    const matchesSearch =
      booking.guestName.toLowerCase().includes(search.value.toLowerCase()) ||
      booking.email.toLowerCase().includes(search.value.toLowerCase()) ||
      booking.roomNumber.toLowerCase().includes(search.value.toLowerCase())

    const matchesStatus =
      selectedStatus.value === 'all' ||
      booking.status === selectedStatus.value

    return matchesSearch && matchesStatus
  })
})

const statusLabel = (status) => {
  const labels = {
    'checked-in': 'Checked In',
    confirmed: 'Confirmed',
    'checked-out': 'Checked Out',
    pending: 'Pending',
    cancelled: 'Cancelled'
  }

  return labels[status] || status
}

const checkIn = (booking) => {
  booking.status = 'checked-in'
}

const checkOut = (booking) => {
  booking.status = 'checked-out'
}

const cancelBooking = (booking) => {
  booking.status = 'cancelled'
}
</script>

<template>
  <div class="bookings-page">

    <!-- Page Header -->
    <div class="page-header">
      <div class="title-wrapper">
        <div class="title-icon">
          📅
        </div>

        <h1>Bookings Management</h1>
      </div>
    </div>

    <!-- Filters -->
    <div class="filters-card">

      <div class="search-wrapper">
        <span class="search-icon">⌕</span>

        <input
          v-model="search"
          type="text"
          placeholder="Search by guest name, email, or room number..."
        />
      </div>

      <div class="filter-wrapper">
        <span class="filter-icon">⚱</span>

        <select v-model="selectedStatus">
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="checked-in">Checked In</option>
          <option value="checked-out">Checked Out</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

    </div>

    <!-- Bookings Table -->
    <div class="table-card">

      <div class="table-wrapper">
        <table>

          <thead>
            <tr>
              <th>GUEST</th>
              <th>ROOM</th>
              <th>DATES</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="booking in filteredBookings"
              :key="booking.id"
            >

              <!-- Guest -->
              <td>
                <div class="guest">
                  <strong>{{ booking.guestName }}</strong>
                  <span>{{ booking.email }}</span>
                </div>
              </td>

              <!-- Room -->
              <td>
                <div class="room">
                  <strong>Room {{ booking.roomNumber }}</strong>
                  <span>{{ booking.roomType }}</span>
                </div>
              </td>

              <!-- Dates -->
              <td>
                <div class="dates">
                  <strong>{{ booking.checkIn }}</strong>
                  <span>to {{ booking.checkOut }}</span>
                </div>
              </td>

              <!-- Amount -->
              <td>
                <strong class="amount">
                  ${{ booking.amount }}
                </strong>
              </td>

              <!-- Status -->
              <td>
                <span
                  class="status"
                  :class="booking.status"
                >
                  {{ statusLabel(booking.status) }}
                </span>
              </td>

              <!-- Actions -->
              <td>
                <div class="actions">

                  <button
                    v-if="booking.status === 'confirmed'"
                    class="action check-in"
                    @click="checkIn(booking)"
                  >
                    ✓ Check In
                  </button>

                  <button
                    v-if="booking.status === 'checked-in'"
                    class="action check-out"
                    @click="checkOut(booking)"
                  >
                    ✓ Check Out
                  </button>

                  <button
                    v-if="
                      booking.status === 'pending' ||
                      booking.status === 'confirmed'
                    "
                    class="action cancel"
                    @click="cancelBooking(booking)"
                  >
                    ⊗ Cancel
                  </button>

                </div>
              </td>

            </tr>

            <tr v-if="filteredBookings.length === 0">
              <td colspan="6" class="empty">
                No bookings found.
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>

  </div>
</template>

<style scoped>
.bookings-page {
  padding: 32px;
  min-height: 100vh;
  background: #f8fafc;
}

/* Header */

.page-header {
  margin-bottom: 24px;
}

.title-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.title-icon {
  font-size: 28px;
}

.title-wrapper h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #172033;
}

/* Filters */

.filters-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px;
  margin-bottom: 22px;

  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.search-wrapper {
  position: relative;
  flex: 1;
}

.search-wrapper input {
  width: 100%;
  height: 42px;

  padding: 0 16px 0 42px;

  border: 1px solid #dfe3e8;
  border-radius: 6px;

  outline: none;
  font-size: 14px;
}

.search-wrapper input:focus {
  border-color: #7aa7ff;
}

.search-icon {
  position: absolute;
  left: 15px;
  top: 50%;

  transform: translateY(-50%);

  font-size: 20px;
  color: #94a3b8;
}

.filter-wrapper {
  position: relative;
}

.filter-wrapper select {
  height: 42px;
  min-width: 150px;

  padding: 0 36px 0 14px;

  border: 1px solid #dfe3e8;
  border-radius: 6px;

  background: white;

  outline: none;

  cursor: pointer;
}

.filter-icon {
  display: none;
}

/* Table */

.table-card {
  background: white;

  border: 1px solid #e5e7eb;
  border-radius: 8px;

  overflow: hidden;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: #ffffff;
}

th {
  padding: 18px 20px;

  text-align: left;

  font-size: 11px;
  font-weight: 700;

  color: #64748b;

  border-bottom: 1px solid #e5e7eb;
}

td {
  padding: 18px 20px;

  border-bottom: 1px solid #eef0f2;

  font-size: 14px;

  color: #334155;
}

tbody tr:last-child td {
  border-bottom: none;
}

tbody tr:hover {
  background: #fafbfc;
}

/* Guest */

.guest,
.room,
.dates {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.guest strong,
.room strong,
.dates strong {
  color: #1e293b;
  font-weight: 600;
}

.guest span,
.room span,
.dates span {
  color: #94a3b8;
  font-size: 12px;
}

/* Amount */

.amount {
  color: #1e293b;
}

/* Status */

.status {
  display: inline-flex;

  padding: 6px 10px;

  border-radius: 20px;

  font-size: 11px;
  font-weight: 600;
}

.status.checked-in {
  color: #15803d;
  background: #dcfce7;
}

.status.confirmed {
  color: #2563eb;
  background: #dbeafe;
}

.status.checked-out {
  color: #475569;
  background: #f1f5f9;
}

.status.pending {
  color: #a16207;
  background: #fef3c7;
}

.status.cancelled {
  color: #dc2626;
  background: #fee2e2;
}

/* Actions */

.actions {
  display: flex;
  align-items: center;
  gap: 12px;
  white-space: nowrap;
}

.action {
  border: none;
  background: transparent;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;
}

.check-in {
  color: #16a34a;
}

.check-out {
  color: #2563eb;
}

.cancel {
  color: #dc2626;
}

.action:hover {
  text-decoration: underline;
}

/* Empty */

.empty {
  padding: 50px;

  text-align: center;

  color: #94a3b8;
}

/* Mobile */

@media (max-width: 768px) {
  .bookings-page {
    padding: 20px;
  }

  .filters-card {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-wrapper select {
    width: 100%;
  }

  .title-wrapper h1 {
    font-size: 22px;
  }
}
</style>