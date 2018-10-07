<template lang="html">
    <v-content style="background-color:white!important;">
        <v-container fluid fill-height>
            <v-layout row wrap align-center>
                <v-flex xs12 md4>
                    <div class="text-xs-center">
                        <img width="250px" :src="logo">
                        <br><br><br>
                        You are now logged in.
                        <span @click="logOut">Logout</span>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import firebase from "firebase";
import logo from "@/assets/hero.png";

export default {
    data: () => ({
        logo: logo,
    }),
    created() {
        this.user = firebase.auth().currentUser;
        if (this.user) {
            this.name = this.user.displayName;
            this.email = this.user.email;
            this.photo = this.user.photoURL;
            this.userId = this.user.uid;
        }
    },
    methods: {
        logOut() {
            firebase.auth().signOut();
        }
    }
};
</script>