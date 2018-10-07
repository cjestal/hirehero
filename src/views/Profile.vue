<template>
    <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>
                <v-carousel>
                    <v-carousel-item
                    v-for="(pic,i) in pics"
                    :key="i"
                    :src="pic.src"
                    ></v-carousel-item>
                </v-carousel>

                <!-- <booking></booking> -->
                <profile-actions></profile-actions>
                <v-list two-line>
                    <v-subheader>Profile</v-subheader>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-avatar
                            slot="activator"
                            size="36px"
                            >
                            <img
                                :src="details.pic"
                                alt="Avatar"
                            >
                            </v-avatar>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ details.name }}</v-list-tile-title>
                            <v-list-tile-sub-title>Name</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action></v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                <v-rating color="red darken-2" v-model="details.rating" readonly></v-rating>
                            </v-list-tile-title>
                            <v-list-tile-sub-title>Rating</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action></v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>Php {{ details.rate }}/hr</v-list-tile-title>
                            <v-list-tile-sub-title>Rate</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>

                    <v-divider inset></v-divider>
                    <v-subheader>Overview & Skills</v-subheader>
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="red darken-2">local_florist</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                        <v-list-tile-title>Cleans</v-list-tile-title>
                        <v-list-tile-sub-title>Rooms, Cars, Pools, Garage</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="red darken-2">local_dining</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                        <v-list-tile-title>Cooks</v-list-tile-title>
                        <v-list-tile-sub-title>Local Recipes, Japanese Recipes</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon color="red darken-2">child_friendly</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                        <v-list-tile-title>Cares</v-list-tile-title>
                        <v-list-tile-sub-title>Infants, Toddlers, Kids, Pets</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                </v-list>
                    <v-divider inset></v-divider>

                <!-- Reviews Section -->
                <reviews></reviews>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import Reviews from "@/views/Reviews";
import Booking from "@/views/Booking";
import ProfileActions from "@/views/ProfileActions"
import jaja from "@/assets/jaja.jpg";

export default {
    components: {
        Reviews,
        Booking,
        ProfileActions
    },
    data: () => ({
        jaja: jaja,
        allowedDates: val => parseInt(val.split("-")[2], 10) % 2 === 0,
        time: [7, 12],
        dates: [],
        pics: [
            {
                src: jaja
            },
            {
                src: jaja
            },
            {
                src: jaja
            },
            {
                src: jaja
            }
        ],
        details: {
            rating: 4.5,
            id: 1,
            name: "Jaja Perez",
            location: "Banilad",
            skills: "Cooks, Cleans, Babysit",
            rate: "50.00",
            pic: jaja
        }
    })
};
</script>

<style>
.v-list__tile__title {
    padding-bottom: 30px;
}
</style>
