<script setup>
   import {  useCounterStore }  from "../stores/index";  
   let store = useCounterStore();

  let   min= -50
  let   max= 90
  let   range= [-20, 70]
console.log(store.dialog)

</script>
<template>
  <div >
    <v-card class="card-sidebar" width="600" Max-Width="" elevation="0">
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-btn @click="store.dialog = false">
            <v-icon >
              mdi-close
            </v-icon>
            </v-btn>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item>


          <v-list-item-title>
            <h2> دسته بندی </h2>

          </v-list-item-title>


        </v-list-item>

        <v-divider></v-divider>
        <hr class="line-category">
        <v-list-group :value="false" v-for="n in 5" :key="n" class="template-list" active-class="color-active-sidebar">
          <template v-slot:activator>
            <v-list-item-title> آرایشی </v-list-item-title>
            (150)
          </template>

          <v-list-item :value="true" no-action sub-group v-for="n in 5" class="template-list">
            <v-list-item-title> آرایش صورت </v-list-item-title>

            (150)


          </v-list-item>



        </v-list-group>

      </v-list>

      <v-list>
        <v-list-item>

          <v-list-item-title>
            <h2> قیمت </h2>

          </v-list-item-title>

        </v-list-item>
        <v-divider></v-divider>
        <hr class="line-category">
        <v-list-item>
          <v-range-slider v-model="range" :max="max" :min="min" hide-details class="align-center">

            <template v-slot:prepend>
              <v-text-field :value="range[0]" class="mt-0 pt-0" hide-details single-line type="number"
                style="width: 100px " @change="$set(range, 0, $event)"></v-text-field>
            </template>
            <template v-slot:append>
              <v-text-field :value="range[1]" class="mt-0 pt-0" hide-details single-line type="number"
                style="width: 60px" @change="$set(range, 1, $event)"></v-text-field>
            </template>

          </v-range-slider>
        </v-list-item>


      </v-list>
      <v-list>
        <v-list-item>

          <v-list-item-title>
            <h2> سایز </h2>

          </v-list-item-title>

        </v-list-item>
        <v-divider></v-divider>
        <hr class="line-category">
        <v-list-item>
          <v-row class="mt-4">
            <v-col class="col-md-3"  v-for="n in 5">
              <v-btn-toggle  >
                
              <v-btn   active-class="boxes-size-active" id="box-height-size"   elevation="0"   >100g</v-btn>
            
              </v-btn-toggle>
            </v-col>
          </v-row>

        </v-list-item>
      </v-list>

      <v-list>
        <v-list-item>

          <v-list-item-title>
            <h2> برچسب محصولات  </h2>

          </v-list-item-title>

        </v-list-item>
        <v-divider></v-divider>
        <hr class="line-category">
        <v-list-item>
          <v-row class="mt-4">
            <v-col class="col-md-3 "  v-for="n in 5">
              <v-btn-toggle   >
                
                <v-btn   active-class="boxes-size-active"  id="box-height"  elevation="0"   >100g</v-btn>
              
                </v-btn-toggle>
            </v-col>
          </v-row>

        </v-list-item>
      </v-list>

    </v-card>

  


  </div>
</template>
<style scoped>
.card-sidebar {
  width: 800px !important;
}

.template-list {
  border-bottom: 1px dashed rgba(0, 0, 0, .12) !important;

}

.color-active-sidebar {
  color: red !important;

}

.color-active-sidebar,
.template-list {
  color: #d1a04d !important;
}

.line-category {
  width: 100px;
  color: #d1a04d;
  background-color: #d1a04d;
  z-index: 10;
  height: 3px;
  border-width: 0;
}
.boxes-size-active{
  
  background-color:  #d1a04d !important;
  z-index: 100;
  display: block;
  border: 1px solid red  !important;
  
}


#box-height{
  height: 45px !important;
  min-height: 45px !important;
  background-color: white !important;
}
#box-height-size{
  height: 63px !important;
  min-height: 63px !important;
  background-color: white !important;
}

</style>