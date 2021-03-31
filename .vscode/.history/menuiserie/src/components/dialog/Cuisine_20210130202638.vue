<template>
  <div id="cuisine">
    <div>
      <LightGallery
        :images="images"
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

<script>
export default {
  data: () => ({
    title: "Cuisine",
    index: null,
    dialog: false,
    thumbs: [require("../../assets/img/cuisine/cuisineAlexPD.jpg")],

    images: [
      {
        title: "",
        url: require("../../assets/img/cuisine/cuisineAlexPD.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/cuisine/cusineGri.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/cuisine/cuisineVertGauche.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/cuisine/cuisineVertDroit.jpg"),
      },
    ],
  }),
};
</script>
