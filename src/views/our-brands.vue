<script>

</script>
<template>
    <div>
        <h2 class="text-aline pa-4 mt-8"> برند ها </h2>
        <hr class="line">
        <v-row class="mx-16 my-8 " >
            <v-slide-group multiple show-arrows>
                <v-slide-item v-for="n in 10" :key="n" v-slot="{ active, toggle }">
                    <v-img  data-aos="flip-up" data-aos-duration="1500" max-height="120" max-width="160" class="mx-3 "
                        src="../../public/img/img17.png"></v-img>

                </v-slide-item>
            </v-slide-group>
        </v-row>

    </div>
</template>
<style>
.text-aline {
    text-align: center;
}

.line {
    z-index: 20;
    width: 50px;
    display: block;
    margin: 0 auto;
    height: 3px;
    color: #d1a04d;
    background-color: #d1a04d;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
</style>