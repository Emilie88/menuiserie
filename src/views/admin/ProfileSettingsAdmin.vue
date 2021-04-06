<template>
  <v-app>
    <v-main>
      <v-container>
        <div class="py-8"></div>
        <h2 class="mb-3 text-uppercase text-center">Profile Settings</h2>
        <v-responsive class="mx-auto mb-3" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <item-profile-admin />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "ProfileSettingsAdmin",

  data() {
    return {};
  },
};
</script>
