<template>
  <div class="admin-layout">
    <AdminSidebar />

    <div class="admin-main">
      <AdminHeader />

      <main class="admin-content">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup>
import AdminSidebar from '@/components/admin/AdminSidebar.vue'
import AdminHeader from '@/components/admin/AdminHeader.vue'
</script>

<style scoped>
.admin-layout {
  min-height: 100vh;
  background: #f8fafc;
}

.admin-main {
  margin-left: 260px;
  min-height: 100vh;
}

.admin-content {
  padding: 35px;
}
</style>