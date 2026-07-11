import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')