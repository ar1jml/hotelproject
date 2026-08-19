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

  box-sizing: border-box;

  display: flex;

  justify-content: center;

  align-items: flex-start;

  padding: 90px 40px 120px;

  background: #f8f9fa;
}


/* ========================================
   ACCOUNT CONTENT
======================================== */

.account-content {
  width: 100%;

  max-width: 750px;

  background: white;

  padding: 60px;

  box-sizing: border-box;

  border-radius: 10px;

  box-shadow:
    0 5px 25px rgba(0, 0, 0, 0.08);

  text-align: left;
}


/* ========================================
   TITLE
======================================== */

h1 {
  margin: 0 0 45px;

  text-align: center;

  font-size: 42px;

  font-weight: 600;

  color: #222;
}


/* ========================================
   FORM
======================================== */

.account-form {
  width: 100%;
}


.form-group {
  margin-bottom: 30px;
}


.form-group label {
  display: block;

  margin-bottom: 12px;

  font-size: 18px;

  font-weight: 600;

  color: #333;
}


.form-group input[type="text"],
.form-group input[type="password"] {
  width: 100%;

  height: 58px;

  padding: 0 18px;

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
  width: 100%;

  height: 58px;

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
   LARGE SCREENS
======================================== */

@media (min-width: 1200px) {

  .account-page {
    padding-top: 110px;

    padding-bottom: 150px;
  }

  .account-content {
    max-width: 850px;

    padding: 70px;
  }

  h1 {
    font-size: 48px;
  }

}


/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {

  .account-page {
    padding: 70px 30px 100px;
  }

  .account-content {
    max-width: 700px;

    padding: 50px;
  }

}


/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {

  .account-page {
    min-height: calc(100vh - 138px);

    padding: 50px 15px 80px;
  }


  .account-content {
    padding: 35px 25px;

    border-radius: 7px;
  }


  h1 {
    font-size: 32px;

    margin-bottom: 35px;
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