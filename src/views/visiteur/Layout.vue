<template>
  <v-app>
    <v-main>
      <item-toolbar />
      <div v-if="drawer == true">
        <item-drawer />
      </div>

      <item-snackbar />
      <router-view :key="`${$route.name}+${$route.params.id}`" />
      <item-footer />
    </v-main>
  </v-app>
</template>
<script>
export default {
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
