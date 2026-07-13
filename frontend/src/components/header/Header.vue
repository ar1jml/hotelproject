<script setup>
import TopHeader from './TopHeader.vue'
 import MiddleHeader from './MiddleHeader.vue'
</script>

<template>
  <header class="middle-header">
    <TopHeader />
    <MiddleHeader />
  </header>
</template>
<style scoped>
.middle-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.top-header {
  height: 40px;
}

.middle-header {
  height: 80px;
}

.hero-banner {
  margin-top: 120px; /* 40 + 80 */
}
</style>



