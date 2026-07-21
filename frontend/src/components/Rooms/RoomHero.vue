<script setup>
import BookingSearch from "./BookingSearch.vue"
</script>


<template>

<section class="room-hero">

<div class="overlay">


<h1>
BOOK NOW
</h1>


<BookingSearch />


</div>


</section>


</template>


<style scoped>

.room-hero{

height:520px;

background-image:
linear-gradient(
rgba(0,0,0,.45),
rgba(0,0,0,.45)
),
url("@/assets/rooms/hero-room.jpg");


background-size:cover;

background-position:center;

display:flex;

align-items:center;

justify-content:center;

}



.overlay{

width:100%;

text-align:center;

}


h1{

color:white;

font-size:45px;

font-weight:700;

margin-bottom:35px;

}


</style>