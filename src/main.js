import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from "vue-gtag";

if (process.env.NODE_ENV === "production") {
  createApp(App).use(store).use(router).use(VueGtag, {config: {id: 'G-KWMEVYXEHM'}}).mount('#app')
} else {
  createApp(App).use(store).use(router).mount('#app')
}