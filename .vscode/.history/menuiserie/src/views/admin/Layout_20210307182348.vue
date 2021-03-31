<template>
  <v-app>
    <v-main>
      <ToolbarAdmin />
      <router-view :key="`${$route.name}+${$route.params.id}`" />
      <Footer />
    </v-main>
  </v-app>
</template>
<script>
import ToolbarAdmin from "../../components/admin/ToolbarAdmin.vue";
export default {
  components: {
    ToolbarAdmin,
  },
};
</script>
