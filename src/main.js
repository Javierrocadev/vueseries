import { createApp } from 'vue'
import App from './App.vue'
//importar router
import router from './Router'
createApp(App)
.use(router)
.mount('#app')
