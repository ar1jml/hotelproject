<template>

<header class="top-header">


  <!-- left -->
  <div class="logo-container">
    <img src="@/assets/logo.png" class="logo" />
  </div>


  <!-- center nav -->
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



  <!-- right -->
  <div class="contact">


    <div class="contact-text">

      <span>
        Have Question?
      </span>

      <a href="tel:+251909555556">
        +(251) 966-90-1919
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

padding:0 15px;

background:rgb(215, 207, 207);

position:relative;

}


/* LOGO */

.logo{

width:50px;
height:50px;

border-radius:50%;

object-fit:cover;

}


/* NAV */

.nav{

display:flex;

gap:15px;

position:absolute;

left:40%;

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

font-size:30px;

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

right:0;

width:100%;

box-sizing:border-box;

background:white;

flex-direction:column;

padding:20px;

transform:none;

z-index:999;

max-height:calc(100vh - 80px);

overflow:auto;

}


.nav.open{

display:flex;

}

/* make links full-width & wrap on small screens */

.nav a{

display:block;

padding:10px 0;

text-decoration:none;

color:#222;

font-weight:500;

white-space:normal;

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