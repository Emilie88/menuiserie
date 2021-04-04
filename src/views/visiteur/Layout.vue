<template>
  <v-app>
    <v-main>
      <item-toolbar />
      <item-snackbar />
      <router-view :key="`${$route.name}+${$route.params.id}`" />
      <item-footer />
    </v-main>
  </v-app>
</template>
