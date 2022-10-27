<script setup>

</script>
<template>
  <div>
    <v-card width="100%" height="70px">
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
        <h2 class="mt-14 mr-8"> آخرین سفارش ها </h2>
      </v-row>
      <v-row>
        <v-col class="mr-12 ml-15 mb-16 card-inside-account pa-8">
          <template>
            <v-expansion-panels multiple accordion>
              <v-expansion-panel v-for="(item,i) in 5" :key="i">
                <v-expansion-panel-header class="header-item-order">
                  <v-row d-flex justify-center align-center>
                    <v-col class="d-flex    align-center">dkc-65454555</v-col>
                    <v-col class="d-flex    align-center">
                      <v-icon> mdi-clock-outline </v-icon> 1399/7/19
                    </v-col>
                    <v-col class="d-flex    align-center">
                      <div class="header-item-btn d-flex    align-center justify-center"> درحال پردازش </div>
                    </v-col>
                    <v-col class="d-flex    align-center">
                      <div class="header-item-btn-factor d-flex    align-center justify-center mr-8"> نمایش فاکتور
                      </div>
                    </v-col>
                    <v-col class="header-item-price d-flex    align-center justify-end">150.000 تومان</v-col>

                  </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div class="item-content-mother">
                    <v-row>

                      <v-col>

                        <v-row>

                          <v-col class="col-md-4">

                            <v-img max-height="150" width="120" height="120" class="mr-4 mt-2 item-order-img"
                              max-width="250" src="../../public/img/img12.jpg"></v-img>
                          </v-col>
                          <v-col class="col-md-8 mt-4 " max-height="50" height="120">
                            <div class="col-order-text ">
                              <p> نام محصول </p>
                              <p> سایز: 300 </p>
                              <p> طبع : گرم </p>
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col class="d-flex    align-center justify-space-between">
                        <div class="col-order-text-middle mr-4">
                          <p> تعداد :</p>
                          <p class="text-center"> 2 </p>
                        </div>
                        <div class="col-order-text-middle ml-4 ">
                          <p> جمع کل :</p>
                          <p class="text-center"> 15000 </p>
                        </div>

                      </v-col>

                    </v-row>
                    <v-row>


                      <v-col>

                        <v-row>

                          <v-col class="col-md-4">

                            <v-img max-height="150" width="120" height="120" class="mr-4 mt-2 item-order-img"
                              max-width="250" src="../../public/img/img12.jpg"></v-img>
                          </v-col>
                          <v-col class="col-md-8 mt-4 " max-height="50" height="120">
                            <div class="col-order-text ">
                              <p> نام محصول </p>
                              <p> سایز: 300 </p>
                              <p> طبع : گرم </p>
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col class="d-flex    align-center justify-space-between">
                        <div class="col-order-text-middle mr-4">
                          <p> تعداد :</p>
                          <p class="text-center"> 2 </p>
                        </div>
                        <div class="col-order-text-middle ml-4 ">
                          <p> جمع کل :</p>
                          <p class="text-center"> 15000 </p>
                        </div>

                      </v-col>

                    </v-row>
                    <hr class="order-item-pricess-hr mt-4">

                    <v-row class="order-item-pricess">
                      <v-col> جمع کل: 152000 تومان </v-col>
                      <v-col class="text-end"> حمل و نقل: 15000 تومان </v-col>
                      <v-col class="text-end"> مالیات: 6000 تومان </v-col>
                      <v-col class="text-end"> کل: 173000 تومان</v-col>
                    </v-row>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
          <v-row class="d-flex align-center justify-center">
          <v-btn class="ma-2 hover-btn-loves old-order-btn mt-6" outlined color="#d1a04d" >
               نمایش سفارش های بیشتر
               
             </v-btn>
            </v-row>
        </v-col>
      </v-row>

    </v-card>
  </div>
</template>
<style >
.old-order-btn{
     text-align: center;
}
.card-inside-account  .v-expansion-panel {
  border: 2px solid rgba(0, 0, 0, .125) !important;
  margin-bottom: 15px !important;

}

.v-expansion-panel-content {
  border-top: 2px solid rgba(0, 0, 0, .125) !important;

}



.header-item-btn {
  background-color: rgba(106, 155, 244, 0.08);
  width: 90px;
  height: 30px;
  color: #6a9bf4;
  border-radius: 5px;
  text-align: center;
  display: block;
}

.header-item-btn-factor {
  background-color: #d1a04d;
  width: 90px;
  height: 30px;
  color: white;
  border-radius: 5px;
  text-align: center;
  display: block;
}

.header-item-price {
  display: block;
  margin-right: auto;
  text-align: end;
}

.item-content-mother {
  background-color: #f3f3f3;

}

.item-order-img {
  border-radius: 10px;
}

.col-order-text {
  height: 50px;
  min-height: 50px;
  line-height: 15px;
  margin-top: 10px;
}

.col-order-text-middle {
  height: 50px;
  min-height: 50px;
  line-height: 15px;


}

.v-expansion-panel-content__wrap {
  padding: 0px !important;
}

.order-item-pricess {
  padding: 20px;

}

.order-item-pricess-hr {
  color: rgba(0, 0, 0, 0.1);
  width: 95%;
  text-align: center;
  display: block;
  margin: 0 auto;
}

.card-inside-account {
  background-color: white !important;
  height: auto;
  margin: 20px auto;
  border-radius: 5px;


}
</style>