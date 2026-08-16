<template>
  <div class="dashboard">

    <!-- Page Header -->
    <div class="page-header">
      <div>
        <h1>Dashboard</h1>
        <p>Overview of your hotel operations</p>
      </div>

      <div class="date">
        <i class="fa-regular fa-calendar"></i>
        <span>Today</span>
      </div>
    </div>

    <!-- Statistics -->
    <div class="stats-grid">

      <!-- Total Rooms -->
      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-title">Total Rooms</span>
          <strong>6</strong>
        </div>

        <div class="stat-icon blue">
          <i class="fa-solid fa-bed"></i>
        </div>
      </div>

      <!-- Occupancy -->
      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-title">Occupancy Rate</span>
          <strong>17%</strong>
        </div>

        <div class="stat-icon green">
          <i class="fa-solid fa-chart-line"></i>
        </div>
      </div>

      <!-- Check-ins -->
      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-title">Today's Check-ins</span>
          <strong>1</strong>
        </div>

        <div class="stat-icon orange">
          <i class="fa-regular fa-clock"></i>
        </div>
      </div>

      <!-- Revenue -->
      <div class="stat-card">
        <div class="stat-info">
          <span class="stat-title">Total Revenue</span>
          <strong>$1,100</strong>
        </div>

        <div class="stat-icon purple">
          <i class="fa-solid fa-dollar-sign"></i>
        </div>
      </div>

    </div>

    <!-- Charts -->
    <div class="charts-grid">

      <!-- Room Status -->
      <section class="chart-card">
        <div class="card-header">
          <div>
            <h2>Room Status Distribution</h2>
            <p>Current room availability</p>
          </div>
        </div>

        <div class="room-status">

          <div class="donut">
            <div class="donut-center">
              <strong>6</strong>
              <span>Rooms</span>
            </div>
          </div>

          <div class="status-list">

            <div class="status-item">
              <span class="status-label">
                <span class="dot available"></span>
                Available
              </span>
              <strong>3</strong>
            </div>

            <div class="status-item">
              <span class="status-label">
                <span class="dot occupied"></span>
                Occupied
              </span>
              <strong>1</strong>
            </div>

            <div class="status-item">
              <span class="status-label">
                <span class="dot reserved"></span>
                Reserved
              </span>
              <strong>1</strong>
            </div>

            <div class="status-item">
              <span class="status-label">
                <span class="dot maintenance"></span>
                Maintenance
              </span>
              <strong>1</strong>
            </div>

          </div>

        </div>
      </section>

      <!-- Revenue -->
      <section class="chart-card">
        <div class="card-header">
          <div>
            <h2>Revenue Trend</h2>
            <p>Last 7 days</p>
          </div>

          <select>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
        </div>

        <div class="revenue-chart">

          <div class="y-axis">
            <span>$600</span>
            <span>$450</span>
            <span>$300</span>
            <span>$150</span>
            <span>$0</span>
          </div>

          <div class="chart-area">

            <div class="grid-line line-1"></div>
            <div class="grid-line line-2"></div>
            <div class="grid-line line-3"></div>
            <div class="grid-line line-4"></div>
            <div class="grid-line line-5"></div>

            <div class="bars">

              <div class="bar-column">
                <div class="bar" style="height: 58%"></div>
                <span>Mon</span>
              </div>

              <div class="bar-column">
                <div class="bar" style="height: 42%"></div>
                <span>Tue</span>
              </div>

              <div class="bar-column">
                <div class="bar" style="height: 70%"></div>
                <span>Wed</span>
              </div>

              <div class="bar-column">
                <div class="bar" style="height: 48%"></div>
                <span>Thu</span>
              </div>

              <div class="bar-column">
                <div class="bar" style="height: 78%"></div>
                <span>Fri</span>
              </div>

              <div class="bar-column">
                <div class="bar" style="height: 62%"></div>
                <span>Sat</span>
              </div>

              <div class="bar-column">
                <div class="bar" style="height: 88%"></div>
                <span>Sun</span>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>

  </div>
</template>


<style scoped>

.dashboard {
  width: 100%;
}


/* =========================
   PAGE HEADER
========================= */

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 30px;
}

.page-header h1 {
  margin: 0;

  font-size: 32px;
  font-weight: 700;

  color: #172033;
}

.page-header p {
  margin: 7px 0 0;

  color: #64748b;
  font-size: 15px;
}

.date {
  display: flex;
  align-items: center;
  gap: 9px;

  padding: 10px 15px;

  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  color: #475569;

  font-size: 14px;
}


/* =========================
   STATISTICS
========================= */

.stats-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 20px;

  margin-bottom: 25px;
}

.stat-card {
  min-height: 130px;

  padding: 24px;

  background: white;

  border: 1px solid #e5e7eb;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
}

.stat-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.stat-title {
  color: #64748b;

  font-size: 14px;
}

.stat-info strong {
  color: #172033;

  font-size: 30px;
  line-height: 1;
}

.stat-icon {
  width: 48px;
  height: 48px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
}

.stat-icon.blue {
  background: #eff6ff;
  color: #2563eb;
}

.stat-icon.green {
  background: #ecfdf5;
  color: #10b981;
}

.stat-icon.orange {
  background: #fff7ed;
  color: #f97316;
}

.stat-icon.purple {
  background: #faf5ff;
  color: #9333ea;
}


/* =========================
   CHARTS
========================= */

.charts-grid {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 20px;
}

.chart-card {
  min-height: 390px;

  padding: 25px;

  background: white;

  border: 1px solid #e5e7eb;

  border-radius: 10px;

  box-shadow: 0 2px 6px rgba(15, 23, 42, 0.04);
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 25px;
}

.card-header h2 {
  margin: 0;

  font-size: 17px;
  font-weight: 600;

  color: #172033;
}

.card-header p {
  margin: 6px 0 0;

  color: #94a3b8;

  font-size: 13px;
}

.card-header select {
  padding: 8px 10px;

  border: 1px solid #e5e7eb;

  border-radius: 6px;

  color: #475569;

  background: white;
}


/* =========================
   ROOM STATUS
========================= */

.room-status {
  height: 280px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 55px;
}

.donut {
  width: 190px;
  height: 190px;

  border-radius: 50%;

  background:
    conic-gradient(
      #22c55e 0deg 180deg,
      #3b82f6 180deg 240deg,
      #f59e0b 240deg 300deg,
      #ef4444 300deg 360deg
    );

  display: flex;
  align-items: center;
  justify-content: center;
}

.donut::after {
  content: "";

  position: absolute;
}

.donut-center {
  width: 120px;
  height: 120px;

  border-radius: 50%;

  background: white;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
}

.donut-center strong {
  font-size: 28px;
  color: #172033;
}

.donut-center span {
  font-size: 13px;
  color: #94a3b8;
}

.status-list {
  width: 150px;

  display: flex;
  flex-direction: column;

  gap: 18px;
}

.status-item {
  display: flex;

  justify-content: space-between;
  align-items: center;

  font-size: 14px;
}

.status-label {
  display: flex;
  align-items: center;

  gap: 8px;

  color: #475569;
}

.status-item strong {
  color: #172033;
}

.dot {
  width: 9px;
  height: 9px;

  border-radius: 50%;
}

.dot.available {
  background: #22c55e;
}

.dot.occupied {
  background: #3b82f6;
}

.dot.reserved {
  background: #f59e0b;
}

.dot.maintenance {
  background: #ef4444;
}


/* =========================
   REVENUE CHART
========================= */

.revenue-chart {
  height: 280px;

  display: flex;
}

.y-axis {
  width: 45px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  padding-bottom: 30px;

  color: #94a3b8;

  font-size: 11px;
}

.chart-area {
  position: relative;

  flex: 1;

  height: 250px;
}

.grid-line {
  position: absolute;

  left: 0;
  right: 0;

  border-top: 1px dashed #e5e7eb;
}

.line-1 {
  top: 0;
}

.line-2 {
  top: 25%;
}

.line-3 {
  top: 50%;
}

.line-4 {
  top: 75%;
}

.line-5 {
  top: 100%;
}

.bars {
  position: absolute;

  inset: 0;

  display: flex;

  align-items: flex-end;

  justify-content: space-around;

  padding: 0 10px;
}

.bar-column {
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: flex-end;

  align-items: center;

  gap: 9px;

  position: relative;
}

.bar {
  width: 30px;

  background: #3b82f6;

  border-radius: 4px 4px 0 0;

  min-height: 5px;
}

.bar-column span {
  position: absolute;

  bottom: -28px;

  color: #94a3b8;

  font-size: 11px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 1100px) {

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .charts-grid {
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

  .room-status {
    gap: 20px;
  }

  .donut {
    width: 140px;
    height: 140px;
  }

  .donut-center {
    width: 90px;
    height: 90px;
  }

}

</style>