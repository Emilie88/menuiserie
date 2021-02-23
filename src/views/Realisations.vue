<template>
  <div id="realisations">
    <v-app>
      <v-main>
        <v-sheet id="contact" color="#333333" dark tag="section" tile>
          <div class="py-12"></div>

          <v-container>
            <h2 class="display-2 font-weight-bold mb-3  text-center">
              {{ $t("realisation") }}
            </h2>

            <v-responsive class="mx-auto mb-12" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>

            <br />
            <v-theme-provider light>
              <div>
                <LightGallery
                  :images="toBeShownImg"
                  :index="index"
                  :disable-scroll="true"
                  @close="index = null"
                />

                <v-row>
                  <v-col
                    v-for="(thumb, thumbIndex) in toBeShown"
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
            <v-row>
              <div>
                <v-btn @click="prevPage" :disabled="currentPage == 1">{{
                  $t("showLess")
                }}</v-btn>
                <v-btn
                  @click="nextPage"
                  :disabled="currentPage == totalPages"
                  >{{ $t("showMore") }}</v-btn
                >
              </div>
            </v-row>
          </v-container>

          <div class="py-12"></div>
        </v-sheet>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import thumbs from "../gallery/thumbs";
import images from "../gallery/images";

export default {
  data() {
    return {
      thumbs: thumbs,
      images: images,
      index: null,
      more: false,
      currentPage: 1,
    };
  },
  computed: {
    toBeShown() {
      return this.thumbs.slice(0, this.currentPage * 6);
    },
    totalPages() {
      return (
        Math.ceil(this.thumbs.length / 6) && Math.ceil(this.images.length / 6)
      );
    },
    toBeShownImg() {
      return this.images.slice(0, this.currentPage * 6);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      this.currentPage = this.currentPage - 1 || 1;
    },
  },
};
</script>
<style scoped>
.v-icon.v-icon.v-icon--link {
  color: white;
}
</style>
