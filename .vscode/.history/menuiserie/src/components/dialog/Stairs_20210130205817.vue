<template>
  <div id="stairs">
    <div>
      <LightGallery
        :images="stairs"
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
      Escaliers
    </h3>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    index: null,
    thumbs: [require("../../assets/img/stairs/Paris.jpg")],
    stairs: [
      {
        title: "",
        url: require("../../assets/img/stairs/Paris.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/stairs/stair.jpg"),
      },
      {
        src: require("../../assets/img/stairs/Stairs.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/stairs/Champigny.jpg"),
      },
      {
        title: "",
        url: require("../../assets/img/stairs/colimacon.jpg"),
      },
    ],
  }),
};
</script>
