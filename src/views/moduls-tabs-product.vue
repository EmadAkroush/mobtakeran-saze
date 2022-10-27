<script setup >

import { ref } from 'vue-demi'

</script>
<template>
    <div>
        <v-row class="mt-6">
            <v-col class="px-14">
                <v-card elevation="0">
                    <v-tabs color="deep-purple accent-4 " left class="" elevation="0">
                        <v-tab class="color-tab" active-class="change-color">توضیحات </v-tab>
                        <v-tab class="color-tab" active-class="change-color"> ویژگی ها </v-tab>
                        <v-tab class="color-tab" active-class="change-color">نظرات </v-tab>

                        <v-tab-item class="mt-6">
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12" class="product-comment-p ">
                                        <p>
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                            لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
                                            بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                                            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت.
                                        </p>
                                        <p>
                                            بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
                                            زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود
                                            در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
                                            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                                            اساسا مورد استفاده قرار گیرد.
                                        </p>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-tab-item>

                        <v-tab-item class="mt-6">
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12" class="product-comment-p">
                                        <v-simple-table>
                                            <template>

                                                <tbody class="product-comment-p">
                                                    <tr>
                                                        <td class="first-td ">طبع </td>
                                                        <td>گرم</td>

                                                    </tr>
                                                    <tr class="tr-zoge">
                                                        <td class="first-td  ">حجم</td>
                                                        <td>300 میلی لیتر</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="first-td ">کشور مبدا برند</td>
                                                        <td>ایران </td>
                                                    </tr>
                                                    <tr class="tr-zoge">
                                                        <td class="first-td  ">شماره مجوز</td>
                                                        <td>563285632674852</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="first-td ">صادر کننده مجوز </td>
                                                        <td>سازمان غذا و دارو</td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-tab-item>

                        <v-tab-item class="mt-6">
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="2">
                                        <v-rating class="withs-ranking" background-color="orange lighten-3"
                                            color="orange" size="30"></v-rating>
                                    </v-col>
                                    <v-col cols="8">

                                    </v-col>
                                    <v-col cols="2" class="comment-col-left">
                                        <v-row>
                                            <v-col cols="4" class="product-like-thislike">
                                                <v-row>
                                                    <v-col cols="4">
                                                        <span> 5 </span>
                                                    </v-col>
                                                    <v-col cols="4">
                                                        <v-icon color="#d1a04d">
                                                            mdi-thumb-up-outline
                                                        </v-icon>
                                                    </v-col>

                                                </v-row>
                                            </v-col>
                                            <v-col cols="4">
                                                <v-row>
                                                    <v-col cols="4">
                                                        <span> 7 </span>
                                                    </v-col>
                                                    <v-col cols="4">
                                                        <v-icon color="#d1a04d">
                                                            mdi-thumb-down-outline
                                                        </v-icon>
                                                    </v-col>

                                                </v-row>
                                            </v-col>
                                        </v-row>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="1">
                                        <v-img src="../../public/img/img100.jpg" class="icon-img mr-8">

                                        </v-img>
                                    </v-col>
                                    <v-col cols="11">
                                        <h3>
                                            فاطمه حمزه پور
                                        </h3>
                                        <p class="product-comment-p">
                                            3 روز پیش
                                        </p>
                                        <p class="product-comment">
                                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
                                            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
                                            لازم است، و برای شرایط
                                        </p>
                                    </v-col>

                                </v-row>
                               
                                    <h1> ارسال نظر </h1>
                                    <v-rating class="withs-ranking tr-zoge" background-color="" color="orange"
                                        size="40"></v-rating>
                                    <v-form>
                                       <v-row>
                                        <v-col cols="12">
                                            <v-textarea counter label="  نظر شما *" color="#d1a04d" class="text-input"
                                                outlined> نظر شما
                                            </v-textarea>

                                        </v-col>
                                       </v-row>
                                        <v-row>
                                            <v-col cols="6">
                                                <v-text-field outlined color="#d1a04d" label="نام خود را وارد فرمایید">

                                                </v-text-field>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-text-field outlined color="#d1a04d"
                                                    label=" ایمیل خود را وارد فرمایید">

                                                </v-text-field>
                                            </v-col>
                                        </v-row>

                                    </v-form>

                            </v-container>
                        </v-tab-item>
                    </v-tabs>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<style scoped>
.direction {
    direction: ltr !important;
}

.first-td {
    width: 30% !important;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
}

.tr-zoge {
    background-color: rgb(174 147 147 / 5%);
}

.icon-img {
    border-radius: 50%;
    background-size: contain;
    width: 70px;
    height: 70px;
}

.product-comment-p {
    color: #687188cf;
}

.product-comment {
    color: #687188
}

.comment-col-left {
    margin-right: auto;
}

.withs-ranking {
    width: 40px !important;
}

.product-like-thislike {
    margin-right: auto;
}

.color-tab {
    color: #0d6efd !important;
}

.color-tab:hover {
    color: #d1a04d !important;

}


.change-color {
    color: #d1a04d !important;
    border-bottom: 2px solid #d1a04d !important;
    z-index: 1;

}
</style>