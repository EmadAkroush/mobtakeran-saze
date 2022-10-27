<script setup>
    import axios from 'axios';
    import { ref } from 'vue-demi';
    import { useCounterStore } from "../stores/index";
    let store = useCounterStore();
    let ourcategorydata = ref();
    
     function getproduct() {
        // Make a request for a user with a given ID
        axios.get('https://store-project.iran.liara.run/api/productcategory')
            .then(function (response) {
                // handle success
                // posts.value = response.data;
    
                ourcategorydata.value = response.data;
    
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
    <div>
        <v-row class="mx-16">
            <v-col  v-for="(item, i) in ourcategorydata" :key="i"       
       class="d-flex justify-center flex-column  align-center " >
                <v-img class="d-flex justify-center   align-end text-center categoty-img "  data-aos="fade-left " data-aos-duration="3000"   max-height="300" max-width="400" :src="`https://store-project.iran.liara.run/Pictures/${item.picture}`"   :title="`${item.pictureAlt}`"        :alt="`${item.pictureAlt}`"    >
                    <div class="display-inside inside-our-category mb-2"  >
                        <v-btn
                       elevation="0"

                       color="#d1a04d" class="textcategory mb-4" > مشاهده دسته بندی </v-btn>
                       
                    
                  </div>
                  <h2 class="category-h2 mb-4" >{{item.name}}</h2>
                </v-img>

            </v-col>


        </v-row>
    </div>
</template>
<style>
.our-category-p{
    font-size: 26px;
}
.display-inside{
   box-sizing: border-box;
   border: 1px solid #fff;;
   height: 380px;
   width: 380px;
   margin: auto;
   display: none ;
}
.inside-our-category .category-h2{
    display: block !important;
}

.inside-our-category:hover{
    display: flex ;
    align-content: center;
    justify-content: center;
    align-items: end;
}
.categoty-img:hover .display-inside{
    display: flex ;
    align-content: center;
    justify-content: center;
    align-items: end;
}
.categoty-img:hover .category-h2{
   display: none !important;
}
#category-h2{
    color: black;
    display: block !important;


}

.textcategory{
    color: white !important;
}
.categoty-img{
    filter: brightness(90%);
    
}
.textcategory{
    display: none;
}
.categoty-img:hover{
    filter: brightness(1);
    animation-delay: 2s;
    transition: all 0.3s ease-in-out;
    
}

.categoty-img:hover .textcategory{
    display: flex !important;
    align-content: center;
    justify-content: center;
    align-items: center;
}



</style>