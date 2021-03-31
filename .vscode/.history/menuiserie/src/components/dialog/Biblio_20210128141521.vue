<template>
  <v-dialog v-model="dialog" max-width="1200">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        src="../../assets/img/biblio/vergne.jpg"
        v-bind="attrs"
        v-on="on"
        class="mb-4"
        height="275"
        max-width="100%"
      ></v-img>
      <h3 class="font-weight-black mb-4 text-uppercase">
        Placards
      </h3>
    </template>

    <v-carousel cycle dark hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in placards"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    title: "Placards",
    src: require("../../assets/img/placard/IMG_20190304_093557.jpg"),
    dialog: false,
    placards: [
      {
        src: require("../../assets/img/placard/IMG_20180720_165301.jpg"),
      },
      {
        src: require("../../assets/img/biblio/biblio.jpg"),
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),
};
</script>
