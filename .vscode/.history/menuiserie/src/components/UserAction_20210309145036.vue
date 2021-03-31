<template>
  <v-menu
    :close-on-content-click="false"
    left
    offset-y
    transition="slide-y-transition"
  >
    <template #activator="{ on }">
      <v-btn text :title="username" v-on="on">
        <v-row wrap>
          <v-col>
            <span class="text-none" v-text="username" />
            <span class="text-none" v-text="role" />
          </v-col>
        </v-row>
      </v-btn>
    </template>
    <v-list class="pa-0">
      <v-list-item @click="signOut">
        <v-list-item-icon><v-icon>mdi-power</v-icon></v-list-item-icon>
        <v-list-item-content class="text-body-2">
          Sign Out
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "UserAction",
  data() {
    return {
      username: localStorage.getItem("username"),
      roles: localStorage.getItem("roles"),
    };
  },
  created() {
    console.log(this.roles);
  },

  methods: {
    async signOut() {
      try {
        localStorage.removeItem("token");
        // Success snackbar
        this.$store.dispatch("show", {
          text: "You are logged out",
          type: "success",
        });
        this.$router.push("/login");
      } catch (error) {
        // Error snackbar
        this.$store.dispatch("show", {
          text: error.message,
          type: "error",
        });
      }
    },
  },
};
</script>
