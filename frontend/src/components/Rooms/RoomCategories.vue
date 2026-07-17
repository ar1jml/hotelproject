<script setup>

import { ref, onMounted } from "vue"
import api from "@/services/api"


const categories = ref([])


async function getRoomCategories(){

    try {

        const response = await api.get(
            "/room-categories"
        )

        categories.value = response.data

    }

    catch(error){

        console.log(error)

    }

}


onMounted(() => {

    getRoomCategories()

})


</script>


<template>

<section class="room-categories">

    <h2>
        Our Rooms
    </h2>


    <div 
    v-for="room in categories"
    :key="room.id"
    class="room-card"
    >

        <h3>
            {{ room.name }}
        </h3>

<h3>Arafat J.</h3>
        <p>
            {{ room.description }}
        </p>


        <span>
            Maximum Guests:
            {{ room.max_guests }}
        </span>


    </div>


</section>

</template>


<style scoped>

.room-card{

    border:1px solid #ddd;
    padding:20px;
    margin:15px;
    border-radius:10px;

}

</style>