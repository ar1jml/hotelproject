<script setup>
import { computed, ref } from 'vue'

const search = ref('')
const statusFilter = ref('All Status')
const typeFilter = ref('All Types')

const rooms = ref([
  {
    id: 1,
    number: '101',
    type: 'Standard Room',
    status: 'Available',
    floor: 1,
    occupancy: 2,
    price: 120,
    amenities: ['WiFi', 'TV', 'Air Conditioning', 'Mini Bar'],
  },
  {
    id: 2,
    number: '102',
    type: 'Deluxe Room',
    status: 'Occupied',
    floor: 1,
    occupancy: 3,
    price: 180,
    amenities: ['WiFi', 'TV', 'Air Conditioning', 'Mini Bar', 'Balcony', 'Safe'],
  },
  {
    id: 3,
    number: '201',
    type: 'Suite Room',
    status: 'Maintenance',
    floor: 2,
    occupancy: 4,
    price: 250,
    amenities: ['WiFi', 'TV', 'Air Conditioning', 'Mini Bar', 'Jacuzzi', 'Living Room'],
  },
  {
    id: 4,
    number: '202',
    type: 'Presidential Room',
    status: 'Cleaning',
    floor: 2,
    occupancy: 6,
    price: 500,
    amenities: ['WiFi', 'TV', 'Air Conditioning', 'Mini Bar', 'Jacuzzi', 'Kitchen', 'Butler Service'],
  },
])

const filteredRooms = computed(() => {
  return rooms.value.filter((room) => {
    const matchesSearch =
      room.number.toLowerCase().includes(search.value.toLowerCase()) ||
      room.type.toLowerCase().includes(search.value.toLowerCase())

    const matchesStatus =
      statusFilter.value === 'All Status' ||
      room.status === statusFilter.value

    const matchesType =
      typeFilter.value === 'All Types' ||
      room.type === typeFilter.value

    return matchesSearch && matchesStatus && matchesType
  })
})

const roomTypes = computed(() => {
  return [...new Set(rooms.value.map((room) => room.type))]
})

function setCleaning(room) {
  room.status = 'Cleaning'
}

function setMaintenance(room) {
  room.status = 'Maintenance'
}

function markAvailable(room) {
  room.status = 'Available'
}

function fixComplete(room) {
  room.status = 'Available'
}

function statusClass(status) {
  return {
    Available: 'status-available',
    Occupied: 'status-occupied',
    Maintenance: 'status-maintenance',
    Cleaning: 'status-cleaning',
  }[status]
}
</script>

<template>
  <div class="rooms-page">

    <!-- Page Header -->
    <div class="page-header">
      <div class="title-wrapper">
        <div class="title-icon">▦</div>

        <div>
          <h1>Room Management</h1>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="filters-card">

      <div class="search-box">
        <span class="search-icon">⌕</span>

        <input
          v-model="search"
          type="text"
          placeholder="Search by room number or type..."
        />
      </div>

      <button class="filter-icon">
        ⚱
      </button>

      <select v-model="statusFilter">
        <option>All Status</option>
        <option>Available</option>
        <option>Occupied</option>
        <option>Cleaning</option>
        <option>Maintenance</option>
      </select>

      <select v-model="typeFilter">
        <option>All Types</option>

        <option
          v-for="type in roomTypes"
          :key="type"
        >
          {{ type }}
        </option>
      </select>

    </div>

    <!-- Rooms -->
    <div class="rooms-grid">

      <div
        v-for="room in filteredRooms"
        :key="room.id"
        class="room-card"
      >

        <!-- Room Header -->
        <div class="room-header">

          <h2>
            Room {{ room.number }}
          </h2>

          <span
            class="status-badge"
            :class="statusClass(room.status)"
          >
            <span class="status-dot"></span>
            {{ room.status }}
          </span>

        </div>

        <!-- Room Details -->
        <div class="room-details">

          <strong>{{ room.type }}</strong>

          <p>
            Floor: {{ room.floor }}
          </p>

          <p>
            Max Occupancy: {{ room.occupancy }} guests
          </p>

          <div class="price">
            ${{ room.price }}/night
          </div>

        </div>

        <!-- Amenities -->
        <div class="amenities">

          <span class="amenities-title">
            Amenities:
          </span>

          <div class="amenity-list">

            <span
              v-for="amenity in room.amenities.slice(0, 3)"
              :key="amenity"
              class="amenity"
            >
              {{ amenity }}
            </span>

          </div>

          <span
            v-if="room.amenities.length > 3"
            class="more-amenities"
          >
            +{{ room.amenities.length - 3 }} more
          </span>

        </div>

        <!-- Actions -->
        <div class="actions">

          <!-- Available -->
          <template v-if="room.status === 'Available'">
            <button
              class="btn btn-cleaning"
              @click="setCleaning(room)"
            >
              Set Cleaning
            </button>

            <button
              class="btn btn-maintenance"
              @click="setMaintenance(room)"
            >
              Maintenance
            </button>
          </template>

          <!-- Occupied -->
          <template v-else-if="room.status === 'Occupied'">
            <button
              class="btn btn-maintenance full"
              @click="setMaintenance(room)"
            >
              Maintenance
            </button>
          </template>

          <!-- Maintenance -->
          <template v-else-if="room.status === 'Maintenance'">
            <button
              class="btn btn-available full"
              @click="fixComplete(room)"
            >
              Fix Complete
            </button>
          </template>

          <!-- Cleaning -->
          <template v-else-if="room.status === 'Cleaning'">
            <button
              class="btn btn-available"
              @click="markAvailable(room)"
            >
              Mark Available
            </button>

            <button
              class="btn btn-maintenance"
              @click="setMaintenance(room)"
            >
              Maintenance
            </button>
          </template>

        </div>

      </div>

    </div>

    <!-- Empty State -->
    <div
      v-if="filteredRooms.length === 0"
      class="empty-state"
    >
      No rooms found.
    </div>

  </div>
</template>

<style scoped>
.rooms-page {
  padding: 24px;
  background: #f8fafc;
  min-height: 100%;
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
  width: 38px;
  height: 38px;
  border: 2px solid #2563eb;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  font-size: 22px;
}

h1 {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #111827;
}

/* Filters */

.filters-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.search-box {
  flex: 1;
  position: relative;
}

.search-box input {
  width: 100%;
  height: 42px;
  padding: 0 16px 0 40px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}

.search-box input:focus {
  border-color: #2563eb;
}

.search-icon {
  position: absolute;
  left: 14px;
  top: 9px;
  font-size: 22px;
  color: #9ca3af;
}

.filter-icon {
  border: none;
  background: transparent;
  color: #6b7280;
  font-size: 20px;
  cursor: pointer;
}

.filters-card select {
  height: 42px;
  min-width: 130px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  padding: 0 12px;
  background: white;
  color: #374151;
}

/* Grid */

.rooms-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

/* Card */

.room-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.room-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
}

.room-header h2 {
  margin: 0;
  font-size: 18px;
  color: #111827;
}

/* Status */

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.status-available {
  background: #dcfce7;
  color: #15803d;
}

.status-available .status-dot {
  background: #16a34a;
}

.status-occupied {
  background: #dbeafe;
  color: #1d4ed8;
}

.status-occupied .status-dot {
  background: #2563eb;
}

.status-maintenance {
  background: #fee2e2;
  color: #dc2626;
}

.status-maintenance .status-dot {
  background: #dc2626;
}

.status-cleaning {
  background: #fef3c7;
  color: #b45309;
}

.status-cleaning .status-dot {
  background: #f59e0b;
}

/* Details */

.room-details {
  color: #6b7280;
  font-size: 13px;
}

.room-details strong {
  color: #374151;
  font-size: 13px;
}

.room-details p {
  margin: 9px 0;
}

.price {
  margin-top: 12px;
  font-size: 17px;
  font-weight: 700;
  color: #1d4ed8;
}

/* Amenities */

.amenities {
  margin-top: 16px;
}

.amenities-title {
  display: block;
  font-size: 12px;
  color: #6b7280;
  margin-bottom: 8px;
}

.amenity-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.amenity {
  background: #f3f4f6;
  padding: 4px 7px;
  border-radius: 4px;
  font-size: 10px;
  color: #374151;
}

.more-amenities {
  display: inline-block;
  margin-top: 6px;
  font-size: 11px;
  color: #6b7280;
}

/* Actions */

.actions {
  display: flex;
  gap: 6px;
  margin-top: auto;
  padding-top: 18px;
}

.btn {
  flex: 1;
  border: none;
  border-radius: 4px;
  padding: 9px 8px;
  color: white;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.9;
}

.btn-cleaning {
  background: #eab308;
}

.btn-maintenance {
  background: #dc2626;
}

.btn-available {
  background: #16a34a;
}

.full {
  width: 100%;
}

/* Empty */

.empty-state {
  padding: 50px;
  text-align: center;
  color: #6b7280;
  background: white;
  border-radius: 8px;
}

/* Responsive */

@media (max-width: 1200px) {
  .rooms-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 900px) {
  .rooms-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 650px) {
  .rooms-page {
    padding: 16px;
  }

  .filters-card {
    flex-wrap: wrap;
  }

  .search-box {
    flex-basis: 100%;
  }

  .filters-card select {
    flex: 1;
  }

  .rooms-grid {
    grid-template-columns: 1fr;
  }
}
</style>