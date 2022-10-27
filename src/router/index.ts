import createWebHistory  from 'vue-router'
import createRouter  from 'vue-router'
import Router from 'vue-router'
import  VueRouter  from 'vue-router'
import Account from '../pages/Account.vue'
import Product from '../pages/Product.vue'
import ProductCategory from '../pages/ProductCategory.vue'
import home from '../pages/home.vue'
import last from '../views/last-arives.vue'
import cart from '../pages/cart.vue'
import checkout from '../pages/Checkout.vue'

const routes=[
    {path: '/', component: home },
    { path: '/product/:slug', component: Product },
    {path: '/product', component: Product},
    {path: '/product-category', component: ProductCategory},
    {path: '/last' , component: last } ,
    {path: '/account' , component: Account } ,
    {path : '/cart' , component: cart },
    {path : '/checkout' , component: checkout},

]



// const router = new Router({
//     mode: 'history',
//     routes: [
//       // Each of these routes are loaded asynchronously, when a user first navigates to each corresponding endpoint.
//       // The route will load once into memory, the first time it's called, and no more on future calls.
//       // This behavior can be observed on the network tab of your browser dev tools.
//       {
//         path: '/',
//         name: 'home',
//         component: home
//         }
  
//     ]
//   })


const router = new VueRouter({
    mode: 'history',
    routes: routes
  })




export default routes

