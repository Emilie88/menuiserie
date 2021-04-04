<template>
  <v-app>
    <v-main>
      <admin-toolbar-admin />
      <router-view :key="`${$route.name}+${$route.params.id}`" />
      <item-footer />
    </v-main>
  </v-app>
</template>
