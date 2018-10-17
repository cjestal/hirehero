<template>
    <v-content>
      <v-container fluid fill-height>
        <v-layout row wrap align-center>
          <v-flex xs12 md4>
            <div class="text-xs-center">
                <img width="250px" :src="logo">
                <div style="height: 80px;"></div>
                <v-progress-circular
                :rotate="-90"
                :size="100"
                :width="20"
                :value="value"
                color="primary"
                style="bottom: -20px;"
                >
                {{ value }}%
                </v-progress-circular>
            <br>
            <br>
            <br>
            <h3 subheading style="color:grey">Looking for heroes nearby...</h3>
            </div>
          </v-flex>
          
          
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
import logo from "@/assets/hero.png";

export default {
    data: () => ({
        logo: logo,
        interval: {},
        value: 0
    }),
    beforeDestroy() {
        clearInterval(this.interval);
    },
    mounted() {
        this.interval = setInterval(() => {
            if (this.value > 100) {
                // return (this.value = 0);
                this.$router.push("/list");
            }
            this.value += 15;
        }, 500);
    }
};
</script>

<style>
</style>
