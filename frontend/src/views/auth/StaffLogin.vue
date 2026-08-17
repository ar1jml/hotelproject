<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  error.value = ''

  // Temporary staff credentials
  if (
    email.value === 'staff@hotel.com' &&
    password.value === 'staff123'
  ) {
    router.push('/staff/dashboard')
  } else {
    error.value = 'Invalid staff email or password'
  }
}
</script>

<template>
  <div class="login-page">
    <div class="login-card">

      <h1>Staff Login</h1>

      <p>
        Sign in to access the reception panel.
      </p>

      <form @submit.prevent="handleLogin">

        <div class="form-group">
          <label>Email</label>

          <input
            v-model="email"
            type="email"
            placeholder="staff@hotel.com"
            required
          />
        </div>

        <div class="form-group">
          <label>Password</label>

          <input
            v-model="password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>

        <p v-if="error" class="error">
          {{ error }}
        </p>

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f7fa;
}

.login-card {
  width: 400px;
  padding: 40px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

h1 {
  margin-bottom: 8px;
}

p {
  color: #777;
  margin-bottom: 25px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
}

input {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 6px;
}

button {
  width: 100%;
  padding: 13px;
  border: none;
  border-radius: 6px;
  background: #111827;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.error {
  color: red;
  margin-bottom: 15px;
}
</style>