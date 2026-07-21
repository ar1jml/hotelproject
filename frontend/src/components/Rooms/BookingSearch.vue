<script setup>

import {ref} from "vue"


const checkIn = ref("")
const checkOut = ref("")
const adults = ref(1)
const children = ref(0)


</script>


<template>

<div class="booking-box">


<div>

<label>
Check-in *
</label>

<input 
type="date"
v-model="checkIn"
/>

</div>



<div>

<label>
Check-out *
</label>

<input 
type="date"
v-model="checkOut"
/>

</div>



<div>

<label>
Adults
</label>

<select v-model="adults">

<option 
v-for="i in 10"
:key="i">

{{i}}

</option>

</select>

</div>




<div>

<label>
Children
</label>

<select v-model="children">

<option 
v-for="i in 6"
:key="i">

{{i}}

</option>

</select>

</div>



<button>

Search

</button>



</div>

</template>



<style scoped>


.booking-box{

background:white;

padding:30px;

border-radius:15px;

display:flex;

gap:30px;

align-items:end;

width:80%;

margin:auto;

}



label{

display:block;

font-size:18px;

margin-bottom:8px;

text-align:left;

}


input,
select{

height:60px;

width:250px;

border:1px solid #1d4fa3;

border-radius:5px;

padding:15px;

font-size:18px;

}



button{

height:60px;

padding:0 50px;

border:none;

border-radius:40px;

background:#204a99;

color:white;

font-size:20px;

font-weight:bold;

}


</style>