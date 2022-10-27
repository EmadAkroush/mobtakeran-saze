<script setup>
   defineProps({
  dataCa: String,
  dataPr: String
})
</script>
<template>
    <div>
        <v-row>
            <template>
                <v-parallax height="300" class="back-ground-parallax" src="../../public/img/imgheader.jpg">

                <h2 class="text-center pt-8  "> {{dataCa}} {{dataPr}}</h2>
                <div class="d-flex justify-center pt-4">
                    <pre>  <router-link to="/" class="link-above-product"> خانه </router-link>  / <router-link to="/" class="link-above-product"> فروشگاه </router-link>  /  <span id="color-span">{{dataCa}}{{dataPr}}</span>    </pre>
                </div>
            </v-parallax>
            </template>  
        </v-row>
    </div>
</template>
<style scoped>
.back-ground {
    background-image: url('../../public/img/imgheader.jpg');
    height: 300px;
    width: 100% !important;
    background-size: cover;
    color: white;
}
.back-ground-parallax {
    background-image: url('../../public/img/imgheader.jpg');
    height: 300px;
    width: 100% !important;
    background-size: cover;
    color: white;
}

.link-above-product{
    text-decoration: none;
    color: white !important;
}
#color-span {
    color: #d1a04d;
}

</style>