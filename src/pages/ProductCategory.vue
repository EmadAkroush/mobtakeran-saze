<script setup>
import { ref } from 'vue-demi';
import AboveOfProduct from '../views/above-of-product.vue'
import CardProduct from '../views/card-product.vue';
import axios from 'axios';
import SideBarProduct from '../views/side-bar-product.vue';
import { useCounterStore } from "../stores/index";
import Menusbar from '../views/menusbar.vue';


let showthelistproduct =ref(false)
let listproduct = ref()
let store = useCounterStore();

let dialogpopups = store.dialog

function getproduct() {
    // Make a request for a user with a given ID
    axios.get('https://store-project.iran.liara.run/api/product')
        .then(function (response) {
            // handle success
            // posts.value = response.data;

            listproduct.value = response.data;

            console.log(listproduct.value)


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


let page = ref()
let categoryonvan = "شبکه ای نوار کناری سمت چپ"
let items = [' بر اساس محبوبیت  ', 'بر اساس جدید ترین ', 'بر اساس قیمت : کم به زیاد ', 'بر اساس قیمت :زید به کم ']
let itemsNumber = ['12 ', '24', '36', '48']

let coloms = ref('col-md-3')
function fourcoloms() {
    coloms.value = 'col-md-4'
    showthelistproduct.value= false
}
function threecoloms() {
    coloms.value = 'col-md-3'
    showthelistproduct.value= false


}

</script>
    
<template>
    <div>
        <Menusbar></Menusbar>
        <AboveOfProduct :dataCa="categoryonvan"></AboveOfProduct>

        <v-row class="container-category">
            <v-col>
                <v-row class="mt-16 pt-2">
                    <v-col class="col-md-4">
                        <v-form>
                            <v-row>
                                <v-col class="col-md-8">

                                    <v-select dense :items="items" label="بر اساس محبوبیت " outlined
                                        append-icon="mdi-chevron-down">

                                    </v-select>
                                </v-col>
                                <v-col class="col-md-4">
                                    <v-select dense :items="itemsNumber" label="12" outlined
                                        append-icon="mdi-chevron-down">

                                    </v-select>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-col>
                    <v-col class="col-md-6">
                    </v-col>
                    <v-col class="col-md-1">
                        <v-row>
                            <v-col class="col-md-4" @click="threecoloms()">
                                <v-icon> mdi-filter-plus-outline</v-icon>
                            </v-col>
                            <v-col class="col-md-4" @click="fourcoloms()">
                                <v-icon> mdi-filter-minus-outline</v-icon>
                            </v-col>

                            <v-col class="col-md-4" @click="showthelistproduct= true">
                                <v-icon> mdi-format-list-checkbox </v-icon>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col class="col-md-1">
                        <div>
                            <v-dialog v-model="dialogpopups" width="400" origin='center left'
                                transition="dialog-left-transition" content-class="product-popup">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn class="filter-btn " active-class="active-btn" color="black" v-bind="attrs"
                                        outlined v-on="on">
                                        فیلتر محصولات
                                    </v-btn>
                                </template>

                                <SideBarProduct class="mt-0"></SideBarProduct>
                            </v-dialog>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col v-if="showthelistproduct">
                        <v-row v-for="(item, i) in listproduct" :key="i" >
                            <v-card class="col-md-12 pa-0 mt-8">
                                <v-row>
                                    <v-col class="col-md-3 py-3 " height="300px ">
                                        <v-img class="white--text align-end pa-0 ma-0" height="300px " width="400px"
                                            max-width="350px"
                                            :src="`https://store-project.iran.liara.run/Pictures/${item.picture}`"
                                            alt="myalt" title="mytitel">

                                        </v-img>
                                    </v-col>
                                    <v-col class="col-md-9">
                                        <v-list-item three-line>
                                            <v-list-item-content>
                                                <v-list-item-title class="text-h5 mb-1 pt-4">
                                                   عنوان محصول 
                                                </v-list-item-title>
                                                <v-list-item-subtitle class="pt-4">
                                                  <p class="black-price-card">  <pre  > <span class=" text-decoration-line-through"> قیمت : 15000 تومان </span> <span id="color-span"  >12000 تومان</span></pre></p>
                                                </v-list-item-subtitle>
                                                <v-list-item-subtitle class="pt-4">
                                                  <p class="p-card-product">  
                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط .
                                                  </p>
                                                </v-list-item-subtitle>
                                                <v-list-item-title>
                                                   <v-row>
                                                    <v-col class="col-md-3">
                                                    <div class="card-subtitl-row" >   
                                                        <pre> افزودن به سبد خرید <v-icon color="white">mdi-cart-minus</v-icon></pre>
                                                    </div>
                                                   </v-col>
                                                   <v-col class="col-md-3 pt-5 mr-10">
                                                         <pre>  <v-icon color="black" size="30">
                                                            mdi-heart-outline
                                                           </v-icon> <v-icon color="black" size="30"> mdi-compare-horizontal</v-icon> </pre>
                                                   </v-col>
                                                </v-row>
                                                </v-list-item-title>

                                                 
                                                
                                            </v-list-item-content>

                                            <v-list-item-icon class="mt-15 ml-8">
                                                <v-rating length="5" background-color="#9e9fb4" color="#ffca08" large>
                                                </v-rating> <span class="pt-2"> (4.2) </span>
                                            </v-list-item-icon>
                                            
                                        </v-list-item>
                           
                                    </v-col>
                                </v-row>

                            </v-card>
                        </v-row>
                    </v-col>
                    <v-col v-else :class="coloms" v-for="(item, i) in listproduct" :key="i" >
                        <v-card class="card-product mx-4" elevation="0">
                            <v-img class="white--text align-end" :height="coloms == 'col-md-3' ? '320px' : '400px' "
                                :src="`https://store-project.iran.liara.run/Pictures/${item.picture}`" alt="myalt"
                                title="mytitel">
                                <v-card-title class="product-heart">

                                    <div class="product-heart-div d-flex justify-center align-center">
                                        <v-icon size="30" class="hover-icon">mdi-heart</v-icon>
                                    </div>

                                </v-card-title>
                                <v-card-title class="product-heart-down">

                                    <div class="product-heart-div-down d-flex justify-center align-center">
                                        <v-icon size="30" class="hover-icon-down">mdi-cart-arrow-down</v-icon>
                                    </div>

                                </v-card-title>
                                <v-card-title class="card-subtitl ">مشاهده محصول </v-card-title>
                            </v-img>



                            <v-card-text class="text--primary">
                                <div class="text-center">
                                    <pre> <span class="text-decoration-line-through" v-if="item.priceWithDiscount != null" >{{item.priceWithDiscount}}</span> <span id="color-span"  > {{item.price}} </span></pre>
                                </div>

                                <div class="text-center py-2 "> {{item.name}}</div>
                                <div class="text-center">
                                    <v-rating length="5" background-color="purple lighten-3" color="purple" large>
                                    </v-rating>
                                </div>

                            </v-card-text>


                        </v-card>


                    </v-col>
                </v-row>
                <v-row>
                    <v-col>

                        <div class="text-center">

                            <v-pagination class="" v-model="page" color="#d1a04d" :length="6">

                            </v-pagination>
                        </div>


                    </v-col>
                </v-row>
            </v-col>


        </v-row>

    </div>
</template>
<style >
.container-category {
    width: 90%;
    margin: 0 auto;
}

.card-shadow:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22) !important;
}

.card-product:hover .card-subtitl {
    display: block;
}

.card-product:hover .product-heart {
    display: block;
}

.product-heart {
    padding-bottom: 60%;
    display: none;
    direction: ltr;

}

.product-heart-div {
    direction: ltr;

    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid #b6b6b6;


}

.product-heart-div:hover {
    background-color: red;
    border: 1px solid red;
}

.product-heart-div:hover .hover-icon {
    color: white;
}

.product-heart-down {
    direction: ltr;
}

.hover-icon {
    color: #b6b6b6;

}

.hover-icon-down {
    color: #d1a04d !important;
}

.card-subtitl {
    background-color: #d1a04d;
    height: 40px;
    padding: 5px;
    text-align: center;
    display: none;
}
.card-subtitl-row{
    background-color: #d1a04d;
    height: 40px;
    padding: 5px;
    text-align: center;
    display: flex;
    width: 200px;
    color: white;
    align-items: center;
    justify-content: center;
}
.card-subtitl-row:hover{
   background-color: black;
}
.active-btn {
    color: #d1a04d !important;
    background-color: white !important;

}

.filter-btn:hover {
    color: #d1a04d !important;
    background-color: white !important;
}

.v-dialog__content {
    align-items: start;
    justify-content: flex-end;
    margin: 0 !important;


}

.product-popup {
    margin: 0;
    height: 100%;
    max-height: 100% !important;

}
.black-price-card{
    color: black;
}
.p-card-product{
    color: #a0a0a0;
    font-size: 20px;
}


</style>