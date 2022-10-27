<script setup>
import AboveOfProduct from '../views/above-of-product.vue';
import Menusbar from '../views/menusbar.vue';
import Account from './Account.vue';
import CheckoutForm from '../views/checkout-form.vue';
import CheckoutOrder from '../views/checkout-order.vue';
import Footermain from '../views/footermain.vue';



</script>
<template>
  <div>
    <Menusbar></Menusbar>
    <AboveOfProduct></AboveOfProduct>

    <v-row>
      <v-col class="col-md-11 ma-auto ">
        <v-row>
          <v-col class="col-above-of-product ml-4">
               مشتری برگشتی ؟ برای ورود اینجا کلید کنید
          </v-col>
          <v-col class="col-above-of-product mr-4">
            کوپن تخفیف دارید؟ برای وارد کردن کد خود اینجا کلیک کنید
          </v-col>
        </v-row>
        <v-row> 
          <v-col class="col-md-6">
          <CheckoutForm class="mt-6">

          </CheckoutForm>
          </v-col>
          <v-col class="col-md-6">
           <CheckoutOrder class="mt-6">

           </CheckoutOrder>
           
          </v-col>
        </v-row>
      </v-col>
  
    </v-row>

    <Footermain></Footermain>
  </div>
</template>
<style>
.col-above-of-product {
  background-color: #f7f6f7;
  border-top: 3px solid #1e85be;
  height: 60px;
  margin-top: 120px;

}
</style>