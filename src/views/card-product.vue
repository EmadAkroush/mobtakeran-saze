<script setup>
 import { ref , computed , onMounted} from 'vue-demi';
import { useCounterStore } from "../stores/index";

let store = useCounterStore();

// import  useRouter    from "vue-router";
// import  useRoute    from "vue-router";

// let router = new useRouter({
//     mode: 'history',
//     router : routes

// })
// router.push('/product')



defineProps({
    
    propsitem: Object
    
})


function myclick(item){
    store.slugproduct = item
    console.log("item ", store.slugproduct)
}







    </script>
    <template>
        <div>
              
            <v-card class="card-product mx-4" max-width="300" elevation="0" data-aos="zoom-in"
     data-aos-easing="linear"
     data-aos-duration="1500">
                <v-img class="white--text align-end" height="350px" :src="`https://store-project.iran.liara.run/Pictures/${propsitem.picture}`"  :alt="`${propsitem.pictureAlt}`"
                :title="`${propsitem.pictureTitle}`">
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
                    <router-link :to="`/product/${propsitem.slug}`" class="link-product">
                    <v-card-title class="card-subtitl " @click="myclick(propsitem.slug)" > مشاهده محصول  </v-card-title>
                    </router-link>
                
                </v-img>
    
    
    
                <v-card-text class="text--primary">
                    <div class="text-center">
                        <pre> <span class="text-decoration-line-through"> قیمت : 15000 تومان </span> <span id="color-span"  >{{propsitem.price}}</span></pre>
                    </div>
    
                    <div class="text-center py-2 "> {{propsitem.name}}</div>
                    <div class="text-center">
                        <v-rating length="5" background-color="purple lighten-3" color="purple" large>
                        </v-rating>
                    </div>
                </v-card-text>
               
    
            </v-card>
        </div>
     
    </template>
    <style scoped>
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
    .link-product{
        color: white;
        text-decoration: none;
    }
    </style>