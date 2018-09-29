<template>
    <v-card>
        <v-card-title dark class="blue darken-3 py-4 title">
            Search Heroes
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
            <v-layout row wrap>
                <v-flex xs12 align-center justify-space-between>
                    <v-layout align-center>
                        <v-text-field prepend-icon="person" placeholder="Name"></v-text-field>
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
            <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
            <v-btn flat @click="dialog = false">Search</v-btn>
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
        ]
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
