<template>
  <v-app>
    <v-main>
      <Toolbar />
      <Snackbar />
      <router-view :key="`${$route.name}+${$route.params.id}`" />

      <Footer />
    </v-main>
  </v-app>
</template>
