<script setup>
import Vue from 'vue';
import menusbar from '../src/views/menusbar.vue'


</script>

<template>
  
  <v-app class="direction" >
    
<v-main>
  
    
  
  
<router-view></router-view>
    
   

  </v-main>

 
  </v-app>
  
</template>

<style>
.direction{
  direction: rtl !important;
  font-family: IRANSans !important;
}

@font-face {
     font-family: "IRANSans";
    font-style: normal;
    font-weight: 300;
    src: url('../public/fonts/webfonts/fa-duotone-900.woff2') format('woff2');
    }
body{

  font-family: IRANSans !important;

}
</style>

