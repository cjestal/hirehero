<template>
    <div class="text-xs-center">
        <v-dialog v-model="hireDialog" width="500" >
            <v-btn slot="activator" color="error" dark large @click="page = 1">
                <v-icon left>face</v-icon>
                Hire
            </v-btn>
            <booking></booking>
        </v-dialog>
        
        <v-dialog v-model="reviewDialog" width="500" >
            <v-btn slot="activator" color="error" dark large>
                <v-icon left >rate_review</v-icon>
                Review
            </v-btn>
            <review-form></review-form>
        </v-dialog>
    </div>
</template>

<script>
import ReviewForm from '@/views/ReviewForm'
import Booking from '@/views/Booking'

export default {
    data: () => ({
        hireDialog: false,
        reviewDialog: false,
    }),
    components: {
        ReviewForm,
        Booking
    }
}
</script>

<style>

</style>
