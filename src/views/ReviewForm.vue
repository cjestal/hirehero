<template>
    <v-card>
        <v-card-title dark class="error py-4 title">
            Leave a Review
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
                <v-flex xs12 align-center justify-space-between>
                    <v-layout align-center>
                        <h3 style="color:grey">Rating: </h3>
                        <v-rating color="red darken-2" v-model="rating"></v-rating>
                    </v-layout>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                    <v-text-field
                    type="text"
                    label="Title"></v-text-field>
                </v-flex>
                <v-flex xs12 align-center justify-space-between>
                    <v-textarea
                    name="input-7-1"
                    label="Your Impressions"
                    v-model="message"
                    ></v-textarea>
                </v-flex>
            </v-layout>
        </v-container>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="grey">Cancel</v-btn>
            <v-btn color="error">
                Submit
            </v-btn>
        </v-card-actions>
    </v-card>
    
</template>

<script>
export default {
    data: () => ({
        rating: 3,
        message: '',
    })
};
</script>

<style>
</style>
