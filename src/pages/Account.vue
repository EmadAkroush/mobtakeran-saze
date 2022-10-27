<script setup>
import AccountSidebar from "../views/account-sidebar.vue";
import AccountOrder from "../views/account-order.vue";
import AccountLoves from "../views/account-loves.vue";
import AccountComments from "../views/account-comments.vue";
import AccountDetailes from "../views/account-detailes.vue";
import AccountChangePassword from "../views/account-change-password.vue";

</script>
<template>
  <div>
    <!-- 
 
  <v-row class="ma-0">
    <v-card elevation="0" class="card-header-account ma-0 pa-0 d-flex aline-end">
      <v-row class="ma-0">
        <v-col class="col-md-10 pa-0 pt-8"> </v-col>
        <v-col class="col-md-2">  
          <v-row>
            <v-col class="col-md-10 pa-0 pt-9">
           <p class="p-header-account pl-2 "> صفحه نخست </p>
          </v-col>
          <v-col class="col-md-2 pa-0 pt-9">    
         <v-icon color="black">mdi-home-outline</v-icon> 
        </v-col>
        </v-row>
        </v-col>
         
        </v-row>
          </v-card>
  </v-row> -->
    <v-row class="ma-0">

      <v-card class="card-main-account">


        <v-row class="mt-3">
          <v-tabs vertical class="tabs-account">
            <v-list min-height="1">
              <v-list-item class=" d-flex justify-center flex-column  align-center account-item-header" min-height="1">
                <v-list-item-avatar width="140" height="140"
                  class="avatar-account d-flex justify-center flex-column  align-center  ">
                  <v-img class="" src="../../public/img/imgprofile.jpg"></v-img>
                </v-list-item-avatar>
                <p class="p-product"> فاطمه حمزه عوفی </p>
              </v-list-item>
            </v-list>
            <v-card class="card-items  mt-8 " elevation="0">
              <v-tab class="inside-tab" active-class="account-list">
                <v-row class="mr-4 pl-16">
                  <v-col class="col-md-2 " color="black">
                    <v-icon left color="#5a5b75">
                      mdi-cart-arrow-down
                    </v-icon>
                  </v-col>
                  <v-col class="col-md-10 pt-4 pl-16 pr-2 col-text-account ">
                    سفارش ها
                  </v-col>
                </v-row>
              </v-tab>
              <v-tab active-class="account-list">
                <v-row class="mr-4 pl-16">
                  <v-col class="col-md-2 ">
                    <v-icon left color="#5a5b75">
                      mdi-cards-heart-outline
                    </v-icon>
                  </v-col>
                  <v-col class="col-text-account  col-md-10 pt-4 pl-16 pr-2">
                    علاقه مندی ها
                  </v-col>
                </v-row>
              </v-tab>
              <v-tab active-class="account-list">
                <v-row class="mr-4 pl-16">
                  <v-col class="col-md-2">
                    <v-icon left color="#5a5b75">
                      mdi-comment-outline
                    </v-icon>
                  </v-col>
                  <v-col class="col-text-account col-md-10 pt-4 pl-16 pr-2">
                    دیدگاهها
                  </v-col>
                </v-row>
              </v-tab>

              <v-tab active-class="account-list">
                <v-row class="mr-4 pl-16">
                  <v-col class=" col-md-2">
                    <v-icon left color="#5a5b75">
                      mdi-map-marker
                    </v-icon>
                  </v-col>
                  <v-col class="col-md-10  pt-4 pl-16 pr-2 col-text-account">
                    آدرس ها
                  </v-col>
                </v-row>
              </v-tab>

              <v-tab active-class="account-list">
                <v-row class="mr-4 pl-16">
                  <v-col class=" col-md-2">
                    <v-icon left color="#5a5b75">
                      mdi-card-account-details-outline
                    </v-icon>
                  </v-col>
                  <v-col class="col-text-account col-md-10  pt-4 pl-16 pr-2">
                    جزئیات حساب
                  </v-col>
                </v-row>
              </v-tab>
              <v-tab active-class="account-list">
                <v-row class="mr-4 pl-16">
                  <v-col class=" col-md-2">
                    <v-icon left color="#5a5b75">
                      mdi-lock-outline
                    </v-icon>
                  </v-col>
                  <v-col class="col-md-10  pt-4 pl-16 pr-2 col-text-account">
                    تغییر رمز عبور
                  </v-col>

                </v-row>

              </v-tab>

              <v-tab active-class="account-list">
                <v-row class="mr-4 pl-16 ">
                  <v-col class=" col-md-2 ">
                    <v-icon left color="#5a5b75">
                      mdi-exit-to-app
                    </v-icon>
                  </v-col>
                  <v-col class="col-text-account col-md-10  pt-4 pl-16 pr-2">
                    خروج
                  </v-col>

                </v-row>

              </v-tab>

            </v-card>

            <v-tab-item>
         <AccountOrder></AccountOrder>
            </v-tab-item>
            <v-tab-item>
         <AccountLoves></AccountLoves>
            </v-tab-item>
            <v-tab-item>
        <AccountComments></AccountComments>
            </v-tab-item>
            <v-tab-item>
        
            </v-tab-item>
            <v-tab-item>
        <AccountDetailes></AccountDetailes>
            </v-tab-item>
            <v-tab-item>
        <AccountChangePassword></AccountChangePassword>
            </v-tab-item>
          </v-tabs>
        </v-row>
      </v-card>


    </v-row>

  </div>
</template>
<style>
.card-header-account {
  width: 100%;
  height: 100px;
  position: absolute;

}

.p-header-account {
  margin-right: auto;
  text-align: left;
  z-index: 10;
  color: black !important;
  font-size: 20px;

}

.body-account {
  background-color: #f3f3f3 !important;
  width: 100%;
  height: 200px;

  color: black !important;

}

.card-main-account {
  width: 100%;
}

.card-items {
  width: 100% !important;
}

.account-list {
  background-color: #d1a04d !important;
  color: white !important;
}

.tabs-account {
  color: black !important;
}

.col-text-account {
  color: #5a5b75 !important;
}

.card-down-account {
  background-color: #f3f3f3 !important;
  height: auto;
}



.v-expansion-panel-header {}

.card-inside-account {}
</style>