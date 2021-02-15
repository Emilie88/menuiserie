<template>
  <v-snackbar
    v-model="snackbar"
    :color="color"
    right
    :timeout="-1"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <v-icon dark left v-text="icon" />
    <span>{{ text }}</span>

    <template v-slot:action="{ attrs }">
      <v-btn icon v-bind="attrs" @click="snackbar = false">
        <v-icon small>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import debounce from "lodash/debounce";

export default {
  data() {
    return {
      hover: null,
      debouncedCloseSnackbar: debounce(this.closeSnackbar, 6000),
    };
  },

  computed: {
    snackbar: {
      get() {
        return this.$store.getters["snackbar"];
      },

      set(value) {
        if (!value) {
          this.withDetails = false;
        }

        this.$store.commit("setSnackbar", value);
      },
    },

    text() {
      return this.$store.getters["text"];
    },

    details() {
      return this.$store.getters["details"];
    },

    color() {
      return this.$store.getters["color"];
    },

    icon() {
      return this.$store.getters["icon"];
    },

    indefinitely() {
      // If the snackbar is open and it's hovered or it shows details or it's already closed, don't close it
      return (
        (this.snackbar && (this.hover || this.withDetails)) || !this.snackbar
      );
    },
  },

  watch: {
    indefinitely(value) {
      this.debouncedCloseSnackbar.cancel();

      if (!value) {
        // Set a timeout to close the snackbar if it's not indefinitely
        this.debouncedCloseSnackbar();
      }
    },
  },

  methods: {
    closeSnackbar() {
      this.$store.commit("setSnackbar", false);
    },
  },
};
</script>
