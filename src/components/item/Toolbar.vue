<template>
  <v-app-bar fixed>
    <v-app-bar-nav-icon
      class="hidden-sm-and-up hidden-md-and-up"
      @click.stop="toggleDrawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <router-link class="nav-item" to="/">
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

    <LanguageSwitcher />
  </v-app-bar>
</template>
<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";
export default {
  components: {
    LanguageSwitcher,
  },
  data() {
    return {
      links: [
        { text: this.$t("home"), route: "/" },
        { text: this.$t("achievement"), route: "/realisations" },
        { text: this.$t("devis"), route: "/devis" },
        { text: this.$t("contact"), route: "/contact" },
        { text: this.$t("login"), route: "/login" },
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
