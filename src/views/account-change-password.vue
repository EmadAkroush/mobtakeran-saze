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
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: 'Password',
        rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => (`The email and password you entered don't match`)
        },
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
                <h2 class="mt-14 mr-8"> تغییر رمز عبور </h2>


            </v-row>
            <v-row class="d-flex justify-center align-center">
                <v-row class=" mb-16 card-inside-account  col-md-11 d-flex justify-center align-center">

                    <v-row class="row-mother-password">
                        <v-form v-model="valid" class="form-deatails pa-8 ">
                            <v-row class="row-deatails">

                                <v-col cols="12" class="col-password">
                                    پسورد جدید
                                    <v-text-field color="#d1a04d" :append-icon="show1 ?  'mdi-eye' : 'mdi-eye-off'" class="pt-3"
                                        :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"
                                        name="input-10-1" label="" hint="At least 8 characters" counter
                                        outlined dense></v-text-field>
                                </v-col>
                                <div  >
                                <v-checkbox color="#d1a04d" class="mt-0 mr-4"  @click="show1 = !show1"  label="نمایش رمز عبور" ></v-checkbox>
                            </div>
                                <v-col cols="12" class="col-password  pt-5">
                                    تکرار پسورد جدید
                                    <v-text-field color="#d1a04d" :append-icon="show1 ?  'mdi-eye' : 'mdi-eye-off'" class="pt-3"
                                        :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'"
                                        name="input-10-1" label="" hint="At least 8 characters" counter
                                        @click:append="show1 = !show1" outlined dense></v-text-field>
                                </v-col>
                             <v-checkbox color="#d1a04d" class="mt-0 mr-4"  @click="show1 = !show1"  label="نمایش رمز عبور" ></v-checkbox>
                            </v-row>








                            <v-row class="d-flex justify-center">
                                <v-btn class="ma-2 hover-btn-loves mt-1 " outlined color="#d1a04d">
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
.card-down-account{
    min-height: 90vh !important;
}
.row-deatails {
    margin-top: 0 !important;
}

.under-title {
    color: #687188;
}
.cheacking{
    margin-right: 20px !important;
}
.col-password{
    padding: 0 12px !important;
}
.row-mother-password{
    max-height: fit-content;
}
.link-account{
    text-decoration: none;
    color: black;
}
.hover-btn-loves-trancfer {}
</style>