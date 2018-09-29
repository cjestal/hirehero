<template>
    <v-list three-line>
        <v-subheader>Reviews (5)</v-subheader>
        <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header" >
                Reviews ({{ items.length }})
            </v-subheader>

            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index" ></v-divider>

            <v-list-tile v-else :key="item.title" avatar >
            <v-list-tile-avatar>
                <img :src="item.avatar">
            </v-list-tile-avatar>

            <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
            </v-list-tile-content>
            </v-list-tile>
        </template>
    </v-list>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                title: "She is so nice!",
                subtitle:
                    "I don't have problems with her. Does a good job in cleaning my house. Will hire again."
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                title:
                    'Very efficient <span class="grey--text text--lighten-1">4 stars!</span>',
                subtitle:
                    "Hired her for the weekend, and was glad to see my house clean."
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                title: "My pets like her",
                subtitle:
                    "I think she plays with them at work, which is a great bonus!"
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                title: "Sloppy and lazy",
                subtitle:
                    "Expected her to clean the entire house. Only cleaned half of it! :("
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                title: "I like her hair",
                subtitle: "... and her shoes."
            }
        ]
    })
};
</script>

<style>
</style>
