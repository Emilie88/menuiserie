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
      {{ $t("sdb") }}
    </h3>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Salle de Bain",
    thumbs: [require("../../assets/img/sdb/DSC0119.jpg")],
    index: null,
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
