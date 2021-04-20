<template>
  <v-app>
    <v-main>
      <div class="py-8"></div>
      <v-container>
        <h2 class="mb-3 text-uppercase text-center">{{ $t("avis") }}</h2>

        <v-responsive class="mx-auto mb-3" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
        <v-row>
          <v-col cols="12" md="6" xs="12">
            <v-theme-provider>
              <v-row>
                <v-col md="12">
                  <div>{{ $t("addOpinion") }}</div>
                  <div class="py-2"></div>
                  <v-sheet>
                    <v-card class="pa-5">
                      <validation-observer v-slot="{ handleSubmit }">
                        <v-form
                          ref="form"
                          lazy-validation
                          @submit.prevent="handleSubmit(addComment)"
                        >
                          <v-row>
                            <v-col cols="12" md="6" xs="12">
                              <custom-text-field
                                v-model="body.author"
                                color="lime darken-3"
                                :label="$t('name')"
                                required
                              />
                            </v-col>
                            <v-col cols="12" md="6" xs="12">
                              <custom-text-field
                                v-model="body.rating"
                                hide-details
                                single-line
                                color="lime darken-3"
                                :label="$t('rating')"
                                type="number"
                                max="5"
                                min="1"
                              />
                            </v-col>
                          </v-row>

                          <custom-text-field
                            v-model="body.title"
                            color="lime darken-3"
                            :label="$t('title')"
                            required
                          />

                          <custom-textarea
                            v-model="body.content"
                            color="lime darken-3"
                            :label="$t('contentForm')"
                            required
                          />

                          <v-row align="center" justify="center">
                            <v-btn
                              class="mr-4"
                              type="submit"
                              outlined
                              color="lime darken-3"
                              large
                            >
                              {{ $t("send") }}
                            </v-btn>
                          </v-row>
                        </v-form>
                      </validation-observer>
                    </v-card>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-theme-provider>
          </v-col>
          <v-col cols="12" md="6" xs="12">
            <v-row>
              <v-col md="12">
                <div>{{ $t("myOpinions") }}</div>
                <div class="py-2"></div>
                <user-users-comment />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </v-main>
  </v-app>
</template>
<script>
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
      token: localStorage.getItem("token"),
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
              Authorization: "Bearer" + " " + this.token,
            },
          },
        );
        location.reload();
        // Success snackbar
        this.$store.dispatch("show", {
          text: "Your comment has been added",
          type: "success",
        });
        // this.$refs.form.reset();
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
