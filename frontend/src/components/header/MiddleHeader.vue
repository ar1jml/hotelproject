<template>
  <div class="middle-header">

    <!-- Social Media -->
    <div class="social-links">
      <a href="#" aria-label="Facebook">
        <i class="fa-brands fa-facebook-f"></i>
      </a>

      <a href="#" aria-label="Telegram">
        <i class="fa-brands fa-telegram"></i>
      </a>

      <a href="#" aria-label="TikTok">
        <i class="fa-brands fa-tiktok"></i>
      </a>

      <a href="#" aria-label="WhatsApp">
        <i class="fa-brands fa-whatsapp"></i>
      </a>
    </div>


    <!-- Desktop Links -->
    <div class="quick-links">
      <a href="#">Get Help</a>
      <a href="#">Reservations</a>
      <a href="#">Customer Service</a>
    </div>


    <!-- Mobile -->
    <div class="mobile-actions">

      <button class="account-btn">
        <i class="fa-regular fa-user"></i>
      </button>

      <button class="mobile-book-btn">
        Book Now
      </button>

    </div>

  </div>
</template>


<style scoped>

/* ========================================
   MIDDLE HEADER
======================================== */

.middle-header {
  width: 100%;
  height: 38px;

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 45px;

  background: #c2b6b6;

  border-top: 1px solid rgba(255, 255, 255, 0.5);
}


/* ========================================
   SOCIAL LINKS
======================================== */

.social-links {
  display: flex;
  align-items: center;

  gap: 20px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 24px;
  height: 24px;

  text-decoration: none;

  color: #1f4ca3;

  font-size: 20px;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.social-links a:hover {
  color: #173d84;

  transform: translateY(-1px);
}


/* ========================================
   QUICK LINKS
======================================== */

.quick-links {
  display: flex;
  align-items: center;

  gap: 35px;
}

.quick-links a {
  text-decoration: none;

  color: #111;

  font-size: 17px;
  font-weight: 500;

  white-space: nowrap;

  transition: color 0.2s ease;
}

.quick-links a:hover {
  color: #1f4ca3;
}


/* ========================================
   MOBILE ACTIONS
======================================== */

.mobile-actions {
  display: none;
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 1100px) {

  .middle-header {
    padding: 0 25px;
  }

  .quick-links {
    gap: 22px;
  }

  .quick-links a {
    font-size: 15px;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 768px) {

  .middle-header {
    height: 55px;

    padding: 0 15px;
  }


  /* Social icons stay visible */

  .social-links {
    gap: 16px;
  }

  .social-links a {
    width: 24px;
    height: 24px;

    font-size: 19px;
  }


  /* Hide desktop links */

  .quick-links {
    display: none;
  }


  /* Mobile actions */

  .mobile-actions {
    display: flex;

    align-items: center;

    gap: 10px;
  }


  .account-btn {
    display: flex;

    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    border: none;

    border-radius: 50%;

    background: #1f4ca3;

    color: white;

    font-size: 16px;

    cursor: pointer;
  }


  .mobile-book-btn {
    border: none;

    background: #1f4ca3;

    color: white;

    padding: 9px 15px;

    border-radius: 20px;

    font-size: 13px;

    font-weight: 600;

    cursor: pointer;
  }

}


/* ========================================
   VERY SMALL PHONES
======================================== */

@media (max-width: 450px) {

  .middle-header {
    padding: 0 10px;
  }

  .social-links {
    gap: 12px;
  }

  .social-links a {
    font-size: 17px;
  }

  .mobile-book-btn {
    padding: 8px 12px;

    font-size: 12px;
  }

}

</style>