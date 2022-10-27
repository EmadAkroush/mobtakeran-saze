<script  setup >

import { ref } from 'vue-demi';
let drawer = ref(false)

</script>
<template>
  
  <div>
    
    <v-navigation-drawer  v-model="drawer" app class="indigo"
    right
    >
      
   </v-navigation-drawer>
  
   <v-app-bar
     id="title-color"
     elevation="0"
     height="43px"
   >
   
     <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        
     <div class="px-4" text>    contact@servin.com <v-icon dense color="" > mdi-email-outline </v-icon>  </div>
     <div class="px-4" text> 09156522323 <v-icon dense color="" > mdi-phone-outline </v-icon> </div>

   
     <div class="px-md-2 " id="margin-right" text><router-link class="link-navbare" to="/account"> حساب کاربری </router-link>  <v-icon dense color="" > mdi-account-circle-outline </v-icon> </div>
     
     <div class=" product-btn px-2  "  text>   <v-icon dense color="" > mdi-twitter </v-icon> </div>
     <div class="px-2 margin-right " text>   <v-icon dense color="" > mdi-linkedin </v-icon> </div>
     <div class="px-2 margin-right" text>   <v-icon dense color="" > mdi-instagram </v-icon> </div>
     <div class="px-2 margin-right" text>   <v-icon dense color="" > mdi-google-plus </v-icon> </div>
    
      
      
     <v-spacer></v-spacer>

     

    

    
   </v-app-bar>
   <v-app-bar
     id="title-color-bottom"
     elevation="0"
     height="100px"
   >
   <div class="px-md-2 mx-4" text >  
    <v-img 

    src="../../public/img/logo.png"></v-img>
     </div>
     <div class="px-md-2 mx-4" text > <router-link to="/" class="link-navbare" >  صفحه اصلی </router-link> </div>
     <div class="px-md-2 mx- " text  > <router-link to="" class="link-navbare" > دانشگاه  </router-link> <v-icon dense color="" > mdi-chevron-down </v-icon> </div>
     <div class="px-md-2 "  text ><router-link to=""  class="link-navbare">   وبلاگ  </router-link><v-icon dense color="" > mdi-chevron-down </v-icon> </div>
     <div class="px-md-2 " text ><router-link to="/product-category" class="link-navbare">    محصولات  </router-link> <v-icon dense color="" > mdi-chevron-down </v-icon> </div>
     <div class="px-md-2 " text ><router-link to="" class="link-navbare"> فروشگاه    </router-link><v-icon dense color="" > mdi-chevron-down </v-icon> </div>
     
      
      
     <v-spacer></v-spacer>

     <v-icon large class="px-md-2" color="" > mdi-magnify </v-icon>
     <v-icon large class="px-md-2 " color="" > mdi-heart-outline </v-icon>
     <v-icon large class="px-md-2 ml-8" color="" > mdi-cart-minus </v-icon>

   </v-app-bar>
  
 </div>
 </template> 
<style scoped>
#title-color{
    background-color: white !important;
    color: rgba(0, 0, 0, 0.6) !important;
    border-top: 1px solid rgba(0, 0, 0, 0.2) ;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    height: 10px;
    font-size: 16px;
  }
  #title-color-bottom{
    background-color: white !important;
    color: rgba(0, 0, 0, 0.6) !important;
  }
 #margin-right{
  
  margin-right: 750px !important;
 }
 .product-btn:hover{
   background-color: white !important;
   z-index: 10;
}
.link-navbare{
  text-decoration: none;
  color: rgba(0,0,0,.54);
}
 
</style>