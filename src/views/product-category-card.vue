<script setup>

</script>
<template>
    <v-row class="mx-16  mt-12">
        <v-col v-for="n in 4"   class="d-flex justify-center pa-0 ma-0 "  >

         
                <v-img  max-height="230" max-width="300" class="img-hover "  data-aos="fade-up"
     data-aos-anchor-placement="bottom-center"
                    src="../../public/img/img101.jpg"></v-img>
             
        </v-col>

    </v-row>
</template>
<style>
.img-hover:hover{
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    margin-bottom: 20px !important;
}


</style>