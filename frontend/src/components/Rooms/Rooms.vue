<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"

import RoomCard from "./RoomCard.vue"


const rooms = ref([])


onMounted(async () => {

    const response = await axios.get(
        "http://127.0.0.1:8000/room-categories"
    )

    rooms.value = response.data

})

</script>


<template>

<section>

    <h1>Our Rooms</h1>
    <h2>Explore our luxurious rooms and suites</h2>


    <RoomCard
        v-for="room in rooms"
        :key="room.id"
        :room="room"
    />

</section>

</template>