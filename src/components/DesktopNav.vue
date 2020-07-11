<template>
    <!-- <v-container class="d-none d-md-flex">
        <router-link to="/">Home</router-link>
        | <router-link v-if="!user" to="/login">Login</router-link>
        | <router-link v-if="user" to="/dashboard">Dashboard</router-link>
        | <button v-if="user" @click="logout()">Logout</button>
    </v-container> -->
    <v-app-bar color="primary"  app>
        <v-toolbar-title>Logo</v-toolbar-title>
        <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn >
                olar
            </v-btn>
    </v-app-bar>
</template>

<script>
import firebase from 'firebase'
    export default {
        name: 'DesktopNav',
        components:{
        
        },
        data: () => ({
      user: false,
    }),
        created(){
            firebase.auth().onAuthStateChanged( user => {
                if (user) {
                    console.log('userX'+user);
                    this.user = user
                    
                } else {
                    console.log('userXno'+user);
                    this.user = null
                }
            })
    },
     methods: {
    logout(){
      firebase.auth().signOut()
      .then( () => this.$router.replace('/'))
    }
    
  }
    }
</script>

<style lang="css" scoped>

</style>