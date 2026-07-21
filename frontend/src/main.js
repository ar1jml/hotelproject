import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

import router from './router'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')