<script setup>
import AboveOfProduct from '../views/above-of-product.vue';
import Menusbar from '../views/menusbar.vue';
import Footermain from '../views/footermain.vue';


</script>
<template>
    <div>
        <Menusbar></Menusbar>
        <AboveOfProduct>
        </AboveOfProduct>
        <v-row>
            <v-col class="col-md-11 d-flex align-center justify-center mx-auto my-16">
                <v-row>
                    <v-col class="col-md-8">
                        <table class="table-cart">
                            <thead class="head-cart">
                                <tr class="head-cart">
                                    <th class="th-cart"> حذف </th>
                                    <th class="th-cart"> تصویر </th>
                                    <th class="th-cart"> محصول </th>
                                    <th class="th-cart">   قیمت  <span> (تومان) </span></th>
                                    <th class="th-cart"> تعداد </th>
                                    <th class="th-cart"> جمع </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="tr-cart  tr-cart-middle ">
                                    <td class="td-middle">
                                        <v-icon>mdi-close-circle</v-icon>
                                    </td>
                                    <td class="td-middle">
                                        <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="100"
                                            class="mx-auto" max-width="100" src="https://picsum.photos/id/11/500/300">
                                        </v-img>
                                    </td>
                                    <td class="td-middle">
                                        نام محصول
                                    </td>
                                    <td class="td-middle">
                                        25000
                                    </td>
                                    <td class="td-middle">
                                        <table class="counter-card-table">
                                            <tr>
                                                <td class="counter-card-table-td">
                                                    <v-icon size="20" color="black"> mdi-plus </v-icon>
                                                </td>
                                                <td colspan="3" class="counter-card-table-td-middle">2</td>
                                                <td class="counter-card-table-td">
                                                    <v-icon size="20" color="black"> mdi-minus </v-icon>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td class="td-middle">
                                        <p class="cart-sum-table-price-p">
                                        25000
                                    </p>
                                    </td>
                                </tr>
                                <tr class="tr-cart tr-cart-middle">
                                    <td class="td-middle">
                                        <v-icon>mdi-close-circle</v-icon>
                                    </td>
                                    <td class="td-middle">
                                        <v-img lazy-src="https://picsum.photos/id/11/10/6" max-height="100"
                                            class="mx-auto" max-width="100" src="https://picsum.photos/id/11/500/300">
                                        </v-img>
                                    </td>
                                    <td class="td-middle">
                                        نام محصول
                                    </td>
                                    <td class="td-middle">
                                       
                                        25000
                                   
                                    </td>
                                    <td class="td-middle">
                                        <table class="counter-card-table">
                                            <tr>
                                                <td class="counter-card-table-td">
                                                    <v-icon size="20" color="black"> mdi-plus </v-icon>
                                                </td>
                                                <td colspan="3" class="counter-card-table-td-middle">2</td>
                                                <td class="counter-card-table-td">
                                                    <v-icon size="20" color="black"> mdi-minus </v-icon>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td class="td-middle">
                                        <p class="cart-sum-table-price-p">
                                        25000
                                    </p>
                                    </td>
                                </tr>
                                <tr class="tr-cart">
                                    <td colspan="5">
                                        <table class="td-card-buttom-table mr-6">
                                            <tr>
                                                <td class="td-card-buttom ">
                                                    کوپن :
                                                </td>
                                                <td colspan="3" class="td-card-buttom ">
                                                    <form class="pt-6">
                                                        <v-text-field label="کد تخفیف" color="#d1a04d" required outlined dense>
                                                        </v-text-field>

                                                    </form>
                                                </td>
                                                <td class="td-card-buttom ">
                                                    <v-btn elevation="0" class="td-card-buttom-btn">اعمال کوپن</v-btn>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                    <td>
                                        <v-btn elevation="0" class="ml-6 card-btn-update"> بروزرسانی سبد خرید </v-btn>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </v-col>
                    <v-col class="col-md-4">
                        <v-row class="cart-row-header-left-side py-4">
                            <p> جمع صبد خرید </p>
                        </v-row>

                        <v-row class="cart-body-row pa-2">
                            <v-col>
                                <v-row class="cart-body-row-inside">
                                    <v-col class="d-flex align-center justify-space-between">
                                        <p> مجموع </p>
                                        <p> 1100000 <span> تومان </span> </p>

                                    </v-col>
                                    <hr class="hr-cart">
                                </v-row>
                                <v-row class="cart-body-row-inside">
                                    <v-col class="d-flex  justify-space-between">
                                        <div class="text-start pt-2">
                                            <p> هزینه ارسال </p>
                                            <p class="cart-body-row-inside-p-under-line "> محاسبه هزینه ارسال</p>
                                        </div>
                                        <p> رایگان </p>
                                    </v-col>
                                    <hr class="hr-cart">
                                </v-row>
                                <v-row>
                                    <v-col class="d-flex align-center justify-space-between ">
                                        <p class="pt-2"> مجموع کل صبد خرید </p>
                                        <p> 1100000 <span> تومان </span> </p>

                                    </v-col>
                                    <hr class="hr-cart">
                                </v-row>
                                
                            </v-col>
                           
                        </v-row>
                        <v-btn elevation="0" class="td-card-buttom-btn-copen mt-4"> ادامه جهت تسویه حساب </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <Footermain></Footermain>
    </div>

</template>
<style>
.head-cart {
    background-color: #f5f5f5;
    width: 100% !important;
    height: 50px;
    border-spacing: 0;
}

.table-cart {
    width: 100%;
    border: 1px solid #e9ecef;
}

.tr-cart {

    vertical-align: middle;
    text-align: center;
    width: 100%;


}

.tr-cart .td-middle {
    border-bottom: 1px solid #e9ecef;
    width: 16.9%;
}


.tr-cart-middle {
    height: 150px;
    border-bottom: 1px solid #e9ecef;
}

.col-number-cart {
    border: 1px solid #e9ecef;
    height: 40px;
}

.row-number-cart {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.counter-card-table {
    width: 100%;

}

.counter-card-table-td {
    border: 1px solid #e9ecef;
    height: 40px;
}

.counter-card-table-td-middle {
    border: 1px solid #e9ecef;
    width: 40%;
    color: black !important;
}

.td-card-buttom-table {
    width: 55%;
}

.td-card-buttom-btn {
    color: white !important;
    background-color: #d1a04d !important;
    height: 40px !important;
}
.td-card-buttom-btn-copen{
    color: white !important;
    background-color: #d1a04d !important;
    height: 40px !important;
    text-align: start;
    margin-left: auto;
}
.td-card-buttom-btn-copen:hover{
    color: white !important;
    background-color: black !important;
}
.td-card-buttom-btn:hover {
    color: white !important;
    background-color: black !important;
}

.card-btn-update {
    color: white !important;
    background-color: black !important;
    height: 40px !important;

}

.card-btn-update:hover {
    color: white !important;
    background-color: #d1a04d !important;

}

.cart-row-header-left-side {
    background-color: #f5f5f5;
    text-align: center;
    margin: auto;
}

.cart-row-header-left-side p {
    display: block;
    text-align: center;
    margin: auto;
}

.hr-cart {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: .25;
}

.cart-body-row {
    border: 1px solid #f5f5f5;
    text-align: center;
    margin: auto;
}

.cart-body-row-inside {
    border-bottom: 2px solid #f5f5f5;
}

.cart-body-row-inside-p-under-line {
    text-decoration: underline;
}
.cart-sum-table-price-p{
  color: #d1a04d;
}
</style>