<template>
  <v-app>
    <v-main>
      <v-sheet id="contact" dark tag="section" tile>
        <div class="py-12"></div>

        <v-container>
          <h2 class="mb-3 text-uppercase text-center">
            Avis
          </h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>
          <v-row>
            <v-col cols="12" md="6" xs="12">
              <v-theme-provider>
                <v-row>
                  <v-col md="12">
                    <!-- <div>Ajouter un avis</div> -->
                    <v-card class="pa-5">
                      <validation-observer v-slot="{ handleSubmit }">
                        <v-form
                          ref="form"
                          @submit.prevent="handleSubmit(addComment)"
                          lazy-validation
                        >
                          <v-row>
                            <v-col cols="12" md="6" xs="12">
                              <custom-text-field
                                color="lime darken-3"
                                v-model="body.author"
                                label="Name"
                                required
                              />
                            </v-col>
                            <v-col cols="12" md="6" xs="12">
                              <custom-text-field
                                hide-details
                                single-line
                                color="lime darken-3"
                                v-model="body.rating"
                                label="Stars *"
                                type="number"
                                max="5"
                                min="0"
                              />
                            </v-col>
                          </v-row>

                          <custom-text-field
                            color="lime darken-3"
                            v-model="body.title"
                            label="Subject *"
                            required
                          />

                          <custom-textarea
                            color="lime darken-3"
                            v-model="body.content"
                            label="Message *"
                            required
                          />

                          <v-row align="center" justify="center">
                            <v-btn
                              class="mr-4"
                              type="submit"
                              outlined
                              color="lime darken-3"
                              x-large
                            >
                              Send
                            </v-btn>
                          </v-row>
                        </v-form>
                      </validation-observer>
                    </v-card>
                  </v-col>
                </v-row>
              </v-theme-provider>
            </v-col>
            <v-col cols="12" md="6" xs="12">
              <div>Gerer mes avis</div>
              <UsersComment />
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>
    </v-main>
  </v-app>
</template>
<script>
import UsersComment from "../../components/user/UsersComment.vue";
const token = localStorage.getItem("token");

export default {
  name: "Testimonials",
  components: {
    UsersComment,
  },
  data() {
    return {
      body: {
        rating: null,
        author: null,
        title: null,
        content: null,
      },
    };
  },
  methods: {
    async addComment() {
      try {
        await this.$http.post(
          "https://127.0.0.1:8000/api/add-comment",
          this.body,

          {
            headers: {
              Authorization: "Bearer" + " " + token,
            },
          }
        );

        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your comment has been added",
          type: "success",
        });
      } catch (error) {
        // Error snackbar
        this.$store.dispatch("show", {
          text: error.message,
          type: "error",
        });

        this.$refs.form.reset();
      }
    },
  },
};
</script>
