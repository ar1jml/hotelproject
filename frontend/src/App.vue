<script setup>
import { ref, onMounted } from "vue"
import api from "./services/api"

const rooms = ref([])

onMounted(async () => {

  try {

    const response = await api.get("/room-categories/")

    console.log(response.data)

    rooms.value = response.data

  } catch(error) {

    console.log(error)

  }

})
import Header from './components/header/Header.vue'
import Rooms from './components/Rooms/RoomCategories.vue'
</script>


<template>
 <Rooms />
  <Header />
     <RouterView />
  <div>

    <h1>Room Categories</h1>

    <div 
      v-for="room in rooms"
      :key="room.id"
    >
      <h2>{{ room.name }}</h2>
    </div>

  </div>

</template>