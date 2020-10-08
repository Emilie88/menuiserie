<template>
  <v-dialog v-model="dialog" max-width="1200">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        src="../../assets/img/sdb/DSC0119.jpg"
        v-bind="attrs"
        v-on="on"
        class="mb-4"
        height="275"
        max-width="100%"
      ></v-img>

      <h3 class="font-weight-black mb-4 text-uppercase">
        Salle de Bain
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
      <v-carousel-item v-for="(bath, i) in baths" :key="i">
        <v-img :src="bath.src" />
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    title: "Salle de Bain",
    src: require("../../assets/img/sdb/DSC0119.jpg"),

    dialog: false,
    baths: [
      {
        src: require("../../assets/img/sdb/DSC0119.jpg"),
      },
      {
        src: require("../../assets/img/sdb/IMG20171211.jpg"),
      },
      {
        src: require("../../assets/img/sdb/SalleBain.jpg"),
      },
      {
        src: require("../../assets/img/sdb/sdb.jpg"),
      },
      {
        src: require("../../assets/img/sdb/Bain.jpg"),
      },
    ],
  }),
};
</script>
