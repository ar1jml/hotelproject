<template>
  <aside class="admin-sidebar">

    <div class="sidebar-logo">
      <div class="logo-icon">
        <i class="fa-solid fa-hotel"></i>
      </div>

      <span>Hotel Manager</span>
    </div>

    <nav class="sidebar-nav">

      <RouterLink to="/admin/dashboard" class="nav-item">
        <i class="fa-solid fa-gauge-high"></i>
        <span>Dashboard</span>
      </RouterLink>

      <RouterLink to="/admin/bookings" class="nav-item">
        <i class="fa-solid fa-calendar-check"></i>
        <span>Bookings</span>
      </RouterLink>

      <RouterLink to="/admin/guests" class="nav-item">
        <i class="fa-solid fa-users"></i>
        <span>Guests</span>
      </RouterLink>

      <RouterLink to="/admin/payments" class="nav-item">
        <i class="fa-solid fa-credit-card"></i>
        <span>Payments</span>
      </RouterLink>

      <RouterLink to="/admin/rooms" class="nav-item">
        <i class="fa-solid fa-bed"></i>
        <span>Rooms</span>
      </RouterLink>

    </nav>

    <div class="sidebar-bottom">
      <button class="sign-out">
        <i class="fa-solid fa-right-from-bracket"></i>
        <span>Sign Out</span>
      </button>
    </div>

  </aside>
</template>

<style scoped>
.admin-sidebar {
  width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;

  background: #ffffff;
  border-right: 1px solid #e5e7eb;

  display: flex;
  flex-direction: column;

  z-index: 100;
}

.sidebar-logo {
  height: 98px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 30px;

  border-bottom: 1px solid #e5e7eb;

  font-size: 20px;
  font-weight: 700;
  color: #172033;
}

.logo-icon {
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background: #2563eb;
  color: white;
}

.sidebar-nav {
  flex: 1;
  padding-top: 30px;
}

.nav-item {
  height: 58px;

  display: flex;
  align-items: center;

  gap: 18px;
  padding: 0 30px;

  color: #374151;
  text-decoration: none;

  font-size: 15px;
  font-weight: 500;
}

.nav-item i {
  width: 20px;
  text-align: center;
}

.nav-item:hover {
  background: #f1f5ff;
  color: #2563eb;
}

.nav-item.router-link-active {
  background: #edf4ff;
  color: #2563eb;
  border-right: 3px solid #2563eb;
}

.sidebar-bottom {
  padding: 25px 0;
  border-top: 1px solid #e5e7eb;
}

.sign-out {
  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;

  gap: 18px;
  padding: 0 30px;

  border: none;
  background: transparent;

  color: #374151;
  font-size: 15px;

  cursor: pointer;
}

.sign-out:hover {
  color: #dc2626;
}
</style>