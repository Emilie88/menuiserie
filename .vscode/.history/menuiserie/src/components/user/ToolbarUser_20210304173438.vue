<template>
  <v-app-bar fixed>
    <v-app-bar-nav-icon
      class="hidden-sm-and-up hidden-md-and-up"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <router-link class="nav-item" to="/">
        <img src="../../assets/logos.jpg" style="width:55;height:55px;"
      /></router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-list-item
        color="lime darken-3"
        v-for="item in links"
        :key="item.text"
        router
        :to="item.route"
      >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-toolbar-items>

    <v-list dense v-if="drawer">
      <v-list-item-group v-for="(item, i) in links" :key="i">
        <v-list-item @click.stop="drawer = !drawer" router :to="item.route">
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-icon class="ma-2" v-bind="attrs" v-on="on">mdi-logout</v-icon>
      </template>
      <span>SignOut</span>
    </v-tooltip>

    <LanguageSwitcher />
  </v-app-bar>
</template>
<script>
import LanguageSwitcher from "../LanguageSwitcher.vue";
export default {
  name: "ToolbarUser",
  data() {
    return {
      links: [
        { text: "Testimonials", route: "/testimonials" },
        // { text: this.$t("realisation"), route: "/realisations" },
        // { text: this.$t("devis"), route: "/devis" },
        // { text: this.$t("contact"), route: "/contact" },
        // { text: this.$t("login"), route: "/login" },
      ],
      drawer: null,
    };
  },
  components: {
    LanguageSwitcher,
  },
};
</script>
