<template>
  <div id="bath">
    <div>
      <LightGallery
        :images="dressing"
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
      {{ $t("dressing") }}
    </h3>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    index: null,
    thumbs: [require("../../assets/img/dressing/miniDress.jpg")],
    dressing: [
      {
        title: "",
        url: require("../../assets/img/dressing/miniDress.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/dressing/bedroom.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/dressing/lightFirst.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/dressing/light.jpg"),
      },
    ],
  }),
};
</script>
