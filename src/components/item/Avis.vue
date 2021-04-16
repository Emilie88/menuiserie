<template>
  <div id="avis">
    <v-container>
      <h2
        :class="[
          $vuetify.breakpoint.smAndDown
            ? 'display-1 font-weight-bold mb-3 text-uppercase text-center'
            : 'display-2 font-weight-bold mb-3 text-uppercase text-center',
        ]"
      >
        {{ $t("avis") }}
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col md-12>
          <v-slide-group class="pa-2" show-arrows>
            <v-slide-item
              v-for="(item, index) in comments"
              :key="index"
              max-width="240"
            >
              <v-card class="ma-2" max-width="235">
                <v-card-title class="title font-light mb-1">
                  {{ item.title }}
                </v-card-title>
                <v-card-text>
                  <v-rating
                    v-model="item.rating"
                    readonly
                    color="lime darken-3"
                    background-color="lime darken-3"
                    small
                  ></v-rating>

                  <span>{{ item.content }}</span>
                </v-card-text>

                <v-card-subtitle>
                  <span><v-icon>mdi-account</v-icon>{{ item.author }}</span>

                  <!-- <span>{{ item.createdAt }}</span> -->
                </v-card-subtitle>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      comments: [],
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    async getComments() {
      const response = await this.$http.get(
        "https://127.0.0.1:8000/api/comments/",
      );
      this.comments = response.data;
    },
  },
};
</script>
