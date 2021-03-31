<template>
  <v-app-bar fixed>
    <v-app-bar-nav-icon
      class="hidden-sm-and-up hidden-md-and-up"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>
      <router-link class="nav-item" to="/dashboardAdmin">
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
    <UserAction />

    <LanguageSwitcher />
  </v-app-bar>
</template>
<script>
import LanguageSwitcher from "../LanguageSwitcher.vue";
import UserAction from "../UserAction.vue";
export default {
  name: "ToolbarUser",
  data() {
    return {
      links: [
        { text: "Dashboard", route: "/dashboardAdmin" },
        { text: "AgendaAdmin", route: "/agendaAdmin" },
      ],
      drawer: null,
    };
  },
  components: {
    LanguageSwitcher,
    UserAction,
  },
};
</script>
