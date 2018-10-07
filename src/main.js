import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'
// import firebaseui from 'firebaseui';
import {config} from './firebase-config'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    created() {
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.$router.push('/success')
            } else {
                this.$router.push('/auth')
            }
        });
    },
    render: h => h(App)
}).$mount('#app')