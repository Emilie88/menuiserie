<template>
  <v-app>
    <v-main>
      <ToolbarUser />
      <router-view :key="`${$route.name}+${$route.params.id}`" />
      <item-footer />
    </v-main>
  </v-app>
</template>
<script>
import ToolbarUser from "../../components/user/ToolbarUser.vue";
export default {
  components: {
    ToolbarUser,
  },
};
</script>
