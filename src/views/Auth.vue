<template lang="html">
    <v-content style="background-color:white!important;">
        <v-container fluid fill-height>
            <v-layout row wrap align-center>
                <v-flex xs12 md4>
                    <div class="text-xs-center">
                        <img width="250px" :src="logo">
                        <br>
                        <br>
                        <br>
                        <div id="firebaseui-auth-container"></div>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>
<script>
import firebase from "firebase";
import firebaseui from "firebaseui";
import logo from "@/assets/hero.png";
// import  config  from "../firebase-config";
export default {
    data: () => ({
        logo: logo,
    }),
    mounted() {
        var uiConfig = {
            signInSuccessUrl: "/success",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        };
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start("#firebaseui-auth-container", uiConfig);
    }
};
</script>