<template>
  <div>
    <!-- <v-app-bar
      app
      color="white"
    > -->

    <!-- <v-avatar
        class="mr-3"
        color="grey lighten-5"
        size="60"
      >
        <v-img
          contain
          max-height="70%"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        ></v-img>
      </v-avatar>   -->
    <v-app-bar fixed>
      <v-app-bar-nav-icon
        class="hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link class="nav-item" to="/">
          <img src="../assets/logos.jpg" style="width:55;height:55px;"
        /></router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-list-item
          v-for="item in links"
          :key="item.text"
          router
          :to="item.route"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
          <!-- <v-list-item-action>
              <v-icon >{{item.icon}}</v-icon>
            </v-list-item-action> -->
        </v-list-item>
      </v-toolbar-items>

      <v-list dense v-if="drawer">
        <v-list-item-group v-for="(item, i) in links" :key="i" color="primary">
          <v-list-item @click.stop="drawer = !drawer" router :to="item.route">
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <LanguageSwitcher />
    </v-app-bar>
  </div>
</template>
<script>
import LanguageSwitcher from "./LanguageSwitcher.vue";
export default {
  data() {
    return {
      links: [
        { text: this.$t("toolbar.home"), route: "/" },
        { text: "Realisations", route: "/realisations" },
        { text: "Devis", route: "/devis" },
        { text: "Contact", route: "/contact" },
        { text: "Sign-in", route: "/login" },
      ],
      drawer: null,
    };
  },
  components: {
    LanguageSwitcher,
  },
};
</script>
