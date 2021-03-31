<template>
  <v-dialog v-model="dialog" max-width="1200">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        src="../../assets/img/cuisine/cuisineAlexPD.jpg"
        v-bind="attrs"
        v-on="on"
        class="mb-4"
        height="275"
        max-width="100%"
      ></v-img>
      <h3 class="font-weight-black mb-4 text-uppercase">
        Cuisine
      </h3>
    </template>
    <v-carousel
      cycle
      hide-delimiters
      dark
      hide-delimiters
      next-icon="fas fa-angle-right"
      prev-icon="fas fa-angle-left"
    >
      <v-carousel-item
        v-for="(art, i) in cuisine"
        :key="i"
        :src="art.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>

    <!-- <v-carousel
      reverse-transition="fade-transition"
      height="600"
      dark
      hide-delimiters
      next-icon="fas fa-angle-right"
      prev-icon="fas fa-angle-left"
    > -->
    <!-- <v-carousel-item v-for="(art, i) in cuisine" :key="i">
        <v-img :src="art.src"
      /></v-carousel-item>
    </v-carousel> -->
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    title: "Cuisine",
    src: require("../../assets/img/cuisine/cuisineAlexPD.jpg"),
    dialog: false,
    cuisine: [
      {
        src: require("../../assets/img/cuisine/cuisineAlexPD.jpg"),
      },
      {
        src: require("../../assets/img/cuisine/cusineGri.jpg"),
      },
      {
        src: require("../../assets/img/cuisine/cuisine.jpg"),
      },
      {
        src: require("../../assets/img/cuisine/four.jpg"),
      },
      {
        src: require("../../assets/img/cuisine/orgeval.jpg"),
      },
      {
        src: require("../../assets/img/cuisine/bar.jpg"),
      },
      {
        src: require("../../assets/img/cuisine/blanche.jpg"),
      },
      {
        src: require("../../assets/img/cuisine/cuisine2.jpg"),
      },
    ],
  }),
};
</script>
