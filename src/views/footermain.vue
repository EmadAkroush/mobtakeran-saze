<script setub>

</script> 
<template>
   <div>
      <footer>
         <v-row class="mt-16">
            <v-img max-height="180px" max-width="100%" src="../../public/img/img55.png">
               <v-row class="mt-7">
                  <v-col>
               <p class="p-email-footer mt-10 pr-16 mr-15"> با عضویت در خبر نامه از مهم ترین و جدید ترین اخبار و اطلاعات روز ما با
                  خبر شوید </p>
               </v-col>
               <v-col>
               <v-form>
                  <v-row class="mt-4">
                     <v-col class="col-md-5  "></v-col>
                     <v-col class="col-md-5 " >
                        <v-row>
                           <v-col class="col-md-10 col-footer">
                              <v-text-field class="text-field-footer" background-color="white" outlined
                                 label="ایمیل شما" required color="#d1a04d" dense></v-text-field>
                           </v-col>
                           <v-col class="col-md-2 col-footer">
                              <v-btn height="40px" class="btn-footer-email">
                                 <v-icon color="white">
                                    mdi-email-outline
                                 </v-icon>

                              </v-btn>

                           </v-col>
                        </v-row>

                     </v-col>
                     <v-col></v-col>
                  </v-row>
               </v-form>
            </v-col>
            </v-row>
            </v-img>
         </v-row>
         <v-row class="d-flex justify-center   align-center body-footer">
           <v-col class="col-md-10">
               <v-row>
            <v-col class="col-footer-mother">
               <h2 class="h2-footer mr-6 mb-4 mt-12"> اطلاعات </h2>
               <v-list  class="list-footer">
                  <v-list-item class="list-footer-item">
                     <v-list-item-icon class="ml-2">
                        <v-icon color="#626262">mdi-chevron-left</v-icon>
                     </v-list-item-icon>
                  <router-link class="link-footer"  to="">
                     <v-list-item-title>درباره ما</v-list-item-title>
                  </router-link>
                  

                  </v-list-item>
                  <v-list-item class="list-footer-item">
                     <v-list-item-icon class="ml-2">
                        <v-icon color="#626262">mdi-chevron-left</v-icon>
                     </v-list-item-icon>
                  <router-link class="link-footer"  to="">
                     <v-list-item-title> شرایط استفاده </v-list-item-title>
                  </router-link>
                  </v-list-item>
                  <v-list-item class="list-footer-item">
                     <v-list-item-icon class="ml-2">
                        <v-icon color="#626262">mdi-chevron-left</v-icon>
                     </v-list-item-icon>
                  <router-link class="link-footer"  to="">
                     <v-list-item-title> راهنمای سفارش و خرید </v-list-item-title>
                  </router-link>
                  </v-list-item>
               </v-list>
            </v-col>
            <v-col class="col-footer-mother">
               <h2 class="h2-footer mr-6 mb-4 mt-12"> حساب کاربری </h2>
               <v-list  class="list-footer">
                  <v-list-item class="list-footer-item">
                     <v-list-item-icon class="ml-2">
                        <v-icon color="#626262">mdi-chevron-left</v-icon>
                     </v-list-item-icon>
                  <router-link class="link-footer"  to="/account">
                     <v-list-item-title>  سفارش های من </v-list-item-title>
                  </router-link>
                  </v-list-item>
                  <v-list-item class="list-footer-item">
                     <v-list-item-icon class="ml-2">
                        <v-icon color="#626262">mdi-chevron-left</v-icon>
                     </v-list-item-icon>
                  <router-link class="link-footer"  to="/account">
                     <v-list-item-title> لیست علاقه مندی ها </v-list-item-title>
                  </router-link>
                  </v-list-item>
                  <v-list-item class="list-footer-item">
                     <v-list-item-icon class="ml-2">
                        <v-icon color="#626262">mdi-chevron-left</v-icon>
                     </v-list-item-icon>
                  <router-link class="link-footer"  to="/account">
                     <v-list-item-title>    پیگیری سفارش </v-list-item-title>
                  </router-link>
                  </v-list-item>
                  <v-list-item class="list-footer-item">
                     <v-list-item-icon class="ml-2">
                        <v-icon color="#626262">mdi-chevron-left</v-icon>
                     </v-list-item-icon>
                  <router-link class="link-footer"  to="">
                     <v-list-item-title>     مشخصات کاربری من </v-list-item-title>
                  </router-link>
                  </v-list-item>
               </v-list>
            </v-col>
            <v-col class="col-footer-mother ">
               <h2 class="h2-footer mr-6 mb-4 mt-12"> نماد ها </h2>
               <div class="enamad-part">
               <v-img  max-height="160" max-width="270"
                  src="../../public/img/download.png"></v-img>
               </div>

            </v-col>
            <v-col class="col-footer-mother">
               <h2 class="h2-footer mr-4 mb-4 mt-12"> تماس با ما </h2>
               <v-list v-for="n in 3" class="list-footer">
                  <v-list-item class="list-footer-item">


                     <v-list-item-title> آدرس: ۴۴۵ کوه عدن جاده، کوه بهشت، اوکلند. </v-list-item-title>
                  </v-list-item>

               </v-list>
               <v-row>
                  <v-col class="col-md-8">
                     <v-row class="mr-3 mt-2">
                        <v-col class="col-footer-icon">
                           <v-icon>mdi-facebook</v-icon>
                        </v-col>
                        <v-col class="col-footer-icon">
                           <v-icon>mdi-instagram</v-icon>
                        </v-col>
                        <v-col class="col-footer-icon">
                           <v-icon>mdi-linkedin</v-icon>
                        </v-col>
                        <v-col class="col-footer-icon">
                           <v-icon> mdi-twitter</v-icon>
                        </v-col>
                     </v-row>
                  </v-col>
                  <v-col class="col-md-4">

                  </v-col>

               </v-row>
            </v-col>
           </v-row>
         </v-col>
            
         </v-row>
         
         <v-row class="after-footer d-flex justify-center m  align-cente body-footer">
            <p class="mt-4">  تمامی حقوق سایت محفوظ است </p>
         </v-row>
      </footer>
   </div>
</template>
<style>
.p-email-footer {
   text-align: center;
   font-size: 20px;
}

.col-footer {
   padding: 12px 0;
}

.btn-footer-email {
   background-color: black !important;
   border-radius: 0px !important;
}

.text-field-footer {
   border-radius: 0px !important;
}

.h2-footer {
   color: #d1a04d;
}

.list-footer {
   padding: 0px;
}

.col-footer-icon {
   padding: 8px 4px;
   background-color: #626262;
   margin: 0 2px;
   display: flex;
   -ms-flex-align: center;
   justify-content: center;
}

.col-footer-icon:hover {
   background-color: #d1a04d;
}
.after-footer{
   height: 80px;
   align-content: center !important;
}
.body-footer{
   background-color: black;
   color: white;
   border-bottom: 1px solid white;
   
}
.list-footer{
   background-color: black !important;
   
}
.list-footer-item{
   color:  white !important;
}
.enamad-part{
   width: 380px;
   
}
.link-footer{
   color: white !important;
   text-decoration: none;
}
</style>