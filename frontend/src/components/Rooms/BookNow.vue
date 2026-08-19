<template>
  <section class="book-now">
    <div class="container">

      <h1>Book Your Stay</h1>

      <p>
        Choose your room and complete your reservation.
      </p>

      <BookingForm />

    </div>
  </section>
</template>

<script setup>
import BookingForm from "@/components/Rooms/BookingForm.vue"
</script>

<style scoped>

.book-now {
  min-height: 600px;
  padding: 60px 20px;
  background: #f8f9fa;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}

h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

p {
  margin-bottom: 30px;
}

</style>