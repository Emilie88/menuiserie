<template>
  <v-app>
    <v-main>
      <Toolbar />
      <Snackbar />
      <router-view :key="`${$route.name}+${$route.params.id}`" />
    </v-main>
    <Footer />
  </v-app>
</template>
