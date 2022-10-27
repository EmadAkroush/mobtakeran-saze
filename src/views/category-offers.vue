<script>

</script>
<template>
    <div>
        <v-row class="mx-16 mt-16 px-4 d-flex justify-center ">
          
            <v-col v-for="n in 2" >
                <v-img  max-height="800" max-width="650" class="img-hover d-flex justify-center align-end " data-aos="zoom-in"
                    src="../../public/img/img45.png">
                    <v-btn class="header-btn mb-16 mr-8">  مشاهده و خرید   <v-icon>mdi-chevron-left</v-icon> </v-btn>

                 
                </v-img>
            </v-col>
        </v-row>
    </div>
    
</template>
<style>
      .header-btn{
      color: white !important;
      background-color: #d1a04d !important;
    }
    .img-hover:hover{
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    margin-bottom: 20px !important;
}
</style>