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
                v-for="yaya in yayas"
                :key="yaya.id">
                <v-card color="red darken-2" class="white--text">
                    <v-layout>
                    <v-flex xs5>
                        <v-img :src="yaya.pic" height="125px" contain></v-img>
                    </v-flex>
                    <v-flex xs7>
                        <v-card-title primary-title>
                        <div>
                            <div class="headline">{{ yaya.name }}</div>
                            <!-- <div>{{ yaya.location }}</div> -->
                            <div>{{ yaya.skills }}</div>
                            <div>Php {{ yaya.rate }}/Hr</div>
                            <div>
                                <v-icon>star_border</v-icon>
                                <v-icon>star_border</v-icon>
                                <v-icon>star_border</v-icon>
                                <v-icon>star_border</v-icon>
                                <v-icon>star_border</v-icon>
                            </div>
                        </div>
                        </v-card-title>
                    </v-flex>
                    </v-layout>
                    <v-divider light></v-divider>
                    
                    <v-card-actions >
                        <v-btn flat dark @click="gotoYaya">Profile</v-btn>
                        <v-btn flat dark>Reviews</v-btn>
                    </v-card-actions>

                </v-card>
            </v-flex>
        </v-layout>
      </v-container>

</template>

<script>
export default {
    data: () => ({
        notice: true,
        yayas: [
            {
                id: 1,
                name: "Pia",
                location: "Banilad",
                skills: "Cooks, Cleans, Babysit",
                rate: "50.00",
                pic: "https://randomuser.me/api/portraits/women/32.jpg"
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
    methods: {
        gotoYaya() {
            this.$router.push("profile");
            // alert("pressed!");
        }
    }
};
</script>

<style>
</style>
