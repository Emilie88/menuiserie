<template>
  <v-app>
    <v-main>
      <v-sheet>
        <div class="py-12"></div>
        <v-container>
          <RealisationAdmin />
        </v-container>
      </v-sheet>
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
