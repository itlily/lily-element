import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import LilyElement from 'lily-element'
import '@lily-element/theme/index.css'

createApp(App).use(LilyElement).mount('#app')
