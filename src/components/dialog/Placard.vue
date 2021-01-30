<template>
  <div id="placard">
    <div>
      <LightGallery
        :images="placard"
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
      Placards
    </h3>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    index: null,
    thumbs: [require("../../assets/img/placard/etagers.jpeg")],
    placard: [
      {
        title: "",
        url: require("../../assets/img/placard/etagers.jpeg"),
      },

      {
        title: "",
        url: require("../../assets/img/placard/placard3.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/placard/placard5.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/placard/placard1.jpg"),
      },
    ],
  }),
};
</script>
