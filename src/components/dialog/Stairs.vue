<template>
  <v-dialog v-model="dialog" max-width="1200">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        src="../../assets/img/stairs/Paris.jpg"
        v-bind="attrs"
        v-on="on"
        class="mb-4"
        height="275"
        max-width="100%"
      ></v-img>

      <h3 class="font-weight-black mb-4 text-uppercase">
        Escaliers
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
      <v-carousel-item v-for="(item, i) in stairs" :key="i">
        <v-img :src="item.src" />
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    stairs: [
      {
        src: require("../../assets/img/stairs/Paris.jpg"),
      },
      {
        src: require("../../assets/img/stairs/stair.jpg"),
      },
      {
        src: require("../../assets/img/stairs/Stairs.jpg"),
      },
      {
        src: require("../../assets/img/stairs/Champigny.jpg"),
      },
      {
        src: require("../../assets/img/stairs/colimacon.jpg"),
      },
      {
        src: require("../../assets/img/stairs/Escaliers.jpg"),
      },
      {
        src: require("../../assets/img/stairs/Orgeval.jpg"),
      },

      {
        src: require("../../assets/img/stairs/OrgevalNext.jpg"),
      },
      {
        src: require("../../assets/img/stairs/stair.jpg"),
      },
    ],
  }),
};
</script>
