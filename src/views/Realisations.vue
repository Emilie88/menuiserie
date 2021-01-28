<template>
  <div id="contact">
    <v-app>
      <v-main>
        <v-sheet id="contact" color="#333333" dark tag="section" tile>
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3  text-center">
              Réalisations
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <br />
            <v-theme-provider light>
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
            </v-theme-provider>
          </v-container>

          <div class="py-12"></div>
        </v-sheet>
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  data() {
    return {
      thumbs: [
        require("../assets/thumbs/biblio/biblio.jpg"),
        require("../assets/thumbs/biblio/vergne.jpg"),
        require("../assets/thumbs/biblio/salon.jpg"),
        require("../assets/thumbs/biblio/DSC0045.jpg"),
        require("../assets/thumbs/biblio/IMG20.jpg"),
        require("../assets/thumbs/biblio/salonAr.jpg"),
        require("../assets/thumbs/dressing/light.jpg"),
        require("../assets/thumbs/dressing/dressing.jpg"),
        require("../assets/thumbs/biblio/salonAr.jpg"),
      ],
      images: [
        {
          title: "Bibliotèque salon",
          url: require("../assets/img/biblio/biblio.jpg"),
        },
        {
          title: "Bibliotèque chambre",
          url: require("../assets/img/biblio/vergne.jpg"),
        },
        {
          title: "Grande bibliotèque de salon",
          url: require("../assets/img/biblio/salon.jpg"),
        },
        {
          title: "Bibliotèque salon",
          url: require("../assets/img/biblio/DSC0045.jpg"),
        },
        {
          title: "Bibliotèque salon",
          url: require("../assets/img/biblio/IMG20.jpg"),
        },
        {
          title: "Bibliotèque salon",
          url: require("../assets/img/biblio/salonAr.jpg"),
        },
      ],
      index: null,
    };
  },
};
</script>
<style scoped>
.v-icon.v-icon.v-icon--link {
  color: white;
}
</style>
