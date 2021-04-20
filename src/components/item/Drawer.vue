<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    class="hidden-sm-and-up hidden-md-and-up"
  >
    <v-list nav dense>
      <v-list-item
        v-for="item in links"
        :key="item.text"
        color="lime darken-3"
        router
        :to="item.route"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
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
  computed: {
    drawer: {
      get() {
        return this.$store.getters["drawer"];
      },

      set(value) {
        this.$store.commit("setDrawer", value);
      },
    },
  },
};
</script>
