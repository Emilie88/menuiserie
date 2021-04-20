<template>
  <v-app>
    <v-main>
      <admin-toolbar-admin />
      <div v-if="drawer == true">
        <admin-drawer />
      </div>
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
