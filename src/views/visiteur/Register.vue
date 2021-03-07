<template>
  <v-app>
    <v-main>
      <div class="py-12"></div>
      <v-container>
        <v-row>
          <p class="ma-2">
            Cette page est reserve pour tous les clients qui ont envie de
            partager leur experience avec nous en creant un compte qui leur
            donne le droit de deposer leurs avis sur les travaux réalisées!
          </p>
          <br />
        </v-row>
        <v-card color="#333333">
          <v-tabs show-arrows color="lime darken-3" icons-and-text grow>
            <v-tabs-slider color="lime darken-3"></v-tabs-slider>
            <v-tab>
              <v-icon large>mdi-account-outline</v-icon>
              <div class="caption py-1">Register</div>
            </v-tab>
            <v-tab-item>
              <RegisterForm />
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-container>
      <div class="py-12"></div>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "Register",
};
</script>
