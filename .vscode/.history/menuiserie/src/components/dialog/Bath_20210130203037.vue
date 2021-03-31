<template>
  <div id="bath">
    <div>
      <LightGallery
        :images="baths"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />

      <v-card
        v-for="(thumb, thumbIndex) in thumbs"
        :key="thumbIndex"
        @click="index = thumbIndex"
      >
        <v-img :src="thumb" width="100%" height="270" />
      </v-card>
    </div>
    <br />
    <h3 class="font-weight-black mb-4 text-uppercase">
      Cuisine
    </h3>
  </div>
</template>

<!-- <v-dialog v-model="dialog" max-width="1200">
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
    <v-carousel cycle dark hide-delimiters>
      <v-carousel-item
        v-for="(bath, i) in baths"
        :key="i"
        :src="bath.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
  </v-dialog> -->

<script>
export default {
  data: () => ({
    title: "Salle de Bain",
    thumbs: [require("../../assets/img/sdb/DSC0119.jpg")],

    dialog: false,
    baths: [
      {
        title: "",
        url: require("../../assets/img/sdb/DSC0119.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/sdb/IMG20171211.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/sdb/SalleBain.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/sdb/sdb.jpg"),
      },
    ],
  }),
};
</script>
