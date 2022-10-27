import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueResource from 'vue-resource'
import App from './App.vue'
import vuetify from './plugins/vuetify' // path to vuetify export
import VueRouter from 'vue-router'
import Routes from './router/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'
import AOS from 'aos';
import 'aos/dist/aos.css';


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap-vue/dist/bootstrap-vue.css'

AOS.init();

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCompositionAPI)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(CardPlugin)




const router = new VueRouter({
  mode: 'history',
  routes : Routes
})



const app = createApp({
  vuetify,
  pinia: createPinia(),
  router:router,
  render: () => h(App),
  
})

app.use(PiniaVuePlugin)

app.mount('#app')
function createWebHistory() {
  throw new Error('Function not implemented.')
}

