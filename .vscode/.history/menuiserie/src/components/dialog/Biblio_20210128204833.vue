<template>
  <v-dialog v-model="dialog" fullscreen max-width="1000">
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
        Bibliotèque
      </h3>
    </template>
    <template>
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(item, i) in biblio" :key="i" :src="item.src">
        </v-carousel-item>
      </v-carousel>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    title: "Biblioteque",
    src: require("../../assets/img/biblio/vergne.jpg"),
    dialog: false,
    biblio: [
      {
        src: require("../../assets/img/biblio/vergne.jpg"),
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
