<template>
    <v-card>
        <v-card-title dark class="error py-4 title">
            Search Heroes
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
                <v-flex xs12 align-center justify-space-between>
                    <v-layout align-center>
                        <h3 style="color:grey">Rating: </h3>
                        <v-rating color="red darken-2" v-model="rating"></v-rating>
                    </v-layout>
                </v-flex>

                <v-flex xs12>
                    <v-text-field type="address" prepend-icon="add_location" placeholder="Address"></v-text-field>
                </v-flex>
                
                <v-flex xs12>
                    <v-combobox
                        v-model="chips"
                        :items="items"
                        label="Skills"
                        chips
                        clearable
                        prepend-icon="filter_list"
                        solo
                        multiple
                    >
                        <template slot="selection" slot-scope="data">
                        <v-chip :selected="data.selected" close @input="remove(data.item)">
                            <strong>{{ data.item }}</strong>&nbsp;
                        </v-chip>
                        </template>
                    </v-combobox>
                </v-flex>
            </v-layout>
        </v-container>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="grey" @click="dialog1 = false">Cancel</v-btn>
            <v-btn color="error" @click="dialog1 = false">
                Search
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        chips: ["Baby sitting", "Cleaning", "Dog sitting"],
        items: [
            "Dishwashing",
            "Laundry",
            "Car wash",
            "Cooking",
            "Pool cleaning",
            "Cat sitting"
        ],
        rating: 3
    }),
    methods: {
        remove(item) {
            this.chips.splice(this.chips.indexOf(item), 1);
            this.chips = [...this.chips];
        }
    }
};
</script>

<style>
</style>
