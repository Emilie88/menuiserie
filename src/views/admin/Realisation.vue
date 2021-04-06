<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="py-8"></div>
        <h2 class="mb-3 text-uppercase text-center">Add réalisations</h2>
        <v-responsive class="mx-auto mb-3" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
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
