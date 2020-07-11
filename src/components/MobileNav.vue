<template>
    <div>
         
<!-- sidebar md -->

        <!-- <v-navigation-drawer
        permanent
        
        
        >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          
         
          link
        >
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          
         
          link
        >
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          
         
          link
        >
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- sidebar md -->

    <!-- Toolbar Desktop -->
                 <!-- <v-app-bar
           
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon class="d-sm-flex d-md-none" @click="menuShow = true"></v-app-bar-nav-icon>

      <v-toolbar-title>
          Logo
        
      </v-toolbar-title>
      
      <v-spacer class=""></v-spacer>
      <v-btn text class="d-none d-md-flex" to="/" >
        <v-icon left>storefront</v-icon>
        Tienda
      </v-btn>
      <v-btn text class="d-none d-md-flex" to="/login" >
        <v-icon left>input</v-icon>
        Ingresar
      </v-btn>
    </v-app-bar>  -->
    <!-- Toolbar Desktop -->

    <v-navigation-drawer
      
      height="100vh"
      :permanent="true"
      :mini-variant="true"
      :expand-on-hover="true"

      :temporary="false"
      :absolute="false"
      
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-if="user">
            <v-list-item-icon>
              <v-icon>dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Panel</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="user">
            <v-list-item-icon>
              <v-icon>group</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Clientes</v-list-item-title>
          </v-list-item>

          <v-list-item @click="logout" v-if="user">
            <v-list-item-icon>
              <v-icon>exit_to_app</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item>

          <v-list-item to="/"   v-if="!user">
            <v-list-item-icon>
              <v-icon>storefront</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tienda</v-list-item-title>
          </v-list-item>

          <v-list-item to="/login" v-if="!user">
            <v-list-item-icon>
              <v-icon>mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ingresar</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
 
    </div>
</template>

<script>
import firebase from 'firebase'
    export default {
        name: 'MobileNav',
        components:{
        
        },
        data: () => ({
      menuShow: false,
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
  #logo{
    text-decoration: none;
  }
</style>