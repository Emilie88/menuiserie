<template>
  <div id="cuisine">
    <v-app>
      <v-main>
        <div>
          <LightGallery
            :images="images"
            :index="index"
            :disable-scroll="true"
            @close="index = null"
          />

          <v-row>
            <v-col
              v-for="(thumb, thumbIndex) in thumbs"
              :key="thumbIndex"
              @click="index = thumbIndex"
              class="d-flex child-flex"
              md="4"
              sm="12"
            >
              <v-img :src="thumb" />
            </v-col>
          </v-row>
        </div>
        <h3 class="font-weight-black mb-4 text-uppercase">
          Cuisine
        </h3>
      </v-main>
    </v-app>
  </div>
  <!-- <v-dialog v-model="dialog" max-width="1200">
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
    <v-carousel cycle dark hide-delimiters>
      <v-carousel-item
        v-for="(art, i) in cuisine"
        :key="i"
        :src="art.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
      </v-carousel-item>
    </v-carousel>
  </v-dialog> -->
</template>

<script>
export default {
  data: () => ({
    title: "Cuisine",
    index: null,
    thumbs: [require("../../assets/thumbs/cuisine/cuisineAlexPD.jpg")],
    dialog: false,
    images: [
      {
        title: "",
        url: require("../../assets/img/cuisine/cuisineAlexPD.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/cuisine/cusineGri.jpg"),
      },
      // {
      //   src: require("../../assets/img/cuisine/cuisine.jpg"),
      // },
      // {
      //   src: require("../../assets/img/cuisine/four.jpg"),
      // },
      // {
      //   src: require("../../assets/img/cuisine/orgeval.jpg"),
      // },
      // {
      //   src: require("../../assets/img/cuisine/bar.jpg"),
      // },
      // {
      //   src: require("../../assets/img/cuisine/blanche.jpg"),
      // },
      // {
      //   src: require("../../assets/img/cuisine/cuisine2.jpg"),
      // },
    ],
  }),
};
</script>
