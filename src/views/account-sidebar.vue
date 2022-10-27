<script> 
</script>
<template>
<div>
    <v-card
    class="mx-auto card-account"
    width="100%"
    height="100%"
    tile
    elevation="4"
    >

    <v-tab>
      5
    </v-tab>
    <v-tab>
      6
    </v-tab>

    

    <v-list min-height="1" >
        <v-list-item class=" d-flex justify-center flex-column  align-center account-item-header" min-height="1">
          <v-list-item-avatar width="140" height="140" class="avatar-account d-flex justify-center flex-column  align-center  ">
            <v-img class="" src="../../public/img/imgprofile.jpg"     ></v-img>
          </v-list-item-avatar>
          <p class="p-product"> فاطمه حمزه عوفی </p>
        </v-list-item>
      </v-list>
      <v-list-item-group  >
      <v-list class="mr-6" >
     
        <v-list-item active-class="account-list" >
          <v-list-item-icon >
            <v-icon class="account-icon"> mdi-cart-arrow-down </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title  class="account-item-title"> سفارش ها </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item  active-class="account-list">
          <v-list-item-icon >
            <v-icon class="account-icon" > mdi-cards-heart-outline  </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="account-item-title" >  علاقه مندی ها  </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item active-class="account-list">
          <v-list-item-icon>
            <v-icon class="account-icon"> mdi-comment-outline </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="account-item-title"> دیدگاهها  </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
   
        <v-list-item active-class="account-list">
          <v-list-item-icon>
            <v-icon class="account-icon"> mdi-map-marker </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title > آدرس ها   </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item active-class="account-list">
          <v-list-item-icon>
            <v-icon class="account-icon"> mdi-card-account-details-outline </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title > جزئیات حساب  </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item active-class="account-list">
          <v-list-item-icon>
            <v-icon class="account-icon"> mdi-lock-outline </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >  تغییر رمز عبور  </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        
        <v-list-item    active-class="account-list">
          <v-list-item-icon  >
          
            <v-icon  class="account-icon"> mdi-exit-to-app </v-icon>
  
          </v-list-item-icon>
          <v-list-item-content >
            <v-list-item-title >    خروج  </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
     
    </v-list>
  </v-list-item-group>
    </v-card>
</div>
</template>
<style>
.avatar-account{
    justify-content: center;
    flex-direction: column !important;
    
}
.p-product{
    color: #4a4b65;

}
.card-account{
    height: 100vh !important;
}
.account-item-header{
    min-height: 1px !important;
}
/* .account-icon{
  color: #f4a137 !important;
  

} */
.account-list{
  background-color: #d1a04d !important;
  color: white !important;
}

</style>