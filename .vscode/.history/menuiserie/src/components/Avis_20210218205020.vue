<template>
  <div id="avis">
    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        Avis
      </h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col md-12>
          <v-sheet class="mx-auto">
            <v-slide-group class="pa-2" show-arrows>
              <v-slide-item
                max-width="240"
                v-for="(comment, index) in comments"
                :key="index"
              >
                <v-card class="ma-2" max-width="235">
                  <div class="title font-light mb-1">
                    {{ comment.title }}
                  </div>
                  <div>
                    {{ comment.content }}
                  </div>

                  <div>
                    {{ comment.author }}
                  </div>
                  <div>
                    {{ comment.createdAt }}
                  </div>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
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
        "https://127.0.0.1:8000/api/comments"
      );
      this.comments = response.data;
      console.log(response.data);
    },
  },
};
</script>
