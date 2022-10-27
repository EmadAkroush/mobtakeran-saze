<script setup >
 import { ref } from 'vue-demi';
 defineProps({
    propsarticles : Object,
    
})

</script>
<template>
    <div>
        <v-card class="mx-4 pb-4" max-width="400" data-aos="zoom-in" data-aos-easing="linear"
     data-aos-duration="1500">
            <v-img class="white--text align-end zoon-in-article" height="280px" :src="`https://store-project.iran.liara.run/Pictures/${propsarticles.picture}` ">

            </v-img>

           
                <v-row class="pa-4 mt-1 pr-8">
                <v-col class="col-md-4 col-card ">
                    <v-row class="pa-2">
                        <v-col class="col-md-3 col-card "> <v-icon> mdi-account  </v-icon> </v-col>
                        <v-col class="col-md-9 col-card"> محمد عوفی  </v-col>
                    </v-row>
                </v-col>

                <v-col class="col-md-5 col-card">
                    <v-row class="pa-2 ">
                        <v-col class="col-md-3 col-card"> <v-icon> mdi-calendar  </v-icon>   </v-col>
                        <v-col class="col-md-9 col-card">21 شهریور 1399</v-col>
                    </v-row>
                </v-col>
                <v-col> 
                     

                </v-col>

             
            </v-row>
          

            <v-card-text class="text--primary">

                <div class="pa-2">
                    <h2> {{propsarticles.title}} </h2>
                </div>

                <div class="text-under-card pa-2">{{propsarticles.shortDescription}}  </div>
            </v-card-text>

            <v-card-actions >
                <v-btn color="" text class="crad-btn">
                    بیشتر بخوانید 
                </v-btn>

            </v-card-actions>
            <hr class="line-card ">

        </v-card>
    </div>
</template>
<style>
.text-under-card{
    color:#687188;
    font-size: 17px;
    
}


.line-card {
    z-index: 20;
    width: 30px;
    display: block;
    margin-right: 15px;
    height: 3px;
    color: #d1a04d;
    background-color: #d1a04d;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    
}
.col-card{
    padding: 0 !important;
}


</style>