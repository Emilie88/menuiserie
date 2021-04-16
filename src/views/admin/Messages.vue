<template>
  <v-container>
    <div class="py-8"></div>
    <h2 class="mb-3 text-uppercase text-center">{{ $t("messages") }}</h2>
    <v-responsive class="mx-auto mb-3" width="56">
      <v-divider class="mb-1"></v-divider>
      <v-divider></v-divider>
    </v-responsive>
    <admin-messages />
  </v-container>
</template>
<script>
export default {
  name: "Messages",
};
</script>
