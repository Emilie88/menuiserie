<template>
  <v-app>
    <v-main>
      <div class="py-12"></div>
      <div>
        Pour ajouter ou gerer vos avis
        <v-icon>{{ icons.mdiCursorDefaultClick }}</v-icon>
      </div>
      <v-container> </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mdiCursorDefaultClick } from "@mdi/js";
export default {
  data() {
    return {
      icons: {
        mdiCursorDefaultClick,
      },
    };
  },
};
</script>
