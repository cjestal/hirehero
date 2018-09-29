<template>
    <v-app id="inspire">
        <v-system-bar status color="red darken-2">
            <v-spacer></v-spacer>
            <v-icon>network_wifi</v-icon>
            <v-icon>signal_cellular_null</v-icon>
            <v-icon>battery_full</v-icon>
            <span>12:30</span>
        </v-system-bar>
        <v-content>
            <router-view/>
        </v-content>
        <v-btn fab bottom right color="blue darken-2" dark fixed @click="dialog = !dialog">
            <v-icon>search  </v-icon>
        </v-btn>
        <v-dialog v-model="dialog" width="800px">
            <registration-form></registration-form>
        </v-dialog>
    </v-app>
</template>

<script>
import ySidebar from "@/views/Sidebar";
import yayaList from "@/views/YayaList";
import registrationForm from "@/views/RegistrationForm";

export default {
    data: () => ({
        dialog: false,
        drawer: null
    }),
    props: {
        source: String
    },
    components: {
        ySidebar,
        registrationForm,
        yayaList
    }
};
</script>