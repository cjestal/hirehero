<template>
    <v-container fluid grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12  v-if="notice">
                <v-card color="blue-grey darken-2" class="white--text">
                    <v-card-title primary-title>
                        <div class="headline">Hire your help now</div>
                        <div>Search for a reliable help nearby at the touch of your fingertips. Checkout help reviews to make sure you get the right help for you.</div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat dark @click="notice = false">
                            Start searching
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex
                xs12
                v-for="hero in heroes"
                :key="hero.id">
                <list-item :hero=hero></list-item>
            </v-flex>
        </v-layout>
      </v-container>

</template>

<script>
import jaja from "@/assets/jaja.jpg";
import ListItem from "@/views/ListItem"

export default {
    data: () => ({
        notice: true,
        heroes: [
            {
                id: 1,
                name: "Jaja",
                location: "Banilad",
                skills: "Cooks, Cleans, Babysit",
                rate: "50.00",
                pic: jaja
            },
            {
                id: 2,
                name: "Bea",
                location: "Banilad",
                skills: "Cooks, Cleans, Babysit",
                rate: "50.00",
                pic: "https://randomuser.me/api/portraits/women/2.jpg"
            },
            {
                id: 3,
                name: "Anna",
                location: "Banilad",
                skills: "Cooks, Cleans, Babysit",
                rate: "50.00",
                pic: "https://randomuser.me/api/portraits/women/3.jpg"
            },
            {
                id: 4,
                name: "Mimi",
                location: "Banilad",
                skills: "Cooks, Cleans, Babysit",
                rate: "50.00",
                pic: "https://randomuser.me/api/portraits/women/4.jpg"
            },
            {
                id: 5,
                name: "Peggy",
                location: "Banilad",
                skills: "Cooks, Cleans, Babysit",
                rate: "50.00",
                pic: "https://randomuser.me/api/portraits/women/5.jpg"
            },
            {
                id: 6,
                name: "Joyce",
                location: "Banilad",
                skills: "Cooks, Cleans, Babysit",
                rate: "50.00",
                pic: "https://randomuser.me/api/portraits/women/6.jpg"
            }
        ]
    }),
    components: {
        ListItem
    },
    
};
</script>

<style>
</style>
