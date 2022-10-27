<script setup>
import CardProduct from './card-product.vue';
import { ref , computed , onMounted} from 'vue-demi';

import { useCounterStore } from "../stores/index";

let store = useCounterStore();

defineProps({
    titeproductslider : String,
    titleproductsingle : String,
    titeproductsliderseller : String,
    titeproductslidersuggested : String,
    propsdata: Array
  
})

const products = computed(() => {
  
  return store.products
})


onMounted(() => {
  store.fetchProducts();
})






</script>
<template>
    <div>
        <h2 class="text-aline pa-4">{{titeproductslider}}{{titleproductsingle}}{{titeproductsliderseller}} {{titeproductslidersuggested}}</h2>
        <hr class="line">
        <v-row class="mt-2" >
            <v-sheet class="mx-auto" elevation="0" max-width="90%">
                <v-slide-group class="pa-4" active-class="success" show-arrows>
                    <v-slide-item v-for="(item, index) in propsdata" :key="index" v-slot="{ active, toggle }">
                     
                   <CardProduct :propsitem="item" ></CardProduct>
                   

                    </v-slide-item>

                </v-slide-group>

            </v-sheet>


        </v-row>


    </div>
</template>
<style scoped>
.text-aline {
    text-align: center;
}



#color-span {
    color: #d1a04d !important;
    font-weight: bold;
}

.text-decoration-line-through {
    color: #b6b6b6;

}








.line {
    z-index: 20;
    width: 50px;
    display: block;
    margin: 0 auto;
    height: 3px;
    color: #d1a04d;
    background-color: #d1a04d;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}



</style>