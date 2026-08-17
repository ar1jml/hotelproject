<template>
  <div class="dashboard">

    <!-- Page Header -->
    <div class="page-header">
      <div>
        <h1>Reception Dashboard</h1>
        <p>Welcome back. Here's what's happening at the hotel today.</p>
      </div>

      <button class="new-booking-btn">
        + New Booking
      </button>
    </div>

    <!-- Statistics -->
    <div class="stats-grid">

      <div class="stat-card">
        <div class="stat-icon checkin">
          ↓
        </div>

        <div>
          <p>Today's Check-ins</p>
          <h2>8</h2>
          <span class="positive">+2 from yesterday</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon checkout">
          ↑
        </div>

        <div>
          <p>Today's Check-outs</p>
          <h2>5</h2>
          <span class="warning">2 pending</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon rooms">
          🛏
        </div>

        <div>
          <p>Available Rooms</p>
          <h2>12</h2>
          <span class="positive">of 30 rooms</span>
        </div>
      </div>

      <div class="stat-card">
        <div class="stat-icon guests">
          👤
        </div>

        <div>
          <p>Active Guests</p>
          <h2>18</h2>
          <span class="positive">Currently staying</span>
        </div>
      </div>

    </div>

    <!-- Main Dashboard -->
    <div class="dashboard-grid">

      <!-- Today's Arrivals -->
      <div class="dashboard-card">

        <div class="card-header">
          <div>
            <h2>Today's Arrivals</h2>
            <p>Guests expected to check in today</p>
          </div>

          <button>View All</button>
        </div>

        <div class="booking-list">

          <div class="booking-row">
            <div class="guest-avatar">
              JS
            </div>

            <div class="guest-info">
              <strong>John Smith</strong>
              <span>Deluxe Room • 2 Guests</span>
            </div>

            <div class="booking-time">
              <strong>10:00 AM</strong>
              <span>Booking #1042</span>
            </div>

            <span class="status confirmed">
              Confirmed
            </span>
          </div>

          <div class="booking-row">
            <div class="guest-avatar">
              MA
            </div>

            <div class="guest-info">
              <strong>Michael Anderson</strong>
              <span>Suite • 3 Guests</span>
            </div>

            <div class="booking-time">
              <strong>12:30 PM</strong>
              <span>Booking #1043</span>
            </div>

            <span class="status confirmed">
              Confirmed
            </span>
          </div>

          <div class="booking-row">
            <div class="guest-avatar">
              EW
            </div>

            <div class="guest-info">
              <strong>Emma Wilson</strong>
              <span>Family Room • 4 Guests</span>
            </div>

            <div class="booking-time">
              <strong>3:00 PM</strong>
              <span>Booking #1044</span>
            </div>

            <span class="status pending">
              Pending
            </span>
          </div>

        </div>

      </div>

      <!-- Room Status -->
      <div class="dashboard-card">

        <div class="card-header">
          <div>
            <h2>Room Status</h2>
            <p>Current room availability</p>
          </div>

          <button>View Rooms</button>
        </div>

        <div class="room-status">

          <div class="room-status-row">
            <div>
              <strong>Available</strong>
              <span>Ready for guests</span>
            </div>

            <strong class="room-number available">
              12
            </strong>
          </div>

          <div class="room-status-row">
            <div>
              <strong>Occupied</strong>
              <span>Currently in use</span>
            </div>

            <strong class="room-number occupied">
              18
            </strong>
          </div>

          <div class="room-status-row">
            <div>
              <strong>Cleaning</strong>
              <span>Being prepared</span>
            </div>

            <strong class="room-number cleaning">
              3
            </strong>
          </div>

          <div class="room-status-row">
            <div>
              <strong>Maintenance</strong>
              <span>Unavailable</span>
            </div>

            <strong class="room-number maintenance">
              2
            </strong>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<style scoped>

.dashboard {
  width: 100%;
}

/* Header */

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.page-header h1 {
  margin: 0 0 8px;
  font-size: 28px;
  color: #111827;
}

.page-header p {
  margin: 0;
  color: #6b7280;
}

.new-booking-btn {
  border: none;
  background: #111827;
  color: white;
  padding: 12px 20px;
  border-radius: 7px;
  font-weight: 600;
  cursor: pointer;
}

.new-booking-btn:hover {
  background: #1f2937;
}

/* Statistics */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 25px;
}

.stat-card {
  background: white;
  padding: 22px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 18px;
  border: 1px solid #e5e7eb;
}

.stat-icon {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
}

.stat-icon.checkin {
  background: #dcfce7;
}

.stat-icon.checkout {
  background: #fef3c7;
}

.stat-icon.rooms {
  background: #dbeafe;
}

.stat-icon.guests {
  background: #ede9fe;
}

.stat-card p {
  margin: 0 0 5px;
  color: #6b7280;
  font-size: 14px;
}

.stat-card h2 {
  margin: 0 0 5px;
  font-size: 28px;
  color: #111827;
}

.stat-card span {
  font-size: 12px;
}

.positive {
  color: #16a34a;
}

.warning {
  color: #d97706;
}

/* Dashboard Grid */

.dashboard-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 25px;
}

.dashboard-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}

.card-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
}

.card-header h2 {
  margin: 0 0 5px;
  font-size: 18px;
}

.card-header p {
  margin: 0;
  color: #6b7280;
  font-size: 13px;
}

.card-header button {
  border: none;
  background: none;
  color: #2563eb;
  cursor: pointer;
  font-weight: 600;
}

/* Booking List */

.booking-row {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 18px 20px;
  border-bottom: 1px solid #f1f5f9;
}

.booking-row:last-child {
  border-bottom: none;
}

.guest-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
}

.guest-info {
  flex: 1;
}

.guest-info strong {
  display: block;
  margin-bottom: 4px;
}

.guest-info span,
.booking-time span {
  display: block;
  color: #6b7280;
  font-size: 12px;
}

.booking-time {
  text-align: right;
}

.booking-time strong {
  display: block;
  font-size: 13px;
  margin-bottom: 4px;
}

.status {
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
}

.status.confirmed {
  background: #dcfce7;
  color: #15803d;
}

.status.pending {
  background: #fef3c7;
  color: #a16207;
}

/* Room Status */

.room-status-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  border-bottom: 1px solid #f1f5f9;
}

.room-status-row:last-child {
  border-bottom: none;
}

.room-status-row strong {
  display: block;
  margin-bottom: 4px;
}

.room-status-row span {
  color: #6b7280;
  font-size: 12px;
}

.room-number {
  font-size: 22px;
}

.room-number.available {
  color: #16a34a;
}

.room-number.occupied {
  color: #dc2626;
}

.room-number.cleaning {
  color: #d97706;
}

.room-number.maintenance {
  color: #7c3aed;
}

/* Responsive */

@media (max-width: 1100px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .page-header {
    align-items: flex-start;
    flex-direction: column;
    gap: 15px;
  }

  .booking-row {
    flex-wrap: wrap;
  }
}

</style>