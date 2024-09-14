import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './styles/global.scss'
import router from '@/router/router'
import components from '@/components/UI/ui.js'


const app = createApp(App);
const pinia = createPinia();

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(pinia)
    .use(router)
    .mount('#app');
