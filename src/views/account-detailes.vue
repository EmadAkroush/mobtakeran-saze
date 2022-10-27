<script>
export default {
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            ' مرد ',
            ' زن ',

        ],
        checkbox: false,
    }),

    methods: {
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
    },
}



</script>
<template>
    <div>
        <v-card width="100%" height="70px" class="">
            <v-row class="ma-0">
                <v-col class="col-md-10 pa-0 pt-8"> </v-col>
                <v-col class="col-md-2">
                    <v-row class="ml-4">
                        <v-col class="col-md-10 pa-0 pt-4">
                            <router-link to="/" class="link-account">
                            <p class="p-header-account pl-2 "> صفحه نخست </p>
                            </router-link>
                        </v-col>
                        <v-col class="col-md-2 pa-0 pt-4">
                            <router-link to="/" class="link-account">
                            <v-icon color="black">mdi-home-outline</v-icon>
                            </router-link>
                        </v-col>
                    </v-row>
                </v-col>

            </v-row>
        </v-card>
        <v-card flat class="card-down-account  ">
            <v-row>
                <v-col>
                <h2 class="mt-10 mr-8"> اطلاعات حساب</h2>
                <h3 class="mt-4 mr-8 under-title" >  نوع حساب : حقیقی</h3>
            </v-col>
            <v-col class="d-flex align-end justify-end" >
                <v-btn class="ml-9 hover-btn-loves-trancfer  " outlined color="#d1a04d" >
                                   تغییر حساب به حقوقی
                            </v-btn>
            </v-col>

            </v-row>
            <v-row class="d-flex justify-center align-center">
                <v-row class=" mb-16 card-inside-account  col-md-11 d-flex justify-center align-center">

                    <v-row>
                        <v-form v-model="valid" class="form-deatails pa-8 ">
                            <v-row class="row-deatails">

                                <v-col cols="6" md="6">
                                    نام
                                    <v-text-field color="#d1a04d" class="pt-3" dense :rules="nameRules" :counter="10"
                                        label="فاطمه" required outlined></v-text-field>
                                </v-col>

                                <v-col cols="6" md="6">
                                    نام خانوادگی
                                    <v-text-field color="#d1a04d" class="pt-3" dense :rules="nameRules" :counter="10"
                                        label="عوفی" required outlined></v-text-field>
                                </v-col>

                            </v-row>

                            <v-row class="row-deatails">

                                <v-col cols="6" md="6">
                                    تاریخ تولد
                                    <v-text-field color="#d1a04d" class="pt-3 form-text" dense :rules="nameRules"
                                        :counter="10" label="yyyy/mm/dd" required outlined></v-text-field>

                                </v-col>

                                <v-col cols="6" md="6">
                                    جنسیت
                                    <v-select color="#d1a04d" :items="items" class="pt-3 form-text" dense
                                        :rules="[v => !!v || 'Item is required']" label="مرد" required outlined>
                                    </v-select>
                                </v-col>



                            </v-row>

                            <v-row class="row-deatails">
                                <v-col cols="6" md="6">
                                    آدرس ایمیل
                                    <v-text-field :rules="emailRules" label="example@yahoo.com" class="pt-3 form-text"
                                        required outlined dense>
                                    </v-text-field>

                                </v-col>

                                <v-col cols="6" md="6">
                                    استان
                                    <v-text-field color="#d1a04d" class="pt-3" dense :rules="nameRules" :counter="10"
                                        label=" خوزستان" required outlined></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row class="row-deatails">

                                <v-col cols="6" md="6">
                                    شهر
                                    <v-text-field color="#d1a04d" class="pt-3 form-text" dense :rules="nameRules"
                                        :counter="10" label="اهواز" required outlined></v-text-field>

                                </v-col>

                                <v-col cols="6" md="6">
                                    آدرس
                                    <v-text-field color="#d1a04d" class="pt-3" dense :rules="nameRules" :counter="10"
                                        label="اهواز کیان پارس" required outlined></v-text-field>
                                </v-col>

                            </v-row>

                            <v-row class="row-deatails">

                                <v-col cols="6" md="6">
                                    کد پستی
                                    <v-text-field color="#d1a04d" class="pt-3 form-text" dense :rules="nameRules"
                                        :counter="10" label="1020604569" required outlined></v-text-field>

                                </v-col>

                                <v-col cols="6" md="6">
                                    کد ملی
                                    <v-text-field color="#d1a04d" class="pt-3" dense :rules="nameRules" :counter="10"
                                        label="6047203040" required outlined></v-text-field>
                                </v-col>

                            </v-row>

                            <v-row class="row-deatails">
 
                                <v-col cols="6" md="6">
                                    تصویر
                                    <v-file-input class="pt-3 form-text"  label=" بارگذاری عکس پروفایل" outlined dense></v-file-input>

                                </v-col>


                            </v-row>
                            <v-row class="d-flex justify-center">
                            <v-btn class="ma-2 hover-btn-loves mt-1 " outlined color="#d1a04d" >
                                   ذخیره تغییرات
                            </v-btn>
                        </v-row>
                        </v-form>
                    </v-row>

                </v-row>

            </v-row>


        </v-card>

    </div>
</template>
<style>
.form-deatails {
    width: 100%;
    color: #687188;
}

.form-text:clicked {
    background-color: aqua;
}
.row-deatails{
    margin-top: 0 !important;
}
.under-title{
    color: #687188;
}
.hover-btn-loves-trancfer {

}
</style>