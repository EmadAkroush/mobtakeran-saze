<script setup>
import CardArticle from "./card-article.vue";
import axios from 'axios';
import { ref , computed , onMounted} from 'vue-demi';

let Articlecontent = ref()

function getproduct() {
    // Make a request for a user with a given ID
   axios.get('https://store-project.iran.liara.run/api/article/')
        .then(function (response) {
            // handle success
            // posts.value = response.data;
            Articlecontent.value = response.data;
            // productinsidevalue.value = localStorage.setItem('my', 'emad')
            // let arr = localStorage.getItem('my')
            
            

            console.log("Articlecontent", Articlecontent.value )


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
    <div >
        <h2 class="text-aline pa-4"> آخرین مقالات  </h2>
        <hr class="line">
        <v-row class="mt-2 ">
            <v-sheet class="mx-auto" elevation="0" max-width="90%">
                <v-slide-group class="pa-4 " active-class="success" show-arrows>
                    <v-slide-item v-for="(item, i) in Articlecontent" :key="i" v-slot="{ active, toggle }" class="mb-4">

                     <CardArticle :propsarticles="item"></CardArticle>
                                       

                    </v-slide-item>

                </v-slide-group>

            </v-sheet>


        </v-row>

    </div>
</template>
<style>
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