<template>
    <section>
        <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/women/2.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Nin Tendo</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </section>
</template>
    
<script>
export default {
    data: () => ({
        items: [
            { title: "Home", icon: "dashboard" },
            { title: "About", icon: "question_answer" }
        ]
    })
};
</script>

<style>
</style>
