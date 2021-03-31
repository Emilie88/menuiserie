<template>
  <v-app>
    <v-main>
      <v-container
        ><div class="py-12"></div>
        <div>
          Pour ajouter ou gerer vos avis
          <router-link to="/testimonials" class="text-decoration-none">
            <v-icon>mdi-cursor-default-click</v-icon>
          </router-link>
        </div>
        <Calendar />
      </v-container>
    </v-main>
  </v-app>
</template>
