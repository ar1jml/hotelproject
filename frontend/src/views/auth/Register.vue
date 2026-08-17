<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

const register = async () => {
  error.value = ''

  if (!firstName.value || !lastName.value || !email.value || !password.value) {
    error.value = 'Please fill in all fields.'
    return
  }

  try {
    loading.value = true

    // We will connect this to FastAPI later
    console.log({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    })

    // Temporary navigation
    router.push('/admin/login')
  } catch (err) {
    error.value = 'Something went wrong. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="register-page">
    <div class="register-card">

      <div class="logo">
        🏨
      </div>

      <h1>Hotel Manager</h1>
      <p class="subtitle">Create your account</p>

      <form @submit.prevent="register">

        <div class="name-row">
          <div class="form-group">
            <label>First Name</label>
            <input
              v-model="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>

          <div class="form-group">
            <label>Last Name</label>
            <input
              v-model="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div class="form-group">
          <label>Email Address</label>

          <div class="input-wrapper">
            <span>✉</span>

            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div class="form-group">
          <label>Password</label>

          <div class="input-wrapper">
            <span>🔒</span>

            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Create a password"
            />

            <button
              type="button"
              class="password-toggle"
              @click="showPassword = !showPassword"
            >
              {{ showPassword ? '◉' : '○' }}
            </button>
          </div>
        </div>

        <p v-if="error" class="error">
          {{ error }}
        </p>

        <button
          type="submit"
          class="register-button"
          :disabled="loading"
        >
          {{ loading ? 'Creating Account...' : 'Create Account' }}
        </button>

      </form>

      <p class="login-text">
        Already have an account?
        <button @click="router.push('/admin/login')">
          Sign in
        </button>
      </p>

    </div>
  </div>
</template>

<style scoped>
.register-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eef3ff;
  padding: 30px;
}

.register-card {
  width: 100%;
  max-width: 430px;
  background: white;
  padding: 35px 30px 25px;
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
}

.logo {
  width: 42px;
  height: 42px;
  margin: 0 auto 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
}

h1 {
  text-align: center;
  margin: 0;
  font-size: 25px;
  font-weight: 700;
  color: #111827;
}

.subtitle {
  text-align: center;
  margin: 7px 0 28px;
  color: #777;
  font-size: 14px;
}

.name-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.form-group {
  margin-bottom: 18px;
}

label {
  display: block;
  margin-bottom: 7px;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
}

input {
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  border: 1px solid #d7dce5;
  border-radius: 6px;
  padding: 0 12px;
  font-size: 14px;
  outline: none;
}

input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-wrapper > span {
  position: absolute;
  left: 12px;
  z-index: 1;
  font-size: 14px;
}

.input-wrapper input {
  padding-left: 38px;
  padding-right: 42px;
}

.password-toggle {
  position: absolute;
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 16px;
}

.register-button {
  width: 100%;
  height: 44px;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 4px;
}

.register-button:hover {
  background: #1d4ed8;
}

.register-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error {
  color: #dc2626;
  font-size: 13px;
  margin: -5px 0 12px;
}

.login-text {
  text-align: center;
  margin: 22px 0 0;
  color: #777;
  font-size: 13px;
}

.login-text button {
  border: none;
  background: none;
  color: #2563eb;
  font-weight: 600;
  cursor: pointer;
}
</style>