<script setup>

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
                <h2 class="mt-14 mr-8"> دیدگاهها </h2>
            </v-row>
            <v-row class="d-flex justify-center align-center">
                <v-row class=" mb-16 card-inside-account  col-md-11 d-flex justify-center align-center ">
             <v-row  class="pa-8 pading-comment" v-for="(item, i) in 3" :key="i">
                    <v-col class="col-md-1">
                        <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="300" max-width="250"
                            src="../../public/img/img9.jpg"></v-img>
                    </v-col>
                    <v-col class="col-md-11">
                        <v-row class="d-flex justify-space-between">
                            <v-col>
                                <v-rating length="5" background-color="#ffca08" color="#ffca08" size="25" dense>
                                </v-rating>
                            </v-col>
                            <v-col>
                                <v-row>
                                
                                    <v-col  class="d-flex justify-end align-center"> 
                                        <div class="ml-4 header-item-btn-comments d-flex    align-center justify-center"> تایید شده
                                        </div>
                                        <v-menu left bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn icon v-bind="attrs" v-on="on">
                                                    <v-icon>mdi-dots-vertical</v-icon>
                                                </v-btn>
                                            </template>

                                            <v-list>
                                                <v-list-item v-for="n in 1" :key="n" @click="() => {}">
                                                    <v-list-item-title> حذف نظر </v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
                            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                        </v-row>

                    </v-col>
                  
                </v-row>
               
                <v-btn class="ma-2 hover-btn-loves mt-12" outlined color="#d1a04d" >
                                نمایش دیدگاهای قدیمی تر
                </v-btn>
                </v-row>

            </v-row>


        </v-card>
    </div>
</template>
<style>
.hover-btn-loves-trancfer:hover{
   background-color: #d1a04d;
   color: white !important;

}
.pading-comment{
    border-bottom: 1px solid #dee2e6;
}
.header-item-btn-comments {
  background-color: #b8e4b07d;
  border: 1px solid #88d07b;
  width: 75px;
  height: 25px;
  border-radius: 2px;
  text-align: center;
  display: block;
}
</style>