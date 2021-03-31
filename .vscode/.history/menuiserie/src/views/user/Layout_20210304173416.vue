<template>
  <v-app>
    <v-main>
      <ToolbarUser />
      <router-view :key="`${$route.name}+${$route.params.id}`" />
      <Footer />
    </v-main>
  </v-app>
</template>
