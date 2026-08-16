<template>
  <header class="admin-header">

    <div class="header-right">

      <!-- Notification -->
      <button class="notification">
        <i class="fa-regular fa-bell"></i>
        <span class="notification-dot"></span>
      </button>

      <!-- Admin Profile -->
      <div class="admin-profile">

        <div class="avatar">
          A
        </div>

        <span>Admin</span>

        <i class="fa-solid fa-chevron-down"></i>

      </div>

    </div>

  </header>
</template>

<style scoped>
.admin-header {
  height: 98px;

  background: #ffffff;

  border-bottom: 1px solid #e5e7eb;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 35px;
}

.header-right {
  display: flex;
  align-items: center;

  gap: 28px;
}

/* Notification */

.notification {
  position: relative;

  border: none;
  background: transparent;

  font-size: 21px;

  color: #374151;

  cursor: pointer;
}

.notification-dot {
  position: absolute;

  top: 0;
  right: -2px;

  width: 7px;
  height: 7px;

  background: #2563eb;

  border-radius: 50%;
}

/* Admin profile */

.admin-profile {
  display: flex;
  align-items: center;

  gap: 10px;

  color: #374151;

  font-size: 15px;
  font-weight: 500;
}

.admin-profile > i {
  font-size: 11px;

  margin-left: 4px;
}

/* Avatar */

.avatar {
  width: 38px;
  height: 38px;

  border-radius: 50%;

  background: #dbeafe;

  color: #2563eb;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
}
</style>