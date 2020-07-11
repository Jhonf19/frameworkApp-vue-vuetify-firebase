<template>
    <v-container>
        <v-layout justify-center align-center>
            <v-flex xs12 md8 lg4>
                    <v-alert v-if="this.msg" type="error">
                    {{ this.msg }}
                    </v-alert>
                <v-card class="mt-5">
                    <v-card-title>Inicio de Sesión</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="login">
                            <v-text-field
                            autofocus
                            v-model="user"
                            label="Correo"
                            :rules="emailRules"
                            required
                            >
                            </v-text-field>

                            <v-text-field
                            v-model="password"
                            label="Contraseña"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show1 ? 'text' : 'password'"
                            @click:append="show1 = !show1"
                            :rules="passRules"
                            required
                            >
                            </v-text-field>
                            <v-btn color="primary"
                            type="submit"
                            >Ingresar</v-btn>
                            <v-btn text class="text-lowercase" color="error">recuperar contraseña</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
    

</template>

<script>
import firebase from 'firebase'
    export default {
        name: 'Login',
        data(){
            return {
                show1: false,
                user: '',
                password: '',
                msg: '',
                emailRules:
                    [
                        v => !!v || 'Correo es obligatorio',
                        v => /.+@.+\..+/.test(v) || 'Correo debe ser valido',
                    ],            
                passRules:
                    [
                        v => !!v || 'Contraseña es obligatorio',
                        // v => (v && v.length <= 10) || 'Usuario de tener maximo 10 caracters',
                    ]
                }
        },
        methods: {
            login(){
                firebase.auth()
                .signInWithEmailAndPassword(this.user, this.password)
                .then(() => {
                    this.$router.replace('dashboard')
                    })
                .catch( error => {
                    console.log(error);
                    
                    if(error.code == 'auth/invalid-email'){

                        this.msg = 'La dirección de correo electrónico está mal formateada'
                    }
                    if(error.code == 'auth/wrong-password'){

                        this.msg = 'La contraseña no es válida o el usuario no tiene una contraseña'
                    }
                    if(error.code == 'auth/user-not-found'){

                        this.msg = 'No hay registro de usuario correspondiente a este identificador. El usuario puede haber sido eliminado'
                    }
                })
                
            }
        }
        
    }
</script>

<style scoped>

</style>