<template>
  <v-app-bar fixed>
    <v-app-bar-nav-icon
      class="hidden-sm-and-up hidden-md-and-up"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <router-link class="nav-item" to="/">
        <img src="../assets/logos.jpg" style="width: 55; height: 55px"
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

    <v-list v-if="drawer" dense>
      <v-list-item-group v-for="(item, i) in links" :key="i">
        <v-list-item router :to="item.route" @click.stop="drawer = !drawer">
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          class="ma-2"
          @click="$vuetify.goTo('#contact')"
          v-bind="attrs"
          v-on="on"
          >mdi-email</v-icon
        >
      </template>
      <span>Contact</span>
    </v-tooltip> -->
    <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon
          class="ma-2"
         
          v-bind="attrs"
          v-on="on"
          >mdi-login-variant</v-icon
        >
      </template>
      <span>Login/Register</span>
    </v-tooltip> -->

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
      drawer: null,
    };
  },
};
</script>
