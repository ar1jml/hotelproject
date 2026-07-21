<script setup>

import { ref, onMounted } from "vue"
import api from "@/services/api"

import RoomCard from "./RoomCard.vue"


const rooms = ref([])


const getRooms = async () => {

    try {

        const response = await api.get("/room-categories")

        rooms.value = response.data

    } catch(error) {

        console.log(error)

    }

}


onMounted(() => {
    getRooms()
})

</script>


<template>

<section class="rooms">

    <h1>Our Rooms</h1>


    <div class="room-grid">

        <RoomCard
            v-for="room in rooms"
            :key="room.id"
            :room="room"
        />

    </div>


</section>

</template>