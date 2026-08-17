<script setup>
import { ref } from 'vue'

const rooms = ref([
  {
    id: 1,
    name: 'Deluxe Room',
    total: 10,
    occupied: 6,
    available: 4,
    cleaning: 1,
    maintenance: 0
  },
  {
    id: 2,
    name: 'Suite',
    total: 5,
    occupied: 3,
    available: 2,
    cleaning: 0,
    maintenance: 1
  },
  {
    id: 3,
    name: 'Family Room',
    total: 8,
    occupied: 6,
    available: 2,
    cleaning: 1,
    maintenance: 0
  }
])
</script>

<template>
  <div class="page">

    <div class="page-header">
      <div>
        <h1>Room Status</h1>
        <p>Monitor room availability and current status.</p>
      </div>
    </div>

    <div class="room-grid">

      <div
        v-for="room in rooms"
        :key="room.id"
        class="room-card"
      >

        <div class="room-header">
          <h2>{{ room.name }}</h2>
          <span>{{ room.total }} rooms</span>
        </div>

        <div class="room-stats">

          <div class="room-stat available">
            <strong>{{ room.available }}</strong>
            <span>Available</span>
          </div>

          <div class="room-stat occupied">
            <strong>{{ room.occupied }}</strong>
            <span>Occupied</span>
          </div>

          <div class="room-stat cleaning">
            <strong>{{ room.cleaning }}</strong>
            <span>Cleaning</span>
          </div>

          <div class="room-stat maintenance">
            <strong>{{ room.maintenance }}</strong>
            <span>Maintenance</span>
          </div>

        </div>

        <div class="progress">

          <div
            class="progress-bar"
            :style="{ width: `${(room.occupied / room.total) * 100}%` }"
          ></div>

        </div>

        <p class="occupancy">
          {{ Math.round((room.occupied / room.total) * 100) }}%
          occupied
        </p>

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

.room-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.room-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 22px;
}

.room-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.room-header h2 {
  margin: 0;
  font-size: 18px;
}

.room-header span {
  color: #6b7280;
  font-size: 13px;
}

.room-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.room-stat {
  padding: 15px;
  border-radius: 8px;
}

.room-stat strong {
  display: block;
  font-size: 24px;
  margin-bottom: 4px;
}

.room-stat span {
  font-size: 12px;
}

.available {
  background: #dcfce7;
  color: #15803d;
}

.occupied {
  background: #fee2e2;
  color: #dc2626;
}

.cleaning {
  background: #fef3c7;
  color: #a16207;
}

.maintenance {
  background: #ede9fe;
  color: #7c3aed;
}

.progress {
  height: 7px;
  background: #e5e7eb;
  border-radius: 10px;
  margin-top: 20px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #2563eb;
}

.occupancy {
  margin: 8px 0 0;
  color: #6b7280;
  font-size: 12px;
}

@media (max-width: 900px) {
  .room-grid {
    grid-template-columns: 1fr;
  }
}
</style>