<script setup>
import axios from 'axios';
import { useCounterStore } from "../stores/index";
import productslider from '../views/product-slider.vue'
import aboveofproduct from '../views/above-of-product.vue'
import ModulsTabsProduct from '../views/moduls-tabs-product.vue'
import { ref , computed , onMounted , onBeforeMount } from 'vue-demi';
import Menusbar from '../views/menusbar.vue';
let onvanproduct = " جزئیات محصول پیش فرض"
let poductrelated = "محصولات مرتبط"
let store = useCounterStore();
let productinside = ref()
let productinsidevalue =ref()










   function getproduct() {
    // Make a request for a user with a given ID
    axios.get(`https://store-project.iran.liara.run/api/product/${store.slugproduct}`)
        .then(function (response) {
            // handle success
            // posts.value = response.data;
            productinside.value = response.data;
            // productinsidevalue.value = localStorage.setItem('my', 'emad')
            // let arr = localStorage.getItem('my')
            
            

            console.log("productinside", productinside.value )


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
    <div>

         <Menusbar></Menusbar>
       <aboveofproduct :dataPr="onvanproduct"></aboveofproduct>
        <v-row class="pa-16" >
            <v-col cols="4" class="pl-6" >
                <v-row class="product-border">
                    <v-img lazy-src="" height="530px" width="100%"
                    :src="`https://store-project.iran.liara.run/Pictures/${productinside.picture}`" :alt="`${productinside.pictureAlt}`" :title="`${productinside.pictureTitle}`"></v-img>
                </v-row>

                <v-row>
                    <v-col cols="1" class="d-flex justify-center align-center" >
                       <div class="product-box-arrow border  ">
                    <v-icon d-flex justify-center align-center>
                        mdi-chevron-right
                    </v-icon>
                       </div>
                    </v-col>
                    <v-col cols="10">
                       <v-row class="margin-right-slider">
                        <v-col cols="2"  class="border ma-2">
                            <v-img src="../../public/img/img4.jpg"></v-img>
                        </v-col>
                        <v-col cols="2" class="border ma-2 ">
                            <v-img src="../../public/img/img17.jpg"></v-img>
                        </v-col>
                       </v-row>
                    </v-col>
                    <v-col cols="1" class="d-flex justify-center align-center">
                        <div class="product-box-arrow border " id="product-box-arrow">
                        <v-icon d-flex justify-center align-center>
                            mdi-chevron-left
                        </v-icon>
                    </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="8" class="pr-6">
                <v-row>
                    <h2> {{productinside.name}} </h2>
                </v-row>
                <v-row>
                    <v-col>
                        <pre> <span class="text-decoration-line-through"> قیمت : 15000 تومان   </span>    <span id="color-span"  >{{productinside.price}}</span></pre>
                    </v-col>
                    <v-col class="d-flex justify-end ">
                        <div>
                            <v-icon small class=""> mdi-star-settings-outline </v-icon>
                            <v-icon small class=""> mdi-star-settings-outline </v-icon>
                            <v-icon small class=""> mdi-star-settings-outline </v-icon>
                            <v-icon small class=""> mdi-star-settings-outline </v-icon>
                            <v-icon small class=""> mdi-star-settings-outline </v-icon>
                        </div>
                        <pre>  (3.2) </pre>

                    </v-col>
                </v-row>
                <v-row>
                    <p class="p-font-size pt-4">
                        {{productinside.description}}
                    </p>
                </v-row>
                <v-row class="border-bottom pb-2">
                    <v-col cols="1">
                        <p class="font-size ">ابعاد</p>
                    </v-col>
                    <v-col cols="11">
                        <v-row>
                            <v-col cols="1" class="border ml-2 height d-flex justify-center align-center">20m</v-col>
                            <v-col cols="1" class="border  height d-flex justify-center align-center">40m</v-col>

                        </v-row>
                    </v-col>
                </v-row>
                <v-row class="pt-4">
                    <v-col cols="3">
                        <v-row>
                            <v-col cols="3" class="border height mt-4 d-flex justify-center align-center ">

                                <v-icon> mdi-minus </v-icon>

                            </v-col>
                            <v-col cols="6" class="height ">
                                <v-form class="height pb-16">
                                    <v-text-field class="heigh mb-16 "  label=1 required>
                                    </v-text-field>
                                </v-form>
                            </v-col>
                            <v-col cols="3" class="border height mt-4 d-flex justify-center align-center">
                                <v-icon> mdi-plus </v-icon>

                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="3" class=" height mt-1">
                        <v-btn elevation="0" color="#d1a04d" width="100%" height="40" class="text-color product-btn">
                            <pre>  افزودن به سبد خرید <v-icon> mdi-cart-minus </v-icon> </pre>
                        </v-btn>
                    </v-col>

                </v-row>
                <v-row class="pt-6 mt-6 pb-8 border-bottom">
                    <pre><span> افزودن به علاقه مندی ها </span><v-icon> mdi-heart-outline </v-icon></pre>
                    <pre> <span > مقایسه محصول  </span><v-icon> mdi-compare-horizontal </v-icon></pre>
                </v-row>
                <v-row class="pt-4">
                    <p> شناسه محصول: BE65VGR </p><br>
                </v-row>
                <v-row>
                    <p> دسته بندی: {{productinside.category}}</p><br>

                </v-row>
                <v-row>
                    <p>برچسب ها: مردانه ، زنانه</p><br>

                </v-row>
                <v-row>
                    <v-col cols="2"> اشتراک گذاری : </v-col>
                    <v-col cols="3">
                        <v-row>
                            <v-col class="border d-flex justify-center align-center height mx-1 background-icon ">
                                <v-icon class="icon-color ">
                                mdi-linkedin
                                </v-icon>
                            </v-col>
                            <v-col class="border d-flex justify-center align-center height mx-1 background-icon">
                                <v-icon class="icon-color">
                                mdi-facebook
                                </v-icon>
                            </v-col>
                            <v-col class="border d-flex justify-center align-center height mx-1 background-icon">
                                <v-icon class="icon-color">
                                 mdi-instagram
                                </v-icon>
                            </v-col>
                            <v-col class="border d-flex justify-center align-center height mx-1 background-icon">
                                <v-icon class="icon-color">
                                mdi-twitter
                                </v-icon>
                            </v-col>

                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
       <ModulsTabsProduct></ModulsTabsProduct>
       <productslider :titleproductsingle="poductrelated"></productslider>
    </div>
</template>
<style scoped>
.margin-right-slider{
    direction: ltr;
}
.product-box-arrow{
    width: 28px;
    height: 28px;
    background-color: #eee;
}
.roduct-box-arrow:hover{
    background-color: #d1a04d !important;
}
.text-color {
    color: white;
}

.height {
    height: 40px !important;
    max-height: 40px;
}

.font-size {
    font-size: 20px;
}

.p-font-size {
    font-size: 20px;
    color: #a0a0a0;
}

.back-ground {
    background-image: url('../../public/img/imgheader.jpg');
    height: 300px;
    width: 100% !important;
    background-size: cover;
    color: white;
}



.product-border {
    border: 1px solid rgba(0, 0, 0, 0.2);
}

#color-span {
    color: #d1a04d;
}

.product-stars {
    margin-right: auto !important;
}

.border {
    border: 1px solid rgba(0, 0, 0, 0.2);
}
.border:hover {
    border: 1px solid #d1a04d;
}
.border-bottom {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.product-btn:hover{
   background-color: black !important;
}
.background-icon:hover{
    background-color: #d1a04d;
}
.background-icon:hover .icon-color{
    color: white;
}

</style>