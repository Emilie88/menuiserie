<template>
  <v-app>
    <v-main>
      <div class="py-12"></div>
      <v-container>
        <div class="py-12"></div>
        <h2 class="mb-3 text-uppercase text-center">
          Gerer mes réalisations
        </h2>
        <RealisationAdmin />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import RealisationAdmin from "../../components/admin/RealisationAdmin.vue";
export default {
  components: {
    RealisationAdmin,
  },
};
</script>
