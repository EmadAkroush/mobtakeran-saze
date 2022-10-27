<script setup></script>
<template>
    <div>
        <h1>سفارشات شما</h1>
        <v-row class="row-checkout-order py-6 mt-4">
            <v-col class="col-md-11 mx-auto">
                <div class="col-checkout-order pa-4">
                    <v-row class="inner-item-order">
                        <v-col> محصول </v-col>
                        <v-col> جمع </v-col>
                    </v-row>

                    <v-row class="inner-item-order-under">
                        <v-col> رژ لب مایع فورمار </v-col>
                        <v-col> 40000 تومان </v-col>
                    </v-row>

                    <v-row class="inner-item-order-under">
                        <v-col> بادی اسپلش زنانه </v-col>
                        <v-col> 55000 تومان </v-col>
                    </v-row>

                    <v-row class="inner-item-order-under">
                        <v-col> مداد ابرو دو سه </v-col>
                        <v-col> 20000 تومان </v-col>
                    </v-row>

                    <v-row class="inner-item-order">
                        <v-col> جمع </v-col>
                        <v-col> 195000 تومان </v-col>
                    </v-row>
                    <v-row class="inner-item-order">
                        <v-col> هزینه ارسال </v-col>
                        <v-col> ارسال رایگان </v-col>
                    </v-row>
                    <v-row class="inner-item-order-end">
                        <v-col> جمع </v-col>
                        <v-col> 195000 تومان </v-col>
                    </v-row>
                </div>
                <h2 class="mt-4">پرداخت</h2>
                <div class="checkout-order-sum mt-6">
                    <template>
                        <v-expansion-panels>
                            <v-expansion-panel v-for="(item, i) in 3" :key="i">
                                <v-expansion-panel-header expand-icon>
                                    <v-checkbox color="#b7893a" id="id"> </v-checkbox>
                                    <p class="checkout-p mt-4">انتقال مستقیم بانکی</p>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <p class="checkout-p-down px-4">
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                                        با استفاده از طراحان گرافیک است.
                                    </p>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                    <v-btn elevation="0" color="mt-10 mr-4 btn-checkout black"> ادامه فرآیند </v-btn>
                </div>
            </v-col>
        </v-row>
    </div>
</template>
<style>
.checkout-order-sum .v-expansion-panel-content {
    border-top: none !important;
}

.row-checkout-order {
    background-color: #f5f5f5;
}

.col-checkout-order {
    background-color: white !important;
}

.list-item-insid {
    width: 100%;
}

.inner-item-order {
    border-bottom: 2px solid #f5f5f5;
}

.inner-item-order-under {
    color: #b7893a;
}

#id {
    font-size: 40px;
}

.checkout-order-sum .v-icon.v-icon {
    transform: scale(1.3);
}

.checkout-order-sum .v-expansion-panel-header {
    padding: 0 24px;
    background-color: none !important;
}

.checkout-order-sum .v-input {
    flex: 0 1 auto;
    align-items: center;
}

.checkout-order-sum .v-expansion-panel::before {
    content: "";
    box-shadow: 0 0;
}

.checkout-order-sum .v-expansion-panel {
    background-color: none !important;
    justify-content: flex-start;
    align-items: center;
}

.checkout-order-sum .theme--light.v-expansion-panels .v-expansion-panel {
    background-color: #f5f5f5;
}

.checkout-p {
    color: black;
    font-size: 20px;
}

.checkout-p-down {
    color: #687188;
}
.btn-checkout{
    color: white !important;
    width: 120px;
    font-size: 16px !important;
}
</style>
