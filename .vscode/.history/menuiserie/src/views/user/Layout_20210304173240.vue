<template>
  <v-app>
    <v-main>
      <toolbar-user />
      <router-view :key="`${$route.name}+${$route.params.id}`" />
      <Footer />
    </v-main>
  </v-app>
</template>
