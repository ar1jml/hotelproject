<template>
  <section class="account-page">

    <div class="account-content">

      <h1>My Account</h1>

      <form @submit.prevent="login" class="account-form">

        <div class="form-group">
          <label for="username">
            Username or Email Address
          </label>

          <input
            id="username"
            v-model="username"
            type="text"
            required
          />
        </div>


        <div class="form-group">
          <label for="password">
            Password
          </label>

          <input
            id="password"
            v-model="password"
            type="password"
            required
          />
        </div>


        <div class="remember">

          <label>
            <input
              v-model="rememberMe"
              type="checkbox"
            />

            <span>Remember Me</span>
          </label>

        </div>


        <a
          href="#"
          class="lost-password"
          @click.prevent="lostPassword"
        >
          Lost your password?
        </a>


        <button
          type="submit"
          class="login-button"
        >
          Login
        </button>

      </form>

    </div>

  </section>
</template>


<script setup>
import { ref } from "vue"

const username = ref("")
const password = ref("")
const rememberMe = ref(false)

const login = () => {
  console.log("Login:", {
    username: username.value,
    password: password.value,
    rememberMe: rememberMe.value
  })
}

const lostPassword = () => {
  console.log("Lost password clicked")
}
</script>


<style scoped>

.account-page {
  width: 100%;
  min-height: calc(100vh - 138px);

  margin: 0;
  padding: 80px 5% 120px;

  box-sizing: border-box;

  background: #f8f9fa;

  display: block;
}


/* ========================================
   FULL WIDTH ACCOUNT CONTENT
======================================== */

.account-content {
  width: 100%;
  max-width: none;

  margin: 0 auto;

  padding: 70px 6% 90px;

  box-sizing: border-box;

  background: white;

  border-radius: 0;

  box-shadow:
    0 5px 25px rgba(0, 0, 0, 0.08);

  text-align: left;
}


/* ========================================
   TITLE
======================================== */

h1 {
  margin: 0 0 55px;

  text-align: center;

  font-size: 48px;

  font-weight: 600;

  color: #222;
}


/* ========================================
   FORM
======================================== */

.account-form {
  width: 100%;
}


/* ========================================
   FORM GROUP
======================================== */

.form-group {
  width: 100%;

  margin-bottom: 32px;
}


.form-group label {
  display: block;

  margin-bottom: 12px;

  font-size: 19px;

  font-weight: 600;

  color: #333;
}


/* ========================================
   INPUTS
======================================== */

.form-group input[type="text"],
.form-group input[type="password"] {
  display: block;

  width: 100%;

  height: 62px;

  padding: 0 20px;

  box-sizing: border-box;

  border: 1px solid #ccc;

  border-radius: 5px;

  background: white;

  font-size: 18px;

  outline: none;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}


.form-group input:focus {
  border-color: #1f4ca3;

  box-shadow:
    0 0 0 3px rgba(31, 76, 163, 0.1);
}


/* ========================================
   REMEMBER ME
======================================== */

.remember {
  margin-bottom: 22px;
}


.remember label {
  display: flex;

  align-items: center;

  gap: 10px;

  cursor: pointer;

  font-size: 17px;

  color: #333;
}


.remember input {
  width: 18px;

  height: 18px;

  cursor: pointer;
}


/* ========================================
   LOST PASSWORD
======================================== */

.lost-password {
  display: inline-block;

  margin-bottom: 35px;

  color: #1f4ca3;

  text-decoration: none;

  font-size: 17px;
}


.lost-password:hover {
  text-decoration: underline;
}


/* ========================================
   LOGIN BUTTON
======================================== */

.login-button {
  display: block;

  width: 100%;

  height: 62px;

  border: none;

  border-radius: 30px;

  background: #1f4ca3;

  color: white;

  font-size: 18px;

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}


.login-button:hover {
  background: #173d84;

  transform: translateY(-1px);
}


/* ========================================
   LARGE SCREEN
======================================== */

@media (min-width: 1400px) {

  .account-page {
    padding-left: 3%;
    padding-right: 3%;
  }

  .account-content {
    padding-left: 7%;
    padding-right: 7%;
  }

  h1 {
    font-size: 52px;
  }

}


/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {

  .account-page {
    padding: 60px 25px 100px;
  }

  .account-content {
    padding: 50px 40px 70px;
  }

  h1 {
    font-size: 40px;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .account-page {
    min-height: calc(100vh - 138px);

    padding: 40px 12px 70px;
  }

  .account-content {
    padding: 40px 20px 60px;
  }

  h1 {
    font-size: 32px;

    margin-bottom: 40px;
  }

  .form-group label {
    font-size: 16px;
  }

  .form-group input[type="text"],
  .form-group input[type="password"] {
    height: 52px;

    font-size: 16px;
  }

  .remember label {
    font-size: 15px;
  }

  .lost-password {
    font-size: 15px;
  }

  .login-button {
    height: 52px;

    font-size: 16px;
  }

}

</style>