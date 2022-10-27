<script setup>

</script>
<template>
    <div>
        <v-row class="mx-16 pa-16" >
            <v-col v-for="n in 4"  data-aos="zoom-in" class="pa-16 d-flex justify-center flex-column our-option-col align-center " >
                <v-img  max-height="150" max-width="250" width="70" height="70"
                    src="../../public/img/img31.svg"></v-img>
                <p class="pt-4 our-option-p" > ارسال سریع </p>
            </v-col>
        </v-row>
    </div>
</template>
<style>
.our-option-p{
    color: rgba(0,0,0,.87) !important;
    
}
.our-option-col{
    border-left: 1px solid rgba(0,0,0,.3);
    height: 50px !important;
    
}
</style>