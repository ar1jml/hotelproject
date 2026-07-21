<script setup>

defineProps({
    room: Object
})

</script>


<template>

<div class="room-card">

<h2>
{{ room.name }}
</h2>


<p>
{{ room.description }}
</p>


<h3>
${{ room.base_price }}
</h3>


<p>
Guests: {{ room.capacity }}
</p>


</div>

</template>