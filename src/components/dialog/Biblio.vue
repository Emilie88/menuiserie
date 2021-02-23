<template>
  <div id="librarie">
    <div>
      <LightGallery
        :images="biblio"
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
      {{ $t("biblio") }}
    </h3>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: "Biblioteque",
    thumbs: [require("../../assets/img/biblio/vergne.jpg")],
    dialog: false,
    index: null,
    biblio: [
      {
        title: "",
        url: require("../../assets/img/biblio/vergne.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/biblio/biblio.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/biblio/DSC0045.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/biblio/salon.jpg"),
      },
    ],
  }),
};
</script>
