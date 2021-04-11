<template>
  <v-app-bar fixed>
    <v-app-bar-nav-icon
      class="hidden-sm-and-up hidden-md-and-up"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <router-link class="nav-item" to="/dashboardClient">
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

    <v-list v-if="drawer" dense>
      <v-list-item-group v-for="(item, i) in links" :key="i">
        <v-list-item router :to="item.route" @click.stop="drawer = !drawer">
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <item-user-action />

    <item-language-switcher />
  </v-app-bar>
</template>
<script>
export default {
  name: "ToolbarUser",
  components: {},
  data() {
    return {
      links: [
        { text: "Agenda", route: "/dashboardClient" },
        { text: this.$t("avis"), route: "/testimonials" },
      ],
      drawer: null,
    };
  },
};
</script>
