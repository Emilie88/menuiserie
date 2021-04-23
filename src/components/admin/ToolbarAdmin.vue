<template>
  <v-app-bar fixed>
    <v-app-bar-nav-icon
      class="hidden-sm-and-up hidden-md-and-up"
      @click.stop="toggleDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <router-link class="nav-item" to="/dashboardAdmin">
        <img src="../../assets/logos.jpg" style="width: 55; height: 55px"
      /></router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-list-item
        v-for="item in links"
        :key="item.text"
        color="lime darken-3"
        router
        :to="item.route"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-toolbar-items>

    <item-user-action />

    <item-language-switcher />
  </v-app-bar>
</template>
<script>
export default {
  name: "ToolbarAdmin",

  data() {
    return {
      links: [
        { text: "Agenda", route: "/dashboardAdmin" },
        { text: this.$t("avis"), route: "/temoignages" },
        // { text: this.$t("messages"), route: "/messages" },
        { text: this.$t("achievement"), route: "/realisation" },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.$store.commit("toggleDrawer");
    },
  },
};
</script>
