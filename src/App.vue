<template>
    <v-app id="inspire">
        <router-view/>
        <!-- <section>
            <v-toolbar
            absolute
            color="red darken-2"
            dark
            scroll-off-screen
            scroll-target="#scrolling-techniques">
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <v-avatar size="30px" style="background-color:white">
                    <img :src="logo">
                </v-avatar>
            </v-toolbar-title>

            </v-toolbar>
            <v-content style="margin-top:56px;">
                <router-view/>
            </v-content>
            <v-btn
                fab
                bottom
                right
                color="blue darken-2"
                dark
                fixed
                @click="searchDialog = !searchDialog">
                <v-icon>search  </v-icon>
            </v-btn>
            <v-dialog v-model="searchDialog" width="800px">
                <search></search>
            </v-dialog>
        </section> -->
    </v-app>
</template>

<script>
import ySidebar from "@/views/Sidebar";
import List from "@/views/List";
import search from "@/views/Search";
import logo from "@/assets/hero2.png";

export default {
    data: () => ({
        searchDialog: false,
        dialog2: false,
        drawer: null,
        logo: logo
    }),
    props: {
        source: String
    },
    components: {
        ySidebar,
        search,
        List
    },
    mounted() {}
};
</script>