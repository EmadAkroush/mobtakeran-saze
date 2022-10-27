<script setup>
import axios from 'axios';
import { ref } from 'vue-demi';
import { useCounterStore } from "../stores/index";
let store = useCounterStore();
let slidedata = ref()

 function getproduct() {
    // Make a request for a user with a given ID
    axios.get('https://store-project.iran.liara.run/api/slid')
        .then(function (response) {
            // handle success
            // posts.value = response.data;

            slidedata.value = response.data;

            // console.log(slidedata.value)


        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
getproduct()
 

</script>
<template>
    <v-row>
   <v-col>
    <v-carousel hide-delimiters>

    <v-carousel-item
    v-for="(item, i) in slidedata" :key="i"       
      :src="`https://store-project.iran.liara.run/Pictures/${item.picture}`"
      
    >
    <v-row >
      <v-col class="px-16 mx-16 mt-16 pt-16 ">
    <h1 class="mt-6 " data-aos="fade-up" > {{item.heading}} </h1>
    <h3 class="mt-6 " data-aos="fade-down"> {{item.text}} </h3>
    
    <v-btn class="mt-6 header-btn " data-aos="fade-right"> <a class="linkslider" :href="`${item.link}`"> {{item.btnText}} </a> <v-icon>mdi-chevron-left</v-icon> </v-btn>
     </v-col>
  </v-row>
  </v-carousel-item>
  </v-carousel>
   </v-col>
 </v-row>  
</template>
<style>
       .header-btn{
      color: white !important;
      background-color: #d1a04d !important;
    }
    .header-btn:hover{
       
      background-color: black !important;
    }
  .linkslider{
    color: white !important;
    text-decoration: none;
  }
</style>