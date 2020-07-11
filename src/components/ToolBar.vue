<template>
    <div>
             <v-app-bar
           
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon class="d-sm-flex d-md-none" @click="menuShow = true"></v-app-bar-nav-icon>

      <!-- <v-toolbar-title class="d-none d-md-flex">
        LOGO
      </v-toolbar-title> -->
      <!-- <v-spacer class="d-none d-md-flex"></v-spacer> -->
      <v-toolbar-title>
          Logo2
        
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
    </v-app-bar>  
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>