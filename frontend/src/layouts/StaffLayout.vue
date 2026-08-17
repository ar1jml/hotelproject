<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="staff-layout">

    <!-- Sidebar -->
    <aside class="sidebar">

      <div class="logo">
        Hotel Staff
      </div>

      <nav>

        <RouterLink to="/staff/dashboard">
          Dashboard
        </RouterLink>

        <RouterLink to="/staff/check-ins">
          Check-ins
        </RouterLink>

        <RouterLink to="/staff/check-outs">
          Check-outs
        </RouterLink>

        <RouterLink to="/staff/bookings">
          Bookings
        </RouterLink>

        <RouterLink to="/staff/guests">
          Guests
        </RouterLink>

        <RouterLink to="/staff/rooms">
          Rooms
        </RouterLink>

        <RouterLink to="/staff/payments">
          Payments
        </RouterLink>

        <RouterLink to="/staff/login">
          Logout
        </RouterLink>

      </nav>

    </aside>

    <!-- Main content -->
    <div class="main-content">

      <header class="topbar">
        <h2>Reception Panel</h2>

        <span>
          Staff
        </span>
      </header>

      <main class="content">
        <router-view />
      </main>

    </div>

  </div>
</template>

<style scoped>
.staff-layout {
  min-height: 100vh;
  display: flex;
  background: #f5f7fa;
}

/* Sidebar */

.sidebar {
  width: 240px;
  min-height: 100vh;
  background: #111827;
  color: white;
}

.logo {
  padding: 25px 20px;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 1px solid #374151;
}

nav {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

nav a {
  padding: 14px 20px;
  color: #d1d5db;
  text-decoration: none;
}

nav a:hover {
  background: #1f2937;
  color: white;
}

nav a.router-link-active {
  background: #374151;
  color: white;
}

/* Main */

.main-content {
  flex: 1;
}

.topbar {
  height: 70px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid #e5e7eb;
}

.content {
  padding: 30px;
}
</style>