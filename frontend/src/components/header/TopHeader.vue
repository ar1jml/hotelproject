<template>

<header class="top-header">


  <!-- LEFT -->
  <div class="logo-container">
    <img src="@/assets/logo.png" class="logo" />
  </div>


  <!-- CENTER NAV -->
  <nav class="nav" :class="{open: menuOpen}">

    <a href="#">Home</a>
    <a href="#">Rooms</a>
    <a href="#">Restaurants</a>
    <a href="#">Blogs</a>
    <a href="#">Our Gallery</a>
    <a href="#">Contact Us</a>

  </nav>



  <!-- MOBILE MENU -->
  <button class="hamburger" @click="toggleMenu">

    <font-awesome-icon
      :icon="menuOpen ? faXmark : faBars"
    />

  </button>



  <!-- RIGHT -->
  <div class="contact">


    <div class="contact-text">

      <span>
        Have Question?
      </span>

      <a href="tel:+251909555556">
        +(251) 909-55-5556
      </a>

    </div>



    <button class="book-btn">
      Book Your Stay
    </button>


  </div>



</header>

</template>

<style scoped>
.top-header{

height:100px;

display:flex;

align-items:center;

padding:0 35px;

background:white;

position:relative;

}


/* LOGO */

.logo{

width:60px;
height:60px;

border-radius:50%;

object-fit:cover;

}


/* NAV */

.nav{

display:flex;

gap:20px;

position:absolute;

left:50%;

transform:translateX(-50%);

}


.nav a{

text-decoration:none;

color:#222;

font-weight:500;

white-space:nowrap;

}


/* RIGHT */

.contact{

margin-left:auto;

display:flex;

align-items:center;

gap:25px;

}


.contact-text{

display:flex;

flex-direction:column;

}


.contact-text span{

font-size:14px;

}


.contact-text a{

text-decoration:none;

color:black;

}


.book-btn{

background:#1f4ca3;

color:white;

border:none;

padding:12px 20px;

border-radius:25px;

}


.hamburger{

display:none;

}



/* MOBILE */

@media(max-width:768px){


.top-header{

height:80px;

display:grid;

grid-template-columns:1fr auto 1fr;

padding:0 15px;

}


/* logo left */

.logo-container{

justify-self:start;

}


/* hamburger center */

.hamburger{

display:block;

justify-self:center;

border:none;

background:none;

font-size:28px;

color:#1f4ca3;

}


/* contact right */

.contact{

justify-self:end;

margin:0;

}


.contact-text span{

font-size:11px;

}


.contact-text a{

font-size:11px;

}



/* hide book */

.book-btn{

display:none;

}


/* mobile menu */

.nav{

display:none;

position:absolute;

top:80px;

left:0;

width:100%;

background:white;

flex-direction:column;

padding:20px;

transform:none;

}


.nav.open{

display:flex;

}


}
</style>







<script setup>

import {ref} from "vue";

import {
faBars,
faXmark
} from "@fortawesome/free-solid-svg-icons";


const menuOpen = ref(false);


const toggleMenu=()=>{

menuOpen.value=!menuOpen.value;

};

</script>