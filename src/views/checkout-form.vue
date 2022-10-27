<script setup>
   
</script>
<template>
<div>
    <h1>جزئیات صورتحساب</h1>
    <v-form>
     
     <p class="checkout-p mt-2"> نام  </p>
        <v-text-field
         color="#ffc107"
         value="عماد"
         class="mt-4"
         readonly
    ></v-text-field>
    <p class="checkout-p mt-2"> نام خانوادگی  </p>
    <v-text-field
         color="#ffc107"
         value="اکروش "
         readonly
         class="mt-4"
    ></v-text-field>
    <p class="checkout-p mt-2">  آدرس  </p>
    <v-text-field
         color="#ffc107"
         value="خیام"
         readonly
         class="mt-4"
    ></v-text-field>
    <p class="checkout-p mt-2">  کشور  </p>
    <v-text-field
         color="#ffc107"
         value="ایران"
         readonly
         class="mt-3"
    ></v-text-field>
    <p class="checkout-p mt-2">  شهر  </p>
    <v-text-field
         color="#ffc107"
         value="مشهد"
         readonly
         class="mt-3"
    ></v-text-field>
    <p class="checkout-p mt-2">  تلفن   </p>
    <v-text-field
         color="#ffc107"
         label="3709090"
         readonly
         class="mt-3"
    ></v-text-field>
    <p class="checkout-p mt-2">  ایمیل   </p>

    <v-text-field
         color="#ffc107"
         label="news.group"
         readonly
         class="mt-3"
    ></v-text-field>
  
    </v-form>
</div>
</template>
<style>
.checkout-p{
    color : #687188; 

}




</style>