<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="py-12"></div>
        <h2 class="mb-3 text-uppercase text-center">
          Dashboard
        </h2>
        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
        <v-row>
          <v-col cols="12" md="6" xs="12">
            <div>Modifiez vos données personneles !</div>

            <ProfileUser />
          </v-col>
          <v-col cols="12" md="6" xs="12">
            <div>Mon agenda</div>

            <AgendaClient />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import ProfileUser from "../../components/user/ProfileUser.vue";
import AgendaClient from "../../components/user/AgendaClient.vue";
export default {
  name: "DashboardClient",
  components: {
    AgendaClient,
    ProfileUser,
  },
};
</script>
