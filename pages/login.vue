<template>
    <validation-observer class="page" v-slot="{ invalid, handleSubmit }">
       <img class="back_img" src="~/assets/images/index/smartphone-beside-mini-desk-globe-1079034.jpg">
       <v-form class="form_fields" @submit.prevent="handleSubmit(submitForm)"> 
           <h2 class="caption">Iniciar sesion en WatchTec</h2>
           <validation-provider class="input_form" v-slot="{ errors }" rules="required|email" name="Correo electronico">
               <v-text-field
                    label="Correo electronico"
                    type="text"
                    append-icon="mdi-account"
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
           <validation-provider class="input_form" v-slot="{ errors }" rules="required" name="Contraseña">
               <v-text-field
                    label="Contraseña"
                    type="password"
                    append-icon="mdi-account-lock"
                    :error-messages="errors[0]"
                    name="password"
                    id="password"
                    v-model="password"
                    autocomplete="off"
                    dense
                    dark
                    required
                ></v-text-field>
           </validation-provider>
           <v-btn type="submit">Registrar</v-btn>
       </v-form>
    </validation-observer>
</template>

<script>
import { ValidationProvider,  ValidationObserver } from 'vee-validate';

export default {
    data() {
        return {
            email:"",
            password:""
        }
    },
    components:{
        ValidationProvider,
        ValidationObserver
    },
    methods:{
        async submitForm(){
            try {
                let { data, status } = await this.$axios.post("/api/auth/login",this.$data)
                if(data.token && status == 200){
                    window.localStorage.setItem('token',data.token)
                    this.$toast.global.successMessage() 
                    this.$router.push({ name:'App' })
                }
                else if(data.message == 'Wrong password')
                {
                    console.log(data.message)
                }
                else if(data.message == 'Error getting token')
                {
                    console.log(data.message)
                }
                else if(status =! 200)
                {
                    console.log("error")
                }
                else
                {
                    console.log("error")
                }
                
            } catch (error) {
                console.error(error)
                this.$toast.global.errorMessage()
            }
            
        }
    }
}
</script>

<style lang="scss">

</style>