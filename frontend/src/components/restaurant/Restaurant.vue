<script setup>
import { ref, computed } from 'vue'

const showFullMenu = ref(false)
const activeCategory = ref('All')

const categories = [
  'All',
  'Breakfast',
  'Ethiopian',
  'Main Dishes',
  'Pasta',
  'Drinks'
]

const menuItems = [
  {
    name: 'Doro Wot',
    description: 'Traditional chicken stew with berbere, egg and injera.',
    price: '550 ETB',
    category: 'Ethiopian',
    image: new URL('@/assets/food/doro-wot.jpg', import.meta.url).href
  },
  {
    name: 'Special Tibs',
    description: 'Tender beef sautéed with onions, peppers and spices.',
    price: '700 ETB',
    category: 'Ethiopian',
    image: new URL('@/assets/food/tibs.jpg', import.meta.url).href
  },
  {
    name: 'Vegetarian Combo',
    description: 'Selection of lentils, vegetables and traditional Ethiopian sauces.',
    price: '500 ETB',
    category: 'Ethiopian',
    image: new URL('@/assets/food/vegetarian.jpg', import.meta.url).href
  },
  {
    name: 'Special Breakfast',
    description: 'Eggs, bread, fresh vegetables and Ethiopian coffee.',
    price: '450 ETB',
    category: 'Breakfast',
    image: new URL('@/assets/food/breakfast.jpg', import.meta.url).href
  },
  {
    name: 'Grilled Chicken',
    description: 'Grilled chicken served with vegetables and fries.',
    price: '750 ETB',
    category: 'Main Dishes',
    image: new URL('@/assets/food/grilled-chicken.jpg', import.meta.url).href
  },
  {
    name: 'Beef Steak',
    description: 'Tender grilled beef steak served with vegetables and potatoes.',
    price: '950 ETB',
    category: 'Main Dishes',
    image: new URL('@/assets/food/steak.jpg', import.meta.url).href
  },
  {
    name: 'Chicken Pasta',
    description: 'Creamy pasta with grilled chicken and vegetables.',
    price: '650 ETB',
    category: 'Pasta',
    image: new URL('@/assets/food/pasta.jpg', import.meta.url).href
  },
  {
    name: 'Spaghetti Bolognese',
    description: 'Spaghetti served with rich beef tomato sauce.',
    price: '600 ETB',
    category: 'Pasta',
    image: new URL('@/assets/food/spaghetti.jpg', import.meta.url).href
  },
  {
    name: 'Fresh Juice',
    description: 'Fresh seasonal fruit juice.',
    price: '250 ETB',
    category: 'Drinks',
    image: new URL('@/assets/food/juice.jpg', import.meta.url).href
  },
  {
    name: 'Ethiopian Coffee',
    description: 'Traditional Ethiopian coffee served fresh.',
    price: '200 ETB',
    category: 'Drinks',
    image: new URL('@/assets/food/coffee.jpg', import.meta.url).href
  }
]

const featuredItems = computed(() => menuItems.slice(0, 6))

const filteredItems = computed(() => {
  if (activeCategory.value === 'All') {
    return menuItems
  }

  return menuItems.filter(
    item => item.category === activeCategory.value
  )
})

const openMenu = () => {
  showFullMenu.value = true
  document.body.style.overflow = 'hidden'
}

const closeMenu = () => {
  showFullMenu.value = false
  document.body.style.overflow = ''
}
</script>


<template>

  <section
    id="restaurant"
    class="restaurant-section"
  >

    <!-- =================================
         HEADER
    ================================= -->

    <div class="restaurant-header">

      <span class="subtitle">
        SOLJAM HOTEL
      </span>

      <h2>
        Our Restaurant
      </h2>

      <p>
        Discover delicious Ethiopian and international cuisine
        prepared with fresh ingredients and served with genuine
        Soljam hospitality.
      </p>

    </div>


    <!-- =================================
         CATEGORY BUTTONS
    ================================= -->

    <div class="categories">

      <button
        v-for="category in categories"
        :key="category"
        :class="{ active: activeCategory === category }"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>

    </div>


    <!-- =================================
         FEATURED MENU
    ================================= -->

    <div class="menu-grid">

      <article
        v-for="item in featuredItems"
        :key="item.name"
        class="menu-card"
      >

        <div class="food-image">

          <img
            :src="item.image"
            :alt="item.name"
          />

        </div>


        <div class="menu-content">

          <div class="menu-title">

            <h3>
              {{ item.name }}
            </h3>

            <span>
              {{ item.price }}
            </span>

          </div>

          <p>
            {{ item.description }}
          </p>

        </div>

      </article>

    </div>


    <!-- =================================
         VIEW FULL MENU
    ================================= -->

    <div class="view-menu-container">

      <button
        class="view-menu-button"
        @click="openMenu"
      >
        View Full Menu
        <i class="fa-solid fa-arrow-right"></i>
      </button>

    </div>


    <!-- =================================
         FULL MENU MODAL
    ================================= -->

    <div
      v-if="showFullMenu"
      class="menu-overlay"
      @click.self="closeMenu"
    >

      <div class="full-menu">

        <!-- HEADER -->

        <div class="full-menu-header">

          <div>

            <span class="subtitle">
              SOLJAM HOTEL
            </span>

            <h2>
              Full Menu
            </h2>

          </div>

          <button
            class="close-button"
            @click="closeMenu"
            aria-label="Close menu"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>

        </div>


        <!-- CATEGORIES -->

        <div class="full-menu-categories">

          <button
            v-for="category in categories"
            :key="category"
            :class="{
              active: activeCategory === category
            }"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>

        </div>


        <!-- FULL MENU ITEMS -->

        <div class="full-menu-grid">

          <article
            v-for="item in filteredItems"
            :key="item.name"
            class="full-menu-card"
          >

            <img
              :src="item.image"
              :alt="item.name"
            />

            <div class="full-menu-info">

              <div class="full-menu-title">

                <h3>
                  {{ item.name }}
                </h3>

                <strong>
                  {{ item.price }}
                </strong>

              </div>

              <p>
                {{ item.description }}
              </p>

            </div>

          </article>

        </div>

      </div>

    </div>

  </section>

</template>


<style scoped>

/* ========================================
   SECTION
======================================== */

.restaurant-section {
  width: 100%;

  padding: 100px 30px;

  background: #f8f8f8;

  box-sizing: border-box;

  scroll-margin-top: 140px;
}


/* ========================================
   HEADER
======================================== */

.restaurant-header {
  max-width: 750px;

  margin: 0 auto 40px;

  text-align: center;
}

.subtitle {
  display: block;

  margin-bottom: 10px;

  color: #b08d57;

  font-size: 13px;

  font-weight: 700;

  letter-spacing: 3px;
}

.restaurant-header h2 {
  margin: 0 0 15px;

  color: #222;

  font-size: 42px;
}

.restaurant-header p {
  margin: 0;

  color: #666;

  font-size: 16px;

  line-height: 1.8;
}


/* ========================================
   CATEGORIES
======================================== */

.categories {
  display: flex;

  justify-content: center;

  flex-wrap: wrap;

  gap: 10px;

  margin-bottom: 40px;
}

.categories button,
.full-menu-categories button {
  padding: 10px 20px;

  border: 1px solid #b08d57;

  border-radius: 25px;

  background: transparent;

  color: #8b6d43;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s ease;
}

.categories button:hover,
.categories button.active,
.full-menu-categories button:hover,
.full-menu-categories button.active {
  background: #b08d57;

  color: white;
}


/* ========================================
   MENU GRID
======================================== */

.menu-grid {
  max-width: 1150px;

  margin: auto;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 25px;
}


/* ========================================
   MENU CARD
======================================== */

.menu-card {
  overflow: hidden;

  background: white;

  border-radius: 8px;

  box-shadow:
    0 5px 20px rgba(0, 0, 0, 0.08);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.menu-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0 12px 30px rgba(0, 0, 0, 0.12);
}


/* ========================================
   FOOD IMAGE
======================================== */

.food-image {
  width: 100%;

  height: 220px;

  overflow: hidden;
}

.food-image img {
  width: 100%;

  height: 100%;

  object-fit: cover;

  display: block;

  transition: transform 0.4s ease;
}

.menu-card:hover .food-image img {
  transform: scale(1.05);
}


/* ========================================
   MENU CONTENT
======================================== */

.menu-content {
  padding: 20px;
}

.menu-title {
  display: flex;

  justify-content: space-between;

  align-items: flex-start;

  gap: 15px;
}

.menu-title h3 {
  margin: 0;

  color: #222;

  font-size: 18px;
}

.menu-title span {
  flex-shrink: 0;

  color: #b08d57;

  font-weight: 700;
}

.menu-content p {
  margin: 10px 0 0;

  color: #777;

  font-size: 14px;

  line-height: 1.6;
}


/* ========================================
   VIEW MENU BUTTON
======================================== */

.view-menu-container {
  text-align: center;

  margin-top: 45px;
}

.view-menu-button {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  padding: 15px 30px;

  border: none;

  border-radius: 4px;

  background: #b08d57;

  color: white;

  font-size: 14px;

  font-weight: 700;

  text-transform: uppercase;

  cursor: pointer;

  transition: 0.2s ease;
}

.view-menu-button:hover {
  background: #967445;

  transform: translateY(-2px);
}


/* ========================================
   FULL MENU OVERLAY
======================================== */

.menu-overlay {
  position: fixed;

  inset: 0;

  z-index: 20000;

  padding: 40px;

  background: rgba(0, 0, 0, 0.7);

  overflow-y: auto;

  box-sizing: border-box;
}


/* ========================================
   FULL MENU
======================================== */

.full-menu {
  width: 100%;

  max-width: 1200px;

  margin: auto;

  padding: 40px;

  background: #fff;

  border-radius: 10px;

  box-sizing: border-box;
}


/* ========================================
   FULL MENU HEADER
======================================== */

.full-menu-header {
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 30px;
}

.full-menu-header h2 {
  margin: 0;

  font-size: 36px;

  color: #222;
}

.close-button {
  width: 42px;

  height: 42px;

  border: none;

  border-radius: 50%;

  background: #f2f2f2;

  color: #222;

  font-size: 18px;

  cursor: pointer;
}

.close-button:hover {
  background: #b08d57;

  color: white;
}


/* ========================================
   FULL MENU CATEGORIES
======================================== */

.full-menu-categories {
  display: flex;

  gap: 10px;

  flex-wrap: wrap;

  margin-bottom: 35px;
}


/* ========================================
   FULL MENU GRID
======================================== */

.full-menu-grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 20px;
}


/* ========================================
   FULL MENU CARD
======================================== */

.full-menu-card {
  display: flex;

  gap: 20px;

  padding: 15px;

  border: 1px solid #eee;

  border-radius: 8px;

  background: #fff;
}

.full-menu-card img {
  width: 130px;

  height: 110px;

  object-fit: cover;

  border-radius: 6px;

  flex-shrink: 0;
}

.full-menu-info {
  flex: 1;
}

.full-menu-title {
  display: flex;

  justify-content: space-between;

  gap: 15px;
}

.full-menu-title h3 {
  margin: 0;

  color: #222;

  font-size: 17px;
}

.full-menu-title strong {
  color: #b08d57;

  white-space: nowrap;
}

.full-menu-info p {
  margin: 8px 0 0;

  color: #777;

  font-size: 13px;

  line-height: 1.5;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 950px) {

  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .full-menu-grid {
    grid-template-columns: 1fr;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .restaurant-section {
    padding: 70px 15px;
  }

  .restaurant-header h2 {
    font-size: 32px;
  }

  .restaurant-header p {
    font-size: 14px;
  }

  .menu-grid {
    grid-template-columns: 1fr;
  }

  .menu-overlay {
    padding: 10px;
  }

  .full-menu {
    padding: 20px;
  }

  .full-menu-header h2 {
    font-size: 28px;
  }

  .full-menu-card {
    flex-direction: column;
  }

  .full-menu-card img {
    width: 100%;

    height: 180px;
  }

}
</style>