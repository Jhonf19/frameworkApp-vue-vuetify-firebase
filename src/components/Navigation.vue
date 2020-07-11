<template>
  <div>
    <v-navigation-drawer app v-model="menuShow" absolute temporary>
      <v-list nav dense>
        <v-list-item-group  active-class="deep-purple--text text--accent-4">

          <v-list-item class="d-sm-flex d-md-none" to="/" v-if="!user">
            <v-list-item-icon>
              <v-icon>storefront</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tienda</v-list-item-title>
          </v-list-item>

          <v-list-item class="d-sm-flex d-md-none" to="/login" v-if="!user">
            <v-list-item-icon>
              <v-icon>input</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ingresar</v-list-item-title>
          </v-list-item>

          <v-list-item to="/dashboard" v-if="user">
            <v-list-item-icon>
              <v-icon>dashboard</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Panel</v-list-item-title>
          </v-list-item>


            <v-list-item to="/products" v-if="user">
                <v-list-item-icon>
                <v-icon>layers</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Productos</v-list-item-title>
            </v-list-item>
          <!-- LISTA ANIDADA -->
            <!-- <v-list-group prepend-icon="layers" no-action value="true" v-model="active">
               

                <template v-slot:activator>
                    <v-list-item-content>
                        <v-list-item-title>Productos</v-list-item-title>
                    </v-list-item-content>
                </template>
                <v-list-item to="/login"> 
                    <v-list-item-icon>
                        <v-icon>category</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Categorias</v-list-item-title>
                </v-list-item>
                
                <v-list-item link>
                    <v-list-item-title>Agregar</v-list-item-title>
                    <v-list-item-action>
                        <v-icon>add_box</v-icon>
                    </v-list-item-action>
                </v-list-item>


            </v-list-group> -->

          <v-list-item @click="logout()" class="d-sm-flex d-md-none" v-if="user">
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item>
        </v-list-item-group>

      </v-list>
    </v-navigation-drawer>


    <v-app-bar app color="deep-purple" dark>
      <v-app-bar-nav-icon v-if="!user" class="d-sm-flex d-md-none" @click="menuShow = true"></v-app-bar-nav-icon>
      <v-app-bar-nav-icon v-if="user" class @click="menuShow = true"></v-app-bar-nav-icon>

        <v-toolbar-title >
            App Name
        </v-toolbar-title>

      <v-spacer class="d-none d-md-flex"></v-spacer>

      <v-btn text class="d-none d-md-flex" to="/">
        <v-icon left>storefront</v-icon>Tienda
      </v-btn>

      <v-btn v-if="!user" text class="d-none d-md-flex" to="/login">
        <v-icon left>exit_to_app</v-icon>Ingresar
      </v-btn>

      <v-btn v-if="user" text class="d-none d-md-flex" @click="logout">
        <v-icon left>input</v-icon>Salir
      </v-btn>

    </v-app-bar>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "ToolBar",
  data: () => ({
    menuShow: false,
    user: false,
    active: true
  }),
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("/"));
    }
  }
};
</script>

<style lang="scss" scoped>
</style>