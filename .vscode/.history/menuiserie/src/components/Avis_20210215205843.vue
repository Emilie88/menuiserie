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
              <v-slide-item max-width="240">
                <v-card class="ma-2" max-width="235">
                  <div class="title font-light mb-1">
                    {{ body.title }}
                  </div>
                  <!-- <v-icon>mdi-star</v-icon> -->
                  <div>
                    {{ body.content }}
                  </div>

                  <div>
                    {{ body.author }}
                  </div>
                  <div>
                    {{ body.createdAt }}
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
      body: {
        title: "",
        content: "",
        author: "",
        createdAt: "",
      },
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("http://127.0.0.1:8000/api/comments")
        .then((response) => (this.body = response.data));
    },
  },
};
</script>
