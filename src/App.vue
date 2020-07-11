<template>
<!-- <v-app> -->

<!-- <v-app-bar color="deep-purple" dark> -->
<!-- <MobileNav class="d-sm-flex d-md-none"/> -->
  
<!-- </v-app-bar> -->

          
<!-- <side-bar /> -->
    <!-- -->
    <!-- <ToolBar  />
    <v-layout>
      <v-flex>
<DesktopNav class="d-none d-md-block"/> -->
        <!-- <MobileNav /> -->

      <!-- </v-flex>
      <v-flex>
        <v-main>
          <v-container>
            
              <router-view class="red"/>
          </v-container>

        </v-main>

      </v-flex>
    </v-layout>
<v-footer app>
  </v-footer>
</v-app> -->
    <!-- -->
    <!-- App.vue -->

<v-app>
  <!-- <v-navigation-drawer app>
  </v-navigation-drawer> -->
  <!-- Navigation drawer -->
  <!-- toolbar -->
 

    <Navigation />

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>

import Navigation from '@/components/Navigation.vue'
// import DesktopNav from '@/components/DesktopNav.vue'
// import MobileNav from '@/components/MobileNav.vue'
// import ToolBar from '@/components/ToolBar.vue'
  export default {
    name: 'App',
    components:{
      Navigation,
      // DesktopNav,
      // MobileNav,
      // ToolBar
    },
    data : () => ({
      // drawerw: true,
       
  })

  }
</script>

<style scoped>
  
</style>