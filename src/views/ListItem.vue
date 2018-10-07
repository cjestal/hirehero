<template>
    <v-card color="red darken-2" class="white--text">
        <v-layout>
            <v-flex xs5>
                <v-img :src="hero.pic" height="125px" contain></v-img>
            </v-flex>
            <v-flex xs7>
                <v-card-title primary-title>
                <div>
                    <div class="headline">{{ hero.name }}</div>
                    <!-- <div>{{ hero.location }}</div> -->
                    <div>{{ hero.skills }}</div>
                    <div>Php {{ hero.rate }}/Hr</div>
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
            <v-btn flat dark @click="openProfile">
                <!-- <v-icon left>face</v-icon> -->
                Profile
            </v-btn>
            <v-dialog v-model="reviewDialog" width="500" >
                <v-btn flat dark slot="activator">
                    <!-- <v-icon left >rate_review</v-icon> -->
                    Reviews
                </v-btn>
            <reviews></reviews>
        </v-dialog>
        </v-card-actions>

    </v-card>
</template>

<script>
import Reviews from "@/views/Reviews"

export default {
    components: {
        Reviews
    },
    props: ["hero"],
    data: () => ({
        reviewDialog: false
    }),
    methods: {
        openProfile() {
            this.$router.push("profile");
            // alert("pressed!");
        }
    }
};
</script>

<style>
</style>
