<template>
  <v-app>
    <v-main>
      <div class="py-12"></div>
      <v-container>
        <div class="py-12"></div>
        <h2
          :class="[
            $vuetify.breakpoint.smAndDown
              ? 'display-1 font-weight-bold mb-3 text-uppercase text-center'
              : 'display-2 font-weight-bold mb-3 text-uppercase text-center',
          ]"
        >
          Gerer mes réalisations
        </h2>
        <v-responsive class="mx-auto mb-12" width="56">
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
