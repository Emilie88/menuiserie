<template>
  <v-menu
    :close-on-content-click="false"
    left
    offset-y
    transition="slide-y-transition"
  >
    <template #activator="{ on }">
      <v-btn text :title="email" v-on="on">
        <v-row wrap>
          <v-col>
            <span class="text-none" v-text="email" />
          </v-col>
        </v-row>
      </v-btn>
    </template>
    <v-list class="pa-0">
      <!-- Profile settings -->
      <v-list-item
        v-if="roles === 'ROLE_USER'"
        :to="{ name: 'ProfileUser' }"
        exact
        ripple
        title="ProfileSettings"
        @click="menu = false"
      >
        <v-list-item-action>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            <span>{{ $t("profileSettings") }}</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-if="roles === 'ROLE_ADMIN'"
        :to="{ name: 'ProfileSettingsAdmin' }"
        exact
        ripple
        title="ProfileSettings"
        @click="menu = false"
      >
        <v-list-item-action>
          <v-icon>mdi-account-circle</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            <span>{{ $t("profileSettings") }}</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item @click="signOut">
        <v-list-item-icon><v-icon>mdi-power</v-icon></v-list-item-icon>
        <v-list-item-content class="text-body-2">
          {{ $t("logout") }}
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
      email: localStorage.getItem("email"),
      roles: localStorage.getItem("roles"),
    };
  },

  methods: {
    async signOut() {
      try {
        localStorage.removeItem("token");

        // Clear localStorage
        let toBeRemovedKeys = []; // Array to hold the keys
        // Iterate over localStorage and insert the keys that meet the condition into toBeRemovedKeys
        for (let i = 0; i < localStorage.length; i++) {
          // Save only language and devextreme state-storage
          if (localStorage.key(i) !== "userLocale") {
            toBeRemovedKeys.push(localStorage.key(i));
          }
        }
        // Iterate over toBeRemovedKeys and remove the items by key
        toBeRemovedKeys.forEach((key) => localStorage.removeItem(key));
        document.location.reload();
        // Success snackbar
        this.$store.dispatch("show", {
          text: "You are logged out",
          type: "success",
        });

        this.$router.push({ name: "Login" });
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
