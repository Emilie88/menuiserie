<template>
  <v-main>
    <v-container fluid fill-height pa-0>
      <Toolbar />
      <Snackbar />
      <router-view :key="`${$route.name}+${$route.params.id}`" />
    </v-container>
    <Footer />
  </v-main>
</template>
