<script  setup>
import slideVue from '../views/slide.vue';
import Slide from '../views/slide.vue';
import OurOptions from '../views/our-options.vue';
import OurCategory from '../views/our-category.vue';
import ProductSlider from '../views/product-slider.vue';
import ProductCategoryCard from '../views/product-category-card.vue';
import CategoryOffers from '../views/category-offers.vue';
import Wonderfuloffers from '../views/wonderfuloffers.vue';
import LastArticles from '../views/last-articles.vue';
import OurBrands from '../views/our-brands.vue';
import axios from 'axios';
import { ref , computed , onMounted} from 'vue-demi';
import { onBeforeMount } from 'vue-demi';
import { useCounterStore } from "../stores/index";
import Footermain from "../views/footermain.vue";
import AccountSidebar from "../views/account-sidebar.vue";
import Menusbar from '../views/menusbar.vue';
let store = useCounterStore();
let ourproductdata = ref();
let ourproductdatalast = ref();
let my = ref()
// let index = ref()
// connect to the product 



// let  mydata = ref()
//  const  data =   getproduct().then((response)=> {
//     mydata.value = response.data


//     console.log("data funtion", mydata.value.reverse())
   
//    return response.data   

//  }).catch((error)=>{
//     return error
//  })

//  console.log("data" , data)

const productsfirst = computed(() => {
  return store.getproductsfirst
})

const products = computed(() => {
  
  return store.products
})


onMounted(() => {
  store.fetchProducts();
})

















let newproduct = " محصولات جدید "
let moreseller = " پرفروش ترین محصولات "
let suggestedproduct = "محصولات پیشنهادی "
</script>
<template>
<div>
  <Menusbar></Menusbar>
<Slide>

</Slide>
<OurOptions>

</OurOptions>
<OurCategory>
  
</OurCategory>
<ProductSlider class="mt-16" :propsdata="products"  :titeproductslider="newproduct"   newproduct="ourcategorydata" >

</ProductSlider>
<ProductCategoryCard>

</ProductCategoryCard>



<CategoryOffers></CategoryOffers>
<Wonderfuloffers></Wonderfuloffers>
<ProductSlider class="mt-16" :propsdata="productsfirst" :titeproductslidersuggested="suggestedproduct" >

</ProductSlider>
<LastArticles ></LastArticles>
<OurBrands>
</OurBrands>
<Footermain></Footermain>
</div>
</template>
<style scoped>


</style>