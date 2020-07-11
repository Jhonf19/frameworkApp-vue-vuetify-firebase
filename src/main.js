import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
// import { includes } from 'core-js/fn/array';
// import firebase from './'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = require('./plugins/firebaseKey.js')
// Initialize Firebase
var firebase = require('firebase')

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(){
  new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount('#app')

})

