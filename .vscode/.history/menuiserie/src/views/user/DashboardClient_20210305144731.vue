<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="py-12"></div>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
          Dashboard
        </h2>
        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
        <v-row>
          <v-col cols="12" md="6" xs="12">
            profile
          </v-col>
          <v-col cols="12" md="6" xs="12">
            <AgendaClient />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "DashboardClient",
};
</script>
