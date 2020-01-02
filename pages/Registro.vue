<template>
    <validation-observer class="page" v-slot="{ invalid, handleSubmit }">
        <img class="back_img" src="~/assets/images/index/person-wearing-beige-sweater-holding-map-inside-vehicle-1252500.jpg">
        <v-form class="form_fields" @submit.prevent="handleSubmit(submitForm)">
            <h2 class="caption">Ingrese sus datos para registrar una cuenta en WT</h2>
            <validation-provider class="input_form" v-slot="{ errors }" rules="required|min:3|max:25" name="Nombre de usuario">
                <v-text-field
                    label="Nombre de usuario"
                    type="text"
                    append-icon="mdi-account"
                    :error-messages="errors[0]"
                    name="username"
                    id="username"
                    v-model="username"
                    autocomplete="off"
                    dense
                    dark
                    required
                ></v-text-field>
            </validation-provider>
            <validation-provider class="input_form" v-slot="{ errors }" rules="required|min:3|max:25" vid="password" name="Contraseña">
                <v-text-field
                    label="Contraseña"
                    type="password"
                    append-icon="mdi-account-lock"
                    :error-messages="errors[0]"
                    name="password"
                    id="password"
                    v-model="password"
                    autocomplete="off"
                    dark
                    dense
                    required
                ></v-text-field>
            </validation-provider>    
            <validation-provider class="input_form" v-slot="{ errors }" rules="required|confirmed:password" name="Confirmar contraseña">
                <v-text-field
                    label="Confirmar contraseña"
                    type="password"
                    append-icon="mdi-account-lock"
                    :error-messages="errors[0]"
                    name="password_confirm"
                    id="password_confirm"
                    v-model="password_confirm"
                    autocomplete="off"
                    dense
                    dark
                    required
                ></v-text-field>
            </validation-provider>       
            <validation-provider class="input_form" v-slot="{ errors }" rules="required|email" name="Correo electronico">
                <v-text-field
                    label="Correo electronico"
                    type="email"
                    append-icon=" mdi-email"
                    :error-messages="errors[0]"
                    name="email"
                    id="email"
                    v-model="email"
                    autocomplete="off"
                    dense
                    dark
                    required
                ></v-text-field>
            </validation-provider>
            <validation-provider class="input_form" v-slot="{ errors , validate }" rules="required|image" name="imagen de usuario">
                <v-file-input 
                    label="Imagen de usuario"
                    append-icon="mdi-image"
                    @change="validate"
                    :error-messages="errors[0]"
                    id="user_img"
                    name="user_img"
                    v-model="user_img"
                    autocomplete="off"
                    dense
                    dark
                    required
                ></v-file-input>    
            </validation-provider>
            <v-btn type="submit">Registrar</v-btn>
        </v-form>
    </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
    head:{
        title: "Registro",
        script:[
        { src:"https://www.google.com/recaptcha/api.js?render=6LcllskUAAAAAFPbGDHRhx9zp2hCn7_2kCf5_Owr", 
            asycn: true, defer: true}
        ],
    },
    data() {
        return {
            username: "",
            password: "",
            password_confirm:"",
            email:"",
            user_img: undefined
        }
    },
    components:{
        ValidationProvider,
        ValidationObserver
    },
    methods:{
        async submitForm(){
            try {
                const user_data = this.$data
                const { data } = await this.$axios.post("/api/user", user_data)
                if(data.code == 11000){
                    console.log(data.code)
                    return
                }
                console.log(data)
                this.$toast.global.successMessage()
            } catch (error) {
                console.error(error)
                this.$toast.global.errorMessage()
            }
        }
    }
}
</script>
