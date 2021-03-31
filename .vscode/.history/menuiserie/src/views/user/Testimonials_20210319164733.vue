<template>
  <v-app>
    <v-main>
      <v-sheet id="contact" dark tag="section" tile>
        <div class="py-12"></div>

        <v-container>
          <h2
            :class="[
              $vuetify.breakpoint.smAndDown
                ? 'display-1 font-weight-bold mb-3 text-uppercase text-center'
                : 'display-2 font-weight-bold mb-3 text-uppercase text-center',
            ]"
          >
            Avis
          </h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-theme-provider>
            <v-row>
              <v-col md="12">
                <v-card class="pa-5">
                  <validation-observer v-slot="{ handleSubmit }">
                    <v-form
                      ref="form"
                      @submit.prevent="handleSubmit(addComment)"
                      lazy-validation
                    >
                      <v-row>
                        <v-col md="6">
                          <custom-text-field
                            color="lime darken-3"
                            v-model="body.author"
                            label="Name"
                            required
                          />
                        </v-col>
                        <v-col md="6">
                          <custom-text-field
                            hide-details
                            single-line
                            color="lime darken-3"
                            v-model="body.rating"
                            label="Etoiles"
                            type="number"
                            max="5"
                            min="0"
                          />
                        </v-col>
                      </v-row>

                      <custom-text-field
                        color="lime darken-3"
                        v-model="body.title"
                        label="Subject"
                        required
                      />

                      <custom-textarea
                        color="lime darken-3"
                        v-model="body.content"
                        label="Message"
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
                          Envoyer
                        </v-btn>
                      </v-row>
                    </v-form>
                  </validation-observer>
                </v-card>
              </v-col>
            </v-row>
          </v-theme-provider>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>
    </v-main>
  </v-app>
</template>
<script>
const token = localStorage.getItem("token");

export default {
  name: "Testimonials",
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
          "https://127.0.0.1:8000/api/comment",
          this.body,

          {
            headers: {
              Authorization: "Bearer" + token,
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
