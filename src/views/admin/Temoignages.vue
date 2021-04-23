<template>
  <v-app>
    <v-main>
      <div class="py-8"></div>
      <v-container>
        <h2 class="mb-3 text-uppercase text-center">{{ $t("avis") }}</h2>

        <v-responsive class="mx-auto mb-3" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
        <admin-temoignages />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "Temoignages",
};
</script>
