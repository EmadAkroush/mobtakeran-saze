<script>

</script>
<template>
    <div>
        <v-row class="mt-16 ">
            <v-img  max-height="100%" max-width="100%" 
                src="../../public/img/img407.jpg" class="d-flex justify-center align-center  ">
                <p class="wonderfulp mr-16 pr-16" data-aos="zoom-in" data-aos-duration="3000"> پیشنهاد های شگفت انگیز  </p>
                <p class="wonderfulpdown mt-12  px-4" data-aos="zoom-in" data-aos-duration="3000"> فرصت باقی مانده </p>
                <v-row class="ma-0 mr-16" data-aos="zoom-in" data-aos-duration="3000">
                    <v-col class="col-md-3 col-circle-number ma-0 pa-0 mr-16 mt-6">
                         <v-row class="ma-0">

                            <v-col class="ma-0 col-wonderful" >
                                <div class="circle-number d-flex flex-row justify-center align-center  ">

                                3-
                                 <br>
                                روز

                                </div>
                            </v-col>
                            <v-col class="ma-0 col-wonderful" >
                                <div class="circle-number d-flex flex-row justify-center align-center ">
                                    3-
                                 <br>
                                روز

                                </div>
                            </v-col>
                            <v-col class="ma-0 col-wonderful">
                                <div class="circle-number d-flex flex-row justify-center align-center"> 
                                    3-
                                 <br>
                                روز

                                </div>
                            </v-col>
                            <v-col  class="ma-0 col-wonderful">
                             <div class="circle-number d-flex flex-row justify-center align-center">
                                3-
                                 <br>
                                روز

                             </div>
                            </v-col>

                         </v-row>
                         <v-btn class="header-btn mt-16" data-aos="zoom-in" data-aos-duration="3000">  مشاهده و خرید   <v-icon>mdi-chevron-left</v-icon> </v-btn>

                    </v-col>
                </v-row>
            </v-img>

        </v-row>
    </div>
</template>
<style>
@keyframes blink {
    20%, 24%, 55% {
        color: #111;
        text-shadow: none;
    }

    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        text-shadow: 0 0 5px #d1a04d, 0 0 15px #d1a04d, 0 0 20px #d1a04d, 0 0 40px #d1a04d, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
        color: #fff6a9;
    }
}
.wonderfulp{
    font-size: 40px;
    animation: blink 3s infinite;
}
.wonderfulpdown{
    font-size: 25px;
    color: red;
    background-color: #ffffff36;
    width: fit-content;
    margin-right: 128px;;
}
.circle-number{
    width: 80px;
    height: 80px;
    background-color: white;
    border-radius: 50%;
    font-size: 20px;
    flex-direction: row;
    color: #999999;
}
.col-wonderful{
    padding: 0 !important;
}

.header-btn{
      color: white !important;
      background-color: #d1a04d !important;
    }
    .img-hover:hover{
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    margin-bottom: 20px !important;
}


</style>