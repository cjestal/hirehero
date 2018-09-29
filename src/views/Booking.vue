<template>
    <div class="text-xs-center">
        <v-dialog v-model="dialog" width="500" >
            <v-btn slot="activator" color="error" dark large>
                <v-icon left>face</v-icon>
                Hire
            </v-btn>

            <v-card v-if="page==1">
                <v-layout row wrap>
                    <v-flex xs12 sm6>
                        <v-date-picker
                            v-model="dates"
                            multiple
                            full-width
                            header-color="error"
                            min="2018-09-31"
                            :allowed-dates="allowedDates"></v-date-picker>
                    </v-flex>
                </v-layout>

                <v-list subheader three-line  v-if="dates.length">
                    <v-subheader>Timeslots</v-subheader>
                    
                    <v-list-tile v-for="date in dates" :key="date">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ convertDate(date) }}</v-list-tile-title>
                            <v-list-tile-sub-title>
                                <v-flex shrink style="width: 25px;padding-top:5px;text-align:center;padding-right:10px;">
                                    {{time[0]}}
                                </v-flex>
                                <v-range-slider
                                    v-model="time"
                                    :max="24"
                                    :min="0"
                                    :step="1"
                                    ></v-range-slider>
                                <v-flex shrink style="width: 25px;padding-top:5px;text-align:center;padding-left:10px;">
                                    {{time[1]}}
                                </v-flex>
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                </v-list>

                <v-divider></v-divider>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="grey" @click="dialog = false">
                    Cancel
                </v-btn>
                <v-btn color="error" @click="page = 2">
                    Next
                </v-btn>
                </v-card-actions>
            </v-card>

            <v-card v-if="page==2">
                <v-list subheader two-line>
                    <v-subheader>Booking Details</v-subheader>
                    
                    <v-list-tile v-for="date in dates" :key="date">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ convertDate(date) }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ time[0] }}:00 - {{time[1]}}:00 ({{time[1] - time[0]}} hours)  </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>

                </v-list>
                <v-divider></v-divider>
                
                <v-list subheader two-line>
                    <v-subheader>Amount</v-subheader>
                    
                    <v-list-tile v-for="date in dates" :key="date">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ time[1] - time[0] }} x Php 50.00</v-list-tile-title>
                            <v-list-tile-sub-title>Hours x Rate = Amount</v-list-tile-sub-title>
                            <!-- <v-list-tile-action>Php 250.00</v-list-tile-action> -->
                        </v-list-tile-content>
                    </v-list-tile>

                </v-list>
                
                <v-divider></v-divider>
                <v-card-actions>
                <v-spacer></v-spacer>
                
                <v-btn dark color="grey" @click="page = 1">
                    Back
                </v-btn>
                <v-btn color="error" @click="dialog = false;page = 1">
                    Confirm & Pay
                </v-btn>
                </v-card-actions>
            </v-card>

            </v-dialog>
        <v-btn color="error" dark large>
            <v-icon left >rate_review</v-icon>
            Review
        </v-btn>
    </div>
</template>

<script>
import moment from "moment";

export default {
    data: () => ({
        allowedDates: val => parseInt(val.split("-")[2], 10) % 2 === 0,
        time: [7, 12],
        dates: [],
        page: 1,
        dialog: false
    }),
    methods: {
        convertDate(date) {
            return moment(date).format("MMM Do, YYYY (dddd)");
        }
    }
};
</script>

<style>
</style>
