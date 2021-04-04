<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="py-12"></div>
        <h2 class="mb-3 text-uppercase text-center">Agenda</h2>
        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <admin-agenda-admin />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "DashboardAdmin",
};
</script>
