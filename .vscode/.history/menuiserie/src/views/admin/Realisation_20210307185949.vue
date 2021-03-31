<template>
  <v-app>
    <v-main>
      <v-sheet>
        <div class="py-12"></div>
        <v-container>
          <AgendaAdmin />
        </v-container>
      </v-sheet>
    </v-main>
  </v-app>
</template>
<script>
import AgendaAdmin from "../../components/admin/AgendaAdmin.vue";
export default {
  components: {
    AgendaAdmin,
  },
};
</script>
