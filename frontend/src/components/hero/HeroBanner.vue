<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const heroContent = computed(() => {
  switch (route.name) {
    case 'rooms':
      return {
        title: 'Our Rooms',
        description: 'Discover comfort, elegance, and the perfect room for your stay.',
        primaryText: 'Book Your Stay',
        secondaryText: 'View Rooms',
      }

    case 'gallery':
      return {
        title: 'Our Gallery',
        description: 'Explore the beauty, comfort, and atmosphere of Soljam Hotel.',
        primaryText: 'Book Your Stay',
        secondaryText: 'View Rooms',
      }

    case 'about':
      return {
        title: 'About Soljam',
        description: 'Discover our story, hospitality, and commitment to exceptional service.',
        primaryText: 'Book Your Stay',
        secondaryText: 'Our Rooms',
      }

    case 'contact':
      return {
        title: 'Contact Us',
        description: 'We are here to help make your stay at Soljam unforgettable.',
        primaryText: 'Book Your Stay',
        secondaryText: 'Our Rooms',
      }

    default:
      return {
        title: 'Welcome to Soljam Hotel',
        description: 'Experience luxury, comfort, and unforgettable hospitality.',
        primaryText: 'Book Your Stay',
        secondaryText: 'Explore Rooms',
      }
  }
})

function goToRooms() {
  router.push({ name: 'rooms' })
}

function goToBooking() {
  // Booking route will be added later
  console.log('Booking clicked')
}
</script>

<template>
  <section class="hero">

    <div class="overlay"></div>

    <div class="hero-content">

      <h1>
        {{ heroContent.title }}
      </h1>

      <p>
        {{ heroContent.description }}
      </p>

      <div class="hero-buttons">

        <button
          class="primary-btn"
          @click="goToBooking"
        >
          {{ heroContent.primaryText }}
        </button>

        <button
          class="secondary-btn"
          @click="goToRooms"
        >
          {{ heroContent.secondaryText }}
        </button>

      </div>

    </div>

  </section>
</template>

<style scoped>

.hero {
  height: 90vh;
  width: 100%;

  background-image: url('@/assets/hotel.jpg');
  background-size: cover;
  background-position: center;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.45);
}

.hero-content {
  position: relative;
  z-index: 1;

  text-align: center;
  color: white;

  max-width: 800px;
  padding: 20px;
}

.hero-content h1 {
  font-size: 55px;
  font-weight: 700;

  margin-bottom: 20px;
}

.hero-content p {
  font-size: 22px;

  margin-bottom: 35px;
}

.hero-buttons {
  display: flex;

  gap: 20px;

  justify-content: center;
}

.primary-btn,
.secondary-btn {
  padding: 14px 35px;

  border-radius: 5px;

  font-size: 16px;

  cursor: pointer;
}

.primary-btn {
  background: #c49b63;

  color: white;

  border: none;
}

.secondary-btn {
  background: transparent;

  border: 2px solid white;

  color: white;
}

@media (max-width: 768px) {

  .hero {
    height: 80vh;
  }

  .hero-content h1 {
    font-size: 35px;
  }

  .hero-content p {
    font-size: 18px;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }

}

</style>