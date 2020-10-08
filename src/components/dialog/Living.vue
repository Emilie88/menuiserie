<template>
  <v-dialog v-model="dialog" max-width="1200">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        src="../../assets/img/salon/Paris.jpg"
        v-bind="attrs"
        v-on="on"
        class="mb-4"
        height="275"
        max-width="100%"
      ></v-img>

      <h3 class="font-weight-black mb-4 text-uppercase">
        Living
      </h3>
    </template>

    <v-carousel
      reverse-transition="fade-transition"
      height="600"
      dark
      hide-delimiters
      next-icon="fas fa-angle-right"
      prev-icon="fas fa-angle-left"
    >
      <v-carousel-item v-for="(item, i) in living" :key="i">
        <v-img :src="item.src" />
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    living: [
      {
        src: require("../../assets/img/salon/Paris.jpg"),
      },
      {
        src: require("../../assets/img/salon/salon.jpg"),
      },
      {
        src: require("../../assets/img/salon/salonAr.jpg"),
      },
      {
        src: require("../../assets/img/salon/DSC0044.jpg"),
      },
      {
        src: require("../../assets/img/salon/DSC0045.jpg"),
      },
      {
        src: require("../../assets/img/salon/IMG20.jpg"),
      },
      {
        src: require("../../assets/img/salon/Arrceuil.jpg"),
      },
      {
        src: require("../../assets/img/salon/ArSalon.jpg"),
      },
    ],
  }),
};
</script>
