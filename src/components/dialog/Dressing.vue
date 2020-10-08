<template>
  <v-dialog v-model="dialog" max-width="1200">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        src="../../assets/img/dressing/dressing.jpg"
        v-bind="attrs"
        v-on="on"
        class="mb-4"
        height="275"
        max-width="100%"
      ></v-img>

      <h3 class="font-weight-black mb-4 text-uppercase">
        Dressing
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
      <v-carousel-item v-for="(item, i) in dressing" :key="i">
        <v-img :src="item.src" />
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dressing: [
      {
        src: require("../../assets/img/dressing/dressing.jpg"),
      },
      {
        src: require("../../assets/img/dressing/img.jpg"),
      },
      {
        src: require("../../assets/img/dressing/lightFirst.jpg"),
      },
      {
        src: require("../../assets/img/dressing/light.jpg"),
      },
      {
        src: require("../../assets/img/dressing/miniDress.jpg"),
      },
      {
        src: require("../../assets/img/dressing/whiteDress.jpg"),
      },
      {
        src: require("../../assets/img/dressing/bedroom.jpg"),
      },
      {
        src: require("../../assets/img/dressing/comble.jpg"),
      },
      {
        src: require("../../assets/img/dressing/dressing.jpg"),
      },
      {
        src: require("../../assets/img/dressing/dressingImg.jpg"),
      },
    ],
  }),
};
</script>
