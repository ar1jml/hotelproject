<script setup>
import { computed, ref } from 'vue'

const search = ref('')

const guests = ref([
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+251 911 123 456',
    booking: '#1042',
    room: 'Deluxe Room',
    status: 'Checked In'
  },
  {
    id: 2,
    name: 'Michael Anderson',
    email: 'michael@example.com',
    phone: '+251 922 456 789',
    booking: '#1043',
    room: 'Suite',
    status: 'Checked In'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    email: 'emma@example.com',
    phone: '+251 933 789 012',
    booking: '#1044',
    room: 'Family Room',
    status: 'Reserved'
  }
])

const filteredGuests = computed(() => {
  const value = search.value.toLowerCase()

  return guests.value.filter(guest =>
    guest.name.toLowerCase().includes(value) ||
    guest.email.toLowerCase().includes(value) ||
    guest.phone.includes(value) ||
    guest.booking.includes(value)
  )
})
</script>

<template>
  <div class="page">

    <div class="page-header">
      <div>
        <h1>Guests</h1>
        <p>Search and manage hotel guests.</p>
      </div>
    </div>

    <div class="search-box">
      <input
        v-model="search"
        type="text"
        placeholder="Search guest, email, phone or booking..."
      />
    </div>

    <div class="table-card">

      <div class="table-header">
        <h2>Guest List</h2>
        <span>{{ filteredGuests.length }} guests</span>
      </div>

      <div class="table-wrapper">

        <table>

          <thead>
            <tr>
              <th>Guest</th>
              <th>Contact</th>
              <th>Booking</th>
              <th>Room</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr
              v-for="guest in filteredGuests"
              :key="guest.id"
            >

              <td>
                <strong>{{ guest.name }}</strong>
              </td>

              <td>
                <strong>{{ guest.email }}</strong>
                <small>{{ guest.phone }}</small>
              </td>

              <td>
                {{ guest.booking }}
              </td>

              <td>
                {{ guest.room }}
              </td>

              <td>
                <span
                  class="status"
                  :class="guest.status.toLowerCase().replace(' ', '-')"
                >
                  {{ guest.status }}
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
}

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
}

td {
  padding: 17px 18px;
  border-top: 1px solid #f1f5f9;
}

td small {
  display: block;
  margin-top: 4px;
  color: #6b7280;
}

.status {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
}

.checked-in {
  background: #dcfce7;
  color: #15803d;
}

.reserved {
  background: #fef3c7;
  color: #a16207;
}
</style>