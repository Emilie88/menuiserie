<template>
  <router-view />
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
