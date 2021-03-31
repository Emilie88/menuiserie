<template>
  <div id="app">
    <v-app id="inspire">
      <Toolbar />
      <Snackbar />
      <v-main>
        <router-view />
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import Footer from "@/components/Footer.vue";
import Snackbar from "@/components/Snackbar.vue";

export default {
  components: {
    Toolbar,
    Footer,
    Snackbar,
  },
};
</script>
