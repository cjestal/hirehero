<template>
    <div class="text-xs-center">
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
            <v-btn flat dark color="grey" @click="dialog = false">
                Cancel
            </v-btn>
            <v-btn color="error" @click="page = 2" :disabled="!dates.length">
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
                        <v-list-tile-title>{{ time[1] - time[0] }} x Php 50.00 = Php {{50 * (time[1] - time[0])}}.00</v-list-tile-title>
                        <v-list-tile-sub-title>{{convertDate(date)}}</v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>
            
            <v-divider></v-divider>
            <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn  flat dark color="grey" @click="page = 1">
                Back
            </v-btn>
            <v-btn color="error" @click="page = 3">
                Confirm & Pay
            </v-btn>
            </v-card-actions>
        </v-card>

        <v-card v-if="page==3">
            <v-list subheader two-line>
                <v-subheader>Payment</v-subheader>
                <v-list-tile>
                    <v-list-tile-content>
                        <v-list-tile-sub-title style="margin-bottom:10px;">Total Amount:</v-list-tile-sub-title>
                        <v-list-tile-title>
                            <h2>Php {{ total }}.00</h2>
                            </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>

            </v-list>
            
            <!-- <v-divider></v-divider> -->

            <v-list subheader two-line>
                <v-subheader>Payment Methods</v-subheader>
                <v-radio-group v-model="radios" :mandatory="false">
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon >credit_card</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>1234 12** **** 1234</v-list-tile-title>
                            <v-list-tile-sub-title>Credit/Debit Card</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-radio value="radio-1"></v-radio>
                        </v-list-tile-action>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon >credit_card</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>2323 42** **** 4423</v-list-tile-title>
                            <v-list-tile-sub-title>Credit/Debit Card</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-radio value="radio-2"></v-radio>
                        </v-list-tile-action>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon >credit_card</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>3214 94** **** 8878</v-list-tile-title>
                            <v-list-tile-sub-title>Paypal</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-radio value="radio-3"></v-radio>
                        </v-list-tile-action>
                    </v-list-tile>

                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon >mobile_screen_share</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>5725 67** **** 1234</v-list-tile-title>
                            <v-list-tile-sub-title>G-cash</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-radio value="radio-4"></v-radio>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-radio-group>
            </v-list>
            
            
            <v-divider></v-divider>
            <v-card-actions>
            <v-spacer></v-spacer>
            
            <v-btn flat dark color="grey" @click="page = 1">
                Back
            </v-btn>
            <!-- <v-btn color="error" @click="dialog = false;page = 1">
                OK
            </v-btn> -->

            <v-btn
                :loading="loading"
                :disabled="loading"
                color="error"
                @click.native="loader = 'loading'"
                >
            Confirm
            </v-btn>

            </v-card-actions>
        </v-card>
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
        radios: "radio-1",
        loader: null,
        loading: false
    }),
    watch: {
        loader() {
            const l = this.loader;
            this[l] = !this[l];

            setTimeout(() => {
                this[l] = false;
                this.dialog = false;
                this.page = 1;
            }, 3000);

            this.loader = null;
        }
    },
    methods: {
        convertDate(date) {
            return moment(date).format("MMM Do, YYYY (dddd)");
        }
    },
    computed: {
        total() {
            let days = this.dates.length;
            let hours = this.time[1] - this.time[0];
            return days * hours * 50;
        }
    }
};
</script>

<style>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}
@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@-o-keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
@keyframes loader {
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
