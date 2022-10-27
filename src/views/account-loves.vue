<script setup>
import CardProduct from './card-product.vue';
import { useCounterStore } from "../stores/index";
import { ref, computed, onMounted } from 'vue-demi';

let store = useCounterStore();

</script>
<template>
    <div>
        <v-card width="100%" height="70px" class="">
            <v-row class="ma-0">
                <v-col class="col-md-10 pa-0 pt-8"> </v-col>
                <v-col class="col-md-2">
                    <v-row class="ml-4">
                        <v-col class="col-md-10 pa-0 pt-4">
                            <router-link to="/" class="link-account">
                            <p class="p-header-account pl-2 "> صفحه نخست </p>
                        </router-link>
                        </v-col>
                        <v-col class="col-md-2 pa-0 pt-4">
                            <router-link to="/" class="link-account">
                            <v-icon color="black">mdi-home-outline</v-icon>
                        </router-link>
                        </v-col>
                    </v-row>
                </v-col>

            </v-row>
        </v-card>
        <v-card flat class="card-down-account  ">
            <v-row>
                <h2 class="mt-14 mr-8"> علاقه مندی ها </h2>
            </v-row>
            <v-row class="d-flex justify-center align-center">
                <v-row class=" mb-16 card-inside-account  col-md-11 d-flex justify-center align-center">
                    <v-row>
                        <v-col v-for="n in 9" class="col-md-4 pt-6 d-flex alin-center col-loves">
                            <v-card class="card-product mx-4 account-loves-card " max-width="93%" width="93%"
                                data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="1500" elevation="0">
                                <v-img class="white--text align-end" height="360px" src="../../public/img/img11.jpg"
                                    alt="12" title="mu">
                                    <v-card-title class="product-heart">

                                        <div class="product-heart-div-loves d-flex justify-center align-center ">
                                            <v-icon size="40" class="hover-icon-loves mt-8" color="red">mdi-trash-can
                                            </v-icon>
                                        </div>

                                    </v-card-title>
                                    <v-card-title class="product-heart-down">

                                        <div class="product-heart-div-down d-flex justify-center align-center">
                                            <v-icon size="30" class="hover-icon-down">mdi-cart-arrow-down</v-icon>
                                        </div>

                                    </v-card-title>

                                    <v-card-title class="card-subtitl " @click=""> مشاهده محصول </v-card-title>


                                </v-img>



                                <v-card-text class="text--primary">
                                    <div class="text-center">
                                        <pre> <span class="text-decoration-line-through"> قیمت : 15000 تومان </span> <span id="color-span"  >12000</span></pre>
                                    </div>

                                    <div class="text-center py-2 "> عنوان محصول </div>
                                    <div class="text-center">
                                        <v-rating length="5" background-color="purple lighten-3" color="purple" large>
                                        </v-rating>
                                    </div>
                                </v-card-text>



                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row class="pt-8">
                        <v-col>
                            <v-row>
                                <v-col class="col-md-5 pr-4 mr-4 d-flex justify-center align-center">
                                    <p class="pt-4">اشتراک گذاری لیست:</p>
                                </v-col>
                                <v-col class="col-md-6 d-flex justify-center align-center">
                                    <v-row class="">
                                        <v-col class="col-footer-icon-loves">
                                            <v-icon color="#9e9e9e">mdi-facebook</v-icon>
                                        </v-col>
                                        <v-col class="col-footer-icon-loves">
                                            <v-icon color="#9e9e9e">mdi-instagram</v-icon>
                                        </v-col>
                                        <v-col class="col-footer-icon-loves">
                                            <v-icon color="#9e9e9e">mdi-linkedin</v-icon>
                                        </v-col>
                                        <v-col class="col-footer-icon-loves">
                                            <v-icon color="#9e9e9e"> mdi-twitter</v-icon>
                                        </v-col>
                                    </v-row>
                                </v-col>

                            </v-row>
                        </v-col>
                        <v-col></v-col>
                        <v-col class="d-flex justify-end align-center">
                            <v-btn class="ma-2 hover-btn-loves" outlined color="#d1a04d" >
                                نمایش لیست بیشتر 
                            </v-btn>

                        </v-col>

                    </v-row>
                </v-row>

            </v-row>


        </v-card>

    </div>
</template>
<style >
.card-inside-account {

    background-color: white !important;
    height: auto;

    border-radius: 5px;


}

.account-loves-card:hover {

    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
}

.col-loves {
    padding: 12px 0 !important;
}

.product-heart-div-loves {
    direction: ltr;

    width: 40px;
    height: 40px;

    text-align: center;

}
.hover-btn-loves:hover{
   background-color: #d1a04d;
   color: white !important;

}
.col-footer-icon-loves {
   padding: 8px 4px;
   margin: 0 2px;
   display: flex;
   -ms-flex-align: center;
   justify-content: center;
   border: 1px solid #9e9e9e;
}

.col-footer-icon-loves:hover {
   background-color: #d1a04d;
}
.hover-icon-loves {}
</style>