import './assets/style/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.globalProperties.$filters = {
    formatNumber(number) {
        return Intl.NumberFormat('fr').format(number);
    }
}

app.use(router)

app.mount('#app')
